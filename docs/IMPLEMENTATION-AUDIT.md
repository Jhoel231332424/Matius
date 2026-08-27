# Implementation Audit — Matius Perfect

## Estado general

Implementación activa: `feat/landing-foundation`  
Preview: `https://matius-preview-production.up.railway.app`

`DESIGN.md` es la fuente de verdad visual y `AGENTS.md` define el workflow obligatorio para agentes/Codex.

## Implementado

- [x] Next.js 16 + React 19 + TypeScript + Tailwind CSS 4
- [x] App Router, tokens y `next/font`
- [x] layout global + rutas editoriales
- [x] Home modularizada en 9 secciones
- [x] Hero product-first mobile
- [x] Brand Pillars editoriales
- [x] Editorial Collection Accordion
- [x] ProductCardMatius + Featured Products
- [x] Product Storytelling sticky CSS
- [x] Lifestyle y Lookbook
- [x] Stores sin NAP inventado
- [x] Final CTA
- [x] menú fullscreen + crossfade
- [x] View Transitions progresivas
- [x] metadata/canonical/OG/favicon/sitemap/robots
- [x] builders Organization/LocalBusiness/Product/Breadcrumb
- [x] preview `noindex,nofollow`
- [x] WhatsApp contextual por source
- [x] `window.dataLayer` analytics-ready
- [x] `DESIGN.md`, `AGENTS.md` y skills locales
- [x] Railway preview público
- [x] `/api/deployment-info` para sincronía por SHA
- [x] `/api/health` + runtime hardening
- [x] guard anti-copy interno/provisional
- [x] Functional Interaction QA
- [x] **21 snapshots** local + Railway
- [x] Lighthouse local + live

## JavaScript / motion

No se usa Motion/GSAP/Lenis/WebGL en el bundle. Estrategia vigente:

1. HTML/CSS;
2. sticky/transitions/View Transitions CSS;
3. JS cliente solo para interacción real;
4. librería de motion únicamente si aparece una necesidad demostrada.

`prefers-reduced-motion` elimina motion no esencial.

## Assets y datos

Se usan assets first-party públicos de campaña registrados en `data/media.ts`. Las fotografías se presentan como universo visual, no como prueba de un modelo, técnica de cuero, proceso o sucursal específicos.

No se inventan direcciones, horarios, stock, políticas, garantía, testimonios ni claims técnicos.

## QA local

```bash
npm run lint
npm run typecheck
npm run build
```

CI añade smoke, Functional Interaction QA donde corresponde, 21 snapshots y Lighthouse mobile.

## QA sobre Railway

Preview QA:

1. espera al SHA exacto en `/api/deployment-info`;
2. valida rutas + `/api/health`;
3. valida `noindex,nofollow` y WhatsApp;
4. rechaza copy interno/provisional;
5. ejecuta Functional Interaction QA;
6. genera 21 snapshots contra Railway;
7. ejecuta Lighthouse live.

## Cobertura funcional relevante

- menú fullscreen: Escape, focus trap, scroll lock y retorno de foco;
- accordion: Enter/Space/Escape, aria-expanded/controls, cierre mobile;
- floating WhatsApp inactivo en mobile;
- mensajes/URLs/eventos WhatsApp por source;
- rutas editoriales mobile/desktop;
- Product Storytelling sticky;
- detalle representativo de sucursal.

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

## Gate para merge

- CI y Preview QA del HEAD verdes;
- preview visual revisada;
- sin claims ficticios;
- datos mínimos de producción incorporados u omitidos de forma segura;
- autorización explícita para sacar PR #3 de draft y mergear.
