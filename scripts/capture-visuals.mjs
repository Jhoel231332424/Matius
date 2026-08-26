import { mkdir } from "node:fs/promises";
import { chromium } from "playwright-core";

const baseUrl = process.env.VISUAL_BASE_URL ?? "http://localhost:3000";
const executablePath = process.env.CHROME_BIN;

if (!executablePath) {
  throw new Error("CHROME_BIN is required to run visual snapshots.");
}

const cases = [
  { name: "home-mobile", width: 390, height: 844 },
  { name: "home-desktop", width: 1440, height: 1000 },
  { name: "collections-mobile", width: 390, height: 844, selector: "#zapatos" },
  { name: "collections-desktop", width: 1440, height: 1000, selector: "#zapatos" },
  {
    name: "collections-open-mobile",
    width: 390,
    height: 844,
    selector: "#zapatos",
    openCollection: "Cuero",
  },
  {
    name: "collections-open-desktop",
    width: 1440,
    height: 1000,
    selector: "#zapatos",
    openCollection: "Cuero",
  },
  { name: "craftsmanship-mobile", width: 390, height: 844, selector: "#fabricacion" },
  { name: "craftsmanship-desktop", width: 1440, height: 1000, selector: "#fabricacion" },
  { name: "contact-mobile", width: 390, height: 844, selector: "#contacto" },
  { name: "contact-desktop", width: 1440, height: 1000, selector: "#contacto" },
];

await mkdir("visual-snapshots", { recursive: true });

const browser = await chromium.launch({
  headless: true,
  executablePath,
  args: ["--no-sandbox", "--disable-gpu"],
});

try {
  for (const testCase of cases) {
    const context = await browser.newContext({
      viewport: { width: testCase.width, height: testCase.height },
      deviceScaleFactor: 1,
      reducedMotion: "reduce",
    });

    const page = await context.newPage();
    await page.goto(`${baseUrl}/`, { waitUntil: "networkidle" });
    await page.addStyleTag({ content: "::-webkit-scrollbar{display:none!important}html{scroll-behavior:auto!important}" });

    if (testCase.selector) {
      const locator = page.locator(testCase.selector);
      await locator.waitFor({ state: "visible" });
      await locator.evaluate((element) => {
        const header = document.querySelector("header");
        const headerHeight = header?.getBoundingClientRect().height ?? 0;
        const targetY = element.getBoundingClientRect().top + window.scrollY - headerHeight - 8;
        window.scrollTo(0, Math.max(0, targetY));
      });

      await page.waitForTimeout(250);
      await page.waitForLoadState("networkidle").catch(() => undefined);
    }

    if (testCase.openCollection && testCase.selector) {
      const section = page.locator(testCase.selector);
      const trigger = section.getByRole("button", {
        name: new RegExp(`Abrir colección ${testCase.openCollection}`, "i"),
      });
      await trigger.click();
      await section
        .getByRole("heading", { name: testCase.openCollection, exact: true })
        .waitFor({ state: "visible" });
      await page.waitForTimeout(150);
    }

    await page.screenshot({
      path: `visual-snapshots/${testCase.name}.png`,
      fullPage: false,
      animations: "disabled",
    });

    await context.close();
  }
} finally {
  await browser.close();
}
