import assert from "node:assert/strict";
import { chromium } from "playwright-core";

const baseUrl = process.env.FUNCTIONAL_BASE_URL ?? "http://localhost:3000";
const executablePath = process.env.CHROME_BIN;
const whatsappNumber = "59171431096";

if (!executablePath) {
  throw new Error("CHROME_BIN is required to run functional QA.");
}

function assertWhatsAppHref(href, expectedMessage) {
  assert.ok(href, "WhatsApp link must have an href.");
  const url = new URL(href);
  assert.equal(url.protocol, "https:");
  assert.equal(url.hostname, "wa.me");
  assert.equal(url.pathname, `/${whatsappNumber}`);
  assert.equal(url.searchParams.get("text"), expectedMessage);
}

async function assertFocused(locator, message) {
  const focused = await locator.evaluate((element) => document.activeElement === element);
  assert.equal(focused, true, message);
}

async function createPage(browser, viewport) {
  const context = await browser.newContext({
    viewport,
    reducedMotion: "reduce",
  });
  const page = await context.newPage();

  await page.addInitScript(() => {
    window.dataLayer = [];
  });

  return { context, page };
}

async function installWhatsAppNavigationGuard(page) {
  await page.evaluate(() => {
    document.addEventListener(
      "click",
      (event) => {
        const target = event.target instanceof Element
          ? event.target.closest('a[href^="https://wa.me/"]')
          : null;

        if (target) event.preventDefault();
      },
      true,
    );
  });
}

async function goto(page, path = "/") {
  await page.goto(`${baseUrl}${path}`, {
    waitUntil: "domcontentloaded",
    timeout: 30_000,
  });
}

async function assertLastAnalyticsEvent(page, expected) {
  const lastEvent = await page.evaluate(() => window.dataLayer?.at(-1));
  assert.ok(lastEvent, "Expected a dataLayer event after WhatsApp click.");

  for (const [key, value] of Object.entries(expected)) {
    assert.equal(lastEvent[key], value, `Unexpected analytics value for ${key}.`);
  }
}

async function testAccordionDesktop(browser) {
  const { context, page } = await createPage(browser, { width: 1440, height: 1000 });

  try {
    await goto(page);
    const section = page.locator("#zapatos");
    await section.scrollIntoViewIfNeeded();

    const openCuero = section.getByRole("button", { name: /Abrir colección Cuero/i });
    await openCuero.focus();
    await page.keyboard.press("Enter");

    const closeCuero = section.getByRole("button", {
      name: "Cerrar colección Cuero",
      exact: true,
    });
    await closeCuero.waitFor({ state: "visible" });

    assert.equal(await closeCuero.getAttribute("aria-expanded"), "true");
    assert.equal(await closeCuero.getAttribute("aria-controls"), "collection-panel-2");
    await assertFocused(closeCuero, "Focus should move to the close control after opening Cuero.");

    const region = section.locator('#collection-panel-2[role="region"]');
    await region.waitFor({ state: "visible" });
    assert.equal(await region.getAttribute("aria-labelledby"), "collection-title-2");

    await page.keyboard.press("Escape");
    await openCuero.waitFor({ state: "visible" });
    assert.equal(await openCuero.getAttribute("aria-expanded"), "false");
    await assertFocused(openCuero, "Escape should restore focus to the Cuero trigger.");

    const openMujer = section.getByRole("button", { name: /Abrir colección Mujer/i });
    await openMujer.focus();
    await page.keyboard.press("Space");

    const closeMujer = section.getByRole("button", {
      name: "Cerrar colección Mujer",
      exact: true,
    });
    await closeMujer.waitFor({ state: "visible" });
    await assertFocused(closeMujer, "Space should open Mujer and move focus to its close control.");
    await closeMujer.click();
    await openMujer.waitFor({ state: "visible" });
    await assertFocused(openMujer, "Closing Mujer should restore focus to its trigger.");

    console.log("✓ Accordion desktop keyboard, ARIA and focus management");
  } finally {
    await context.close();
  }
}

async function testAccordionMobile(browser) {
  const { context, page } = await createPage(browser, { width: 390, height: 844 });

  try {
    await goto(page);
    const section = page.locator("#zapatos");
    await section.scrollIntoViewIfNeeded();

    const openHombre = section.getByRole("button", { name: /Abrir colección Hombre/i });
    await openHombre.click();

    const mobileClose = section.getByRole("button", {
      name: "Cerrar colección",
      exact: true,
    });
    await mobileClose.waitFor({ state: "visible" });
    assert.equal(await mobileClose.getAttribute("aria-expanded"), "true");
    await mobileClose.click();
    await openHombre.waitFor({ state: "visible" });
    await assertFocused(openHombre, "Mobile close should restore focus to the Hombre trigger.");

    await page.evaluate(() => window.scrollTo(0, 1600));
    await page.waitForTimeout(250);

    const floating = page.locator('a[aria-label="Consultar a Matius Perfect por WhatsApp"]');
    assert.equal(await floating.getAttribute("tabindex"), "-1");
    assert.equal(await floating.evaluate((element) => getComputedStyle(element).display), "none");

    console.log("✓ Accordion mobile close and floating WhatsApp safety");
  } finally {
    await context.close();
  }
}

async function testWhatsAppContexts(browser) {
  const { context, page } = await createPage(browser, { width: 1440, height: 1000 });

  try {
    await goto(page);
    await installWhatsAppNavigationGuard(page);

    const hero = page.locator("section").first();
    const heroWhatsApp = hero.getByRole("link", { name: "Consultar por WhatsApp" });
    assertWhatsAppHref(
      await heroWhatsApp.getAttribute("href"),
      "Hola, vi los zapatos de Matius Perfect en la web. ¿Qué modelos, tallas y colores tienen disponibles?",
    );
    await heroWhatsApp.click();
    await assertLastAnalyticsEvent(page, {
      event: "whatsapp_hero_click",
      source: "hero",
      page_path: "/",
    });

    const collections = page.locator("#zapatos");
    await collections.scrollIntoViewIfNeeded();
    await collections.getByRole("button", { name: /Abrir colección Cuero/i }).click();
    const collectionWhatsApp = collections.getByRole("link", { name: "Consultar por WhatsApp" });
    assertWhatsAppHref(
      await collectionWhatsApp.getAttribute("href"),
      "Hola, vi el modelo Colección Cuero en la web de Matius Perfect. ¿Qué tallas y colores tienen disponibles?",
    );
    await collectionWhatsApp.click();
    await assertLastAnalyticsEvent(page, {
      event: "whatsapp_product_click",
      source: "product",
      product_name: "Colección Cuero",
      page_path: "/",
    });

    const finalCta = page.locator("#contacto");
    await finalCta.scrollIntoViewIfNeeded();
    const finalWhatsApp = finalCta.getByRole("link", { name: "Hablar por WhatsApp" });
    assertWhatsAppHref(
      await finalWhatsApp.getAttribute("href"),
      "Hola, recorrí la web de Matius Perfect y quisiera ayuda para encontrar un par. ¿Qué modelos y tallas tienen disponibles?",
    );
    await finalWhatsApp.click();
    await assertLastAnalyticsEvent(page, {
      event: "whatsapp_final_cta_click",
      source: "final-cta",
      page_path: "/",
    });

    await goto(page, "/tiendas/central");
    await installWhatsAppNavigationGuard(page);
    const storeWhatsApp = page.getByRole("link", { name: "Consultar esta sucursal" });
    assertWhatsAppHref(
      await storeWhatsApp.getAttribute("href"),
      "Hola, vi la sucursal Central en la web de Matius Perfect. ¿Me comparten su ubicación y horarios de atención?",
    );
    await storeWhatsApp.click();
    await assertLastAnalyticsEvent(page, {
      event: "whatsapp_store_click",
      source: "store",
      store_name: "Central",
      page_path: "/tiendas/central",
    });

    console.log("✓ WhatsApp URLs, contextual messages and analytics events");
  } finally {
    await context.close();
  }
}

const browser = await chromium.launch({
  headless: true,
  executablePath,
  args: ["--no-sandbox", "--disable-gpu"],
});

try {
  await testAccordionDesktop(browser);
  await testAccordionMobile(browser);
  await testWhatsAppContexts(browser);
  console.log("Functional interaction QA passed.");
} finally {
  await browser.close();
}
