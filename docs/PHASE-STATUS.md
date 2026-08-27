# Phase Status — Matius Perfect

## Estado general

Branch: `feat/landing-foundation`  
PR: #3 (draft)  
Preview: `https://matius-preview-production.up.railway.app`

La landing cuenta con diseño editorial, motion progresivo, CRO por WhatsApp, rutas secundarias coherentes, QA funcional/visual y deployment Railway protegido.

## Fase 1 — Foundation
Estado: **completada**.

Next.js/React/TypeScript/Tailwind, App Router, tokens, fuentes, data/types/lib, layout, rutas, metadata, sitemap/robots y builders JSON-LD.

## Fase 2 — Producción visual
Estado: **completada con assets first-party disponibles**.

Fotografía pública de campaña integrada como universo visual, sin atribuir una imagen a un modelo/proceso/sucursal concretos sin evidencia.

## Fase 3 — Design governance
Estado: **completada**.

`DESIGN.md`, `AGENTS.md` y skills locales para design/CRO/SEO/visual QA.

## Fase 4 — Sistema editorial + motion
Estado: **completada y validada**.

- Hero product-first;
- paleta Modern Bolivian Leather;
- title/section reveals;
- crossfades fotográficos;
- menú fullscreen;
- View Transitions progresivas;
- reduced motion;
- CSS-first, sin librería de motion.

## Fase 5 — CRO / WhatsApp
Estado: **completada y validada**.

Mensajes/eventos diferenciados por Hero, producto, sucursal, CTA final y floating. Floating mobile desactivado para no cubrir contenido.

## Fase 6 — Editorial Collection Accordion
Estado: **completada y validada**.

Hombre / Mujer / Cuero; horizontal desktop, vertical mobile; click/teclado; Escape; focus management; cierre mobile.

## Fase 7 — Product Storytelling
Estado: **completada y validada**.

Una única escena compleja de scroll en `#fabricacion`: producto sticky desktop + cuatro capítulos Cuero / Oficio / Acabado / Durabilidad. Mobile usa lectura vertical natural.

## Fase 8 — Rutas editoriales
Estado: **completada y validada**.

Zapatos de cuero, Hombre, Mujer, Fabricación, Tiendas y detalle de sucursal usan el mismo sistema visual. La ruta general de cuero es product-first también en mobile.

## Fase 9 — CI / Visual QA
Estado: **completada**.

- lint;
- typecheck;
- build;
- smoke;
- Route Quality QA en 9 rutas × 2 viewports;
- Functional Interaction QA;
- **21 snapshots**;
- Lighthouse mobile.

Los snapshots cubren Home, menú, accordion cerrado/abierto, storytelling sticky, CTA, rutas Cuero/Fabricación/Tiendas y detalle de sucursal.

## Fase 10 — Preview Safety
Estado: **completada**.

Preview `noindex,nofollow`, robots compatible con lectura de noindex e indexación desactivada hasta publicación final.

## Fase 11 — Railway Preview / Runtime
Estado: **completada**.

- servicio `matius-preview`;
- branch `feat/landing-foundation`;
- dominio Railway;
- `npm start`;
- `/api/health`;
- timeout 120 s;
- restart `ON_FAILURE`, 3 reintentos.

## Fase 12 — Live Preview QA
Estado: **completada y activa**.

`/api/deployment-info` sincroniza el workflow con el SHA exacto servido por Railway. El gate valida rutas, health, SEO/noindex, WhatsApp, copy, Route Quality QA, Functional QA, 21 snapshots y Lighthouse live.

Baseline live registrada durante esta fase:
- Performance 98;
- Accessibility 100;
- Best Practices 100;
- SEO 100;
- LCP ≈ 2.22 s;
- CLS 0;
- TBT ≈ 118 ms.

## Fase 13 — Client-ready Copy / Regression Guards
Estado: **completada y validada**.

Se eliminó lenguaje interno/provisional de footer, rutas y Product Storytelling. Preview QA bloquea expresiones internas como demo/preparado/pendiente, catálogo provisional y disclaimers dirigidos al equipo.

## Pendiente del cliente

### Marca / assets
- [ ] logo maestro/vectorial
- [ ] fotografías originales en alta resolución
- [ ] imágenes por producto
- [ ] macros de cuero/acabados
- [ ] fotos reales de fabricación
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

## Gate de producción

No activar indexación, sacar PR de draft ni mergear a `main` hasta:

1. incorporar u omitir de forma segura los datos faltantes;
2. revisar la preview final;
3. tener CI y Preview QA verdes en el HEAD final;
4. recibir autorización explícita.
