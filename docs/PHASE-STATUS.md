# Phase Status — Matius Perfect

## Estado general

Branch: `feat/landing-foundation`  
PR: #3 (draft)  
Preview: `https://matius-preview-production.up.railway.app`

La landing ya cuenta con diseño editorial, CRO de WhatsApp, QA visual, preview público protegido y validación automática contra Railway.

## Fase 1 — Foundation
Estado: **completada**.

Next.js/React/TypeScript/Tailwind, App Router, tokens, fuentes, data/types/lib, layout, rutas, metadata, sitemap/robots y builders JSON-LD.

## Fase 2 — Producción visual
Estado: **completada con assets first-party disponibles**.

Fotografía oficial de campaña integrada sin atribuir imágenes a modelos concretos sin verificación.

## Fase 3 — Design governance
Estado: **completada**. Commit base: `c21319c`.

`DESIGN.md`, `AGENTS.md` y skills locales para design/CRO/SEO/visual QA.

## Fase 4 — Sistema editorial
Estado: **completada y validada**.

Hero product-first, ProductCardMatius, Brand Pillars, Craftsmanship sticky CSS, Leather Detail, Lifestyle, Lookbook, Stores y Final CTA.

## Fase 5 — CRO / WhatsApp
Estado: **completada y validada**.

Mensajes y eventos diferenciados por Hero, producto, sucursal, CTA final y floating. Mobile floating protegido para no tapar contenido.

## Fase 6 — Editorial Collection Accordion
Estado: **completada y validada**.

Hombre / Mujer / Cuero; horizontal desktop, vertical mobile; click/teclado; Escape; cierre mobile; CSS-first.

## Fase 7 — CI / Visual QA local
Estado: **completada**.

- lint;
- typecheck;
- build;
- smoke;
- 10 snapshots;
- Lighthouse mobile.

## Fase 8 — Preview Safety
Estado: **completada**.

Preview `noindex,nofollow`, robots compatible con lectura de noindex e indexación desactivada hasta producción final.

## Fase 9 — Railway Preview
Estado: **completada**.

Proyecto `Matius Preview`, servicio `matius-preview`, branch `feat/landing-foundation` y dominio público Railway.

## Fase 10 — Live Preview QA
Estado: **completada**. Feature: `c285304`.

`/api/deployment-info` sincroniza GitHub Actions con el SHA real servido por Railway. El workflow valida rutas, SEO/noindex, WhatsApp, 10 screenshots y Lighthouse live.

Baseline live registrado:
- Performance 98;
- Accessibility 100;
- Best Practices 100;
- SEO 100;
- LCP ≈ 2.22 s;
- CLS 0;
- TBT ≈ 118 ms.

## Fase 11 — Client-ready Copy
Estado: **completada y validada**. Feature: `864cac3`.

Se eliminó lenguaje interno/provisional visible del footer y rutas de zapatos, fabricación y sucursales.

## Fase 12 — Copy Regression Guard
Estado: **completada y validada**. Feature: `61599e8`.

Preview QA falla si rutas públicas vuelven a incluir copy como “Demo editorial”, “Colección preparada”, “Ruta preparada”, “Storytelling preparado” u otros mensajes internos definidos por el gate.

## Fase 13 — Railway Runtime Hardening
Estado: **implementada y desplegada**. Feature: `f01af44`.

- `/api/health`;
- start `npm start`;
- healthcheck `/api/health`;
- timeout 120 s;
- sleep desactivado;
- restart `ON_FAILURE`;
- 3 reintentos máximos.

Configuración documentada en `docs/RAILWAY-RUNTIME.md`.

## Pendiente del cliente

### Marca / assets
- [ ] logo maestro/vectorial
- [ ] fotografías originales en alta resolución
- [ ] imágenes por producto
- [ ] macros de cuero/acabados
- [ ] fotos de fabricación
- [ ] fotos de sucursales

### Negocio
- [ ] direcciones exactas y horarios
- [ ] teléfonos por sucursal si varían
- [ ] catálogo definitivo
- [ ] precios vigentes
- [ ] tallas/colores
- [ ] stock si se mostrará
- [ ] garantía
- [ ] cambios/devoluciones
- [ ] claims técnicos autorizados
- [ ] testimonios reales
- [ ] proveedor de analytics

## Próximos pasos ejecutables sin cliente

1. QA funcional Playwright de interacciones clave;
2. validar keyboard/Escape/aria del accordion live;
3. validar CTAs y mensajes WhatsApp por source;
4. revisar rutas secundarias mobile/desktop;
5. mantener documentación/PR sincronizados.

## Gate de producción

No activar indexación, sacar PR de draft ni mergear a `main` hasta incorporar datos mínimos de producción y recibir revisión explícita.
