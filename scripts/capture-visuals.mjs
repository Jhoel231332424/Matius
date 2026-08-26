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
  { name: "menu-mobile", width: 390, height: 844, openMenu: true, menuTarget: "Fabricación" },
  { name: "menu-desktop", width: 1440, height: 1000, openMenu: true, menuTarget: "Tiendas" },
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
  {
    name: "craftsmanship-story-desktop",
    width: 1440,
    height: 1000,
    selector: "#fabricacion figure",
  },
  { name: "contact-mobile", width: 390, height: 844, selector: "#contacto" },
  { name: "contact-desktop", width: 1440, height: 1000, selector: "#contacto" },
  { name: "leather-route-mobile", width: 390, height: 844, path: "/zapatos-de-cuero" },
  { name: "leather-route-desktop", width: 1440, height: 1000, path: "/zapatos-de-cuero" },
  { name: "craft-route-mobile", width: 390, height: 844, path: "/nuestra-fabricacion" },
  { name: "craft-route-desktop", width: 1440, height: 1000, path: "/nuestra-fabricacion" },
  { name: "stores-route-mobile", width: 390, height: 844, path: "/tiendas" },
  { name: "stores-route-desktop", width: 1440, height: 1000, path: "/tiendas" },
];

async function waitForSectionImages(locator) {
  await locator.evaluate(async (element) => {
    const images = [...element.querySelectorAll("img")];

    await Promise.all(
      images.map((image) => {
        if (image.complete && image.naturalWidth > 0) return Promise.resolve();

        return new Promise((resolve) => {
          const done = () => resolve();
          image.addEventListener("load", done, { once: true });
          image.addEventListener("error", done, { once: true });
        });
      }),
    );
  });
}

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
    await page.goto(`${baseUrl}${testCase.path ?? "/"}`, { waitUntil: "networkidle" });
    await page.addStyleTag({ content: "::-webkit-scrollbar{display:none!important}html{scroll-behavior:auto!important}" });

    if (testCase.openMenu) {
      await page.getByRole("button", { name: "Abrir menú" }).click();
      const dialog = page.getByRole("dialog", { name: "Menú principal" });
      await dialog.waitFor({ state: "visible" });

      if (testCase.menuTarget) {
        await dialog.getByRole("link", { name: testCase.menuTarget, exact: true }).focus();
      }

      await waitForSectionImages(dialog);
      await page.waitForLoadState("networkidle").catch(() => undefined);
      await page.waitForTimeout(120);
    }

    if (testCase.selector) {
      const locator = page.locator(testCase.selector);
      await locator.waitFor({ state: "visible" });
      await locator.evaluate((element) => {
        const header = document.querySelector("header");
        const headerHeight = header?.getBoundingClientRect().height ?? 0;
        const targetY = element.getBoundingClientRect().top + window.scrollY - headerHeight - 8;
        window.scrollTo(0, Math.max(0, targetY));
      });

      await page.waitForTimeout(150);
      await waitForSectionImages(locator);
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
