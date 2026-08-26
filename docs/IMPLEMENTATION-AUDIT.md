# Implementation Audit — Matius Perfect

## Estado general

La implementación activa vive en `feat/landing-foundation` y se visualiza en Railway:

`https://matius-preview-production.up.railway.app`

`DESIGN.md` es la fuente de verdad visual y `AGENTS.md` define el workflow obligatorio para agentes/Codex.

## Implementado

- [x] Next.js 16 + React 19 + TypeScript + Tailwind CSS 4
- [x] App Router, tokens y `next/font`
- [x] types/data/lib y UI primitives
- [x] layout global
- [x] Home modularizada en 10 secciones
- [x] Hero product-first mobile
- [x] Brand Pillars editoriales
- [x] Editorial Collection Accordion
- [x] ProductCardMatius + Featured Products
- [x] Craftsmanship sticky CSS
- [x] Leather Detail, Lifestyle y Lookbook
- [x] Stores sin NAP inventado
- [x] Final CTA
- [x] rutas de zapatos/fabricación/tiendas
- [x] metadata/canonical/OG/favicon/sitemap/robots
- [x] builders Organization/LocalBusiness/Product/Breadcrumb
- [x] preview `noindex,nofollow`
- [x] WhatsApp contextual por source
- [x] `window.dataLayer` analytics-ready
- [x] `DESIGN.md`, `AGENTS.md` y skills locales
- [x] CI: lint/typecheck/build/smoke/snapshots/Lighthouse
- [x] Railway preview público
- [x] `/api/deployment-info` para sincronía por SHA
- [x] Live Preview QA contra Railway
- [x] copy client-ready en rutas públicas
- [x] guard anti-copy interno/provisional
- [x] `/api/health` y runtime hardening Railway

## JavaScript / motion

No se usa Motion/GSAP/Lenis/WebGL en el bundle actual. La estrategia vigente es:

1. HTML/CSS;
2. transitions/sticky CSS;
3. JS cliente solo para interacción necesaria;
4. introducir una librería de motion únicamente si existe una necesidad demostrada.

## Assets y datos

Se usan assets first-party públicos de campaña registrados en `data/media.ts`. Las fotografías se tratan como universo visual y no como prueba de un modelo concreto.

Datos públicos utilizados incluyen el WhatsApp, email y ubicación general de marca ya verificados durante la implementación. No se inventan direcciones, horarios, stock, políticas ni testimonios.

## QA local

Cada cambio debe pasar:

```bash
npm run lint
npm run typecheck
npm run build
```

CI añade smoke, 10 snapshots y Lighthouse mobile.

## QA sobre Railway

Preview QA:

1. espera al SHA exacto servido por `/api/deployment-info`;
2. valida rutas + `/api/health`;
3. valida `noindex,nofollow` y WhatsApp;
4. rechaza copy interno/provisional;
5. genera 10 snapshots contra Railway;
6. ejecuta Lighthouse live.

Baseline live registrado en esta fase:

- Performance 98
- Accessibility 100
- Best Practices 100
- SEO 100
- LCP ≈ 2.22 s
- CLS 0
- TBT ≈ 118 ms

## Railway runtime

Ver `docs/RAILWAY-RUNTIME.md`.

Configuración aplicada:
- `npm start`;
- healthcheck `/api/health`;
- timeout 120 s;
- sleep desactivado;
- restart `ON_FAILURE`;
- 3 reintentos.

## Pendiente antes de producción

### Cliente / assets
- [ ] logo definitivo
- [ ] fotografías originales de alta resolución
- [ ] fotografías por producto/fabricación/sucursal
- [ ] direcciones y horarios exactos
- [ ] catálogo, tallas, colores, precios y stock
- [ ] garantía y cambios/devoluciones
- [ ] claims técnicos autorizados
- [ ] testimonios reales

### Integraciones / producción
- [ ] proveedor real de analytics conectado
- [ ] NAP completo en LocalBusiness
- [ ] Product/ProductGroup con catálogo definitivo
- [ ] dominio final/redirects si cambian
- [ ] indexación activada solo al publicar

## Próximo QA técnico

- Playwright funcional de accordion (click/keyboard/Escape/aria);
- validación de CTAs WhatsApp por source y mensaje;
- responsive de rutas secundarias;
- revisión explícita antes de sacar PR #3 de draft.

## Gate para merge

- CI y Preview QA del HEAD verdes;
- preview visual revisada;
- sin claims ficticios;
- datos mínimos de producción incorporados u omitidos de forma segura;
- autorización explícita para publicar/mergear.
