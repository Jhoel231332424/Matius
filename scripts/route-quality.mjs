import { chromium } from "playwright-core";

const baseUrl = process.env.ROUTE_QA_BASE_URL ?? "http://localhost:3000";
const executablePath = process.env.CHROME_BIN;

if (!executablePath) {
  throw new Error("CHROME_BIN is required to run route quality QA.");
}

const routes = [
  "/",
  "/zapatos-de-cuero",
  "/zapatos-hombre",
  "/zapatos-mujer",
  "/nuestra-fabricacion",
  "/tiendas",
  "/tiendas/central",
  "/tiendas/sucursal-1",
  "/tiendas/sucursal-2",
];

const viewports = [
  { name: "mobile", width: 390, height: 844 },
  { name: "desktop", width: 1440, height: 1000 },
];

const failures = [];
const browser = await chromium.launch({
  headless: true,
  executablePath,
  args: ["--no-sandbox", "--disable-gpu"],
});

try {
  for (const viewport of viewports) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      reducedMotion: "reduce",
    });

    for (const route of routes) {
      const page = await context.newPage();
      const runtimeErrors = [];

      page.on("pageerror", (error) => {
        runtimeErrors.push(`pageerror: ${error.message}`);
      });

      page.on("console", (message) => {
        if (message.type() === "error") {
          runtimeErrors.push(`console.error: ${message.text()}`);
        }
      });

      const response = await page.goto(`${baseUrl}${route}`, {
        waitUntil: "domcontentloaded",
        timeout: 20_000,
      });

      if (!response?.ok()) {
        failures.push(`${viewport.name} ${route}: HTTP ${response?.status() ?? "no response"}`);
        await page.close();
        continue;
      }

      await page.waitForLoadState("networkidle", { timeout: 8_000 }).catch(() => undefined);

      const result = await page.evaluate(() => {
        const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute("href") ?? "";
        const description = document.querySelector('meta[name="description"]')?.getAttribute("content")?.trim() ?? "";
        const robots = document.querySelector('meta[name="robots"]')?.getAttribute("content")?.toLowerCase() ?? "";
        const h1s = [...document.querySelectorAll("h1")];
        const documentElement = document.documentElement;

        return {
          title: document.title.trim(),
          description,
          canonical,
          robots,
          h1Count: h1s.length,
          h1Visible: h1s.length === 1 && h1s[0].getBoundingClientRect().height > 0,
          overflow: Math.max(0, documentElement.scrollWidth - documentElement.clientWidth),
        };
      });

      if (!result.title) {
        failures.push(`${viewport.name} ${route}: missing document title`);
      }

      if (!result.description) {
        failures.push(`${viewport.name} ${route}: missing meta description`);
      }

      if (!result.canonical) {
        failures.push(`${viewport.name} ${route}: missing canonical`);
      } else {
        const canonicalUrl = new URL(result.canonical, baseUrl);
        const expectedPath = route === "/" ? "/" : route.replace(/\/$/, "");
        const canonicalPath = canonicalUrl.pathname === "/" ? "/" : canonicalUrl.pathname.replace(/\/$/, "");

        if (canonicalPath !== expectedPath) {
          failures.push(
            `${viewport.name} ${route}: canonical path ${canonicalUrl.pathname} does not match ${route}`,
          );
        }
      }

      if (!result.robots.includes("noindex") || !result.robots.includes("nofollow")) {
        failures.push(`${viewport.name} ${route}: preview robots meta must contain noindex,nofollow`);
      }

      if (result.h1Count !== 1 || !result.h1Visible) {
        failures.push(
          `${viewport.name} ${route}: expected one visible H1, found ${result.h1Count}`,
        );
      }

      if (result.overflow > 1) {
        failures.push(`${viewport.name} ${route}: horizontal overflow ${result.overflow}px`);
      }

      for (const runtimeError of runtimeErrors) {
        failures.push(`${viewport.name} ${route}: ${runtimeError}`);
      }

      console.log(
        `PASS ${viewport.name.padEnd(7)} ${route.padEnd(24)} H1=${result.h1Count} overflow=${result.overflow}px`,
      );

      await page.close();
    }

    await context.close();
  }
} finally {
  await browser.close();
}

if (failures.length > 0) {
  console.error("\nRoute quality QA failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`\nRoute quality QA passed for ${routes.length} routes × ${viewports.length} viewports.`);
