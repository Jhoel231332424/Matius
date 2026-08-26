# Matius Perfect — Editorial Landing

Landing editorial para Matius Perfect enfocada en zapatos de cuero y conversión contextual a WhatsApp.

## Preview actual

- Railway: `https://matius-preview-production.up.railway.app`
- Branch desplegada: `feat/landing-foundation`
- PR activo: #3 (draft)
- Preview protegido con `noindex,nofollow`
- `main` no se usa para el preview y no debe mergearse sin revisión explícita.

## Stack

- Next.js 16 + React 19 + TypeScript
- Tailwind CSS 4
- App Router
- `next/font`: Geist + Cormorant Garamond
- Interacciones CSS-first
- `playwright-core` solo como tooling de QA
- Metadata, canonical, robots, sitemap y builders JSON-LD

## Desarrollo

```bash
npm install
npm run dev
```

## Calidad local / PR

```bash
npm run lint
npm run typecheck
npm run build
```

El workflow CI añade smoke de rutas, 10 snapshots mobile/desktop y Lighthouse mobile.

## Live Preview QA

`.github/workflows/preview-qa.yml` valida el deployment real de Railway en cada push a `feat/landing-foundation`.

Antes de auditar, espera a que `/api/deployment-info` exponga exactamente `GITHUB_SHA`. Después comprueba:

- rutas públicas;
- `/api/health`;
- `noindex,nofollow`;
- WhatsApp oficial;
- ausencia de copy interno/provisional;
- 10 snapshots mobile/desktop;
- Lighthouse sobre Railway.

Última línea base live registrada durante esta fase:

- Performance: 98
- Accessibility: 100
- Best Practices: 100
- SEO: 100
- LCP ≈ 2.22 s
- CLS = 0
- TBT ≈ 118 ms

## Railway runtime

Configuración documentada en `docs/RAILWAY-RUNTIME.md`:

- start: `npm start`;
- healthcheck: `/api/health`;
- healthcheck timeout: 120 s;
- sleep desactivado;
- restart: `ON_FAILURE`;
- máximo 3 reintentos.

## Arquitectura de Home

1. Hero
2. Brand Pillars
3. Editorial Collection Accordion
4. Featured Products
5. Craftsmanship
6. Leather Detail
7. Lifestyle
8. Lookbook
9. Stores
10. Final CTA

Colecciones usa tres entradas: Hombre / Mujer / Cuero. El accordion es horizontal en desktop y vertical en mobile, accesible por click/teclado y sin dependencia funcional de hover.

## Design governance

Antes de modificar frontend, leer:

1. `DESIGN.md`
2. `AGENTS.md`
3. `docs/DESIGN-SYSTEM.md`
4. `docs/CONVERSION-WHATSAPP.md`
5. `docs/QA-CHECKLIST.md`
6. `docs/DEPLOYMENT.md`
7. `docs/RAILWAY-RUNTIME.md`

Skills locales de Codex:

- `.codex/skills/matius-design/SKILL.md`
- `.codex/skills/matius-cro/SKILL.md`
- `.codex/skills/matius-seo/SKILL.md`
- `.codex/skills/matius-visual-qa/SKILL.md`

## Estado funcional

Ya implementado:

- sistema editorial `Modern Bolivian Leather / Editorial Commerce`;
- assets first-party públicos de campaña;
- Hero product-first mobile;
- accordion editorial cerrado/abierto validado;
- fabricación sticky CSS;
- WhatsApp contextual por source;
- copy client-ready en rutas públicas;
- guard contra copy interno/provisional;
- SEO técnico y preview noindex;
- Railway preview;
- healthcheck y runtime hardening;
- CI local + Live Preview QA.

## Pendiente del cliente antes de producción

- logo maestro/vectorial;
- originales fotográficos de alta resolución;
- fotografías por producto y fabricación;
- fotografías/direcciones/horarios de las tres sucursales;
- catálogo definitivo, tallas, colores, precios y stock;
- garantía y políticas de cambios/devoluciones;
- claims técnicos autorizados;
- testimonios reales si se usarán;
- proveedor de analytics (GA4/GTM/u otro).

## Próximos pasos que no requieren datos del cliente

1. ampliar QA funcional de interacciones y CTAs;
2. validar teclado/Escape/aria del accordion en el deploy real;
3. validar URLs y mensajes contextuales de WhatsApp con Playwright;
4. revisar comportamiento responsive de rutas secundarias;
5. mantener PR #3 en draft hasta la revisión explícita.

No activar `NEXT_PUBLIC_ALLOW_INDEXING=true` ni mergear a `main` antes de completar los datos de producción y la revisión final.
