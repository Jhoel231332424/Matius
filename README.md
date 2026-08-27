# Matius Perfect — Editorial Landing

Landing editorial para Matius Perfect enfocada en calzado de cuero, narrativa de producto y conversión contextual a WhatsApp.

## Preview actual

- Railway: `https://matius-preview-production.up.railway.app`
- Branch desplegada: `feat/landing-foundation`
- PR activo: #3 (draft)
- Preview protegido con `noindex,nofollow`
- `main` permanece intacto hasta revisión explícita.

## Stack

- Next.js 16 + React 19 + TypeScript
- Tailwind CSS 4
- App Router
- `next/font`: Geist + Cormorant Garamond
- motion CSS-first + View Transitions progresivas
- `playwright-core` solo como tooling de QA
- metadata, canonical, robots, sitemap y builders JSON-LD

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

El workflow CI añade smoke de rutas/recursos públicos, **21 snapshots mobile/desktop** y Lighthouse mobile.

## Live Preview QA

`.github/workflows/preview-qa.yml` valida el deployment real de Railway en cada push a `feat/landing-foundation`.

Antes de auditar, espera a que `/api/deployment-info` exponga exactamente `GITHUB_SHA`. Después comprueba:

- rutas públicas y `/api/health`;
- `noindex,nofollow`;
- WhatsApp oficial y mensajes contextuales;
- ausencia de copy interno/provisional;
- Route Quality QA en 9 rutas × 2 viewports;
- Functional Interaction QA;
- **21 snapshots** contra Railway;
- Lighthouse sobre la URL pública.

Baseline live registrada durante esta fase:

- Performance: 98
- Accessibility: 100
- Best Practices: 100
- SEO: 100
- LCP ≈ 2.22 s
- CLS = 0
- TBT ≈ 118 ms

## Arquitectura actual de Home

1. Hero
2. Brand Pillars
3. Editorial Collection Accordion
4. Featured Products
5. Product Storytelling / Craftsmanship
6. Lifestyle
7. Lookbook
8. Stores
9. Final CTA

La antigua sección independiente de detalle de cuero se retiró para evitar duplicar narrativa. La escena `#fabricacion` concentra el momento complejo de scroll: producto sticky en desktop y lectura vertical natural en mobile.

## Sistema visual / motion

La dirección vigente es **Modern Bolivian Leather / Editorial Commerce**:

- negro profundo, chocolate, tobacco, cognac, marfil cálido y rojo Matius como acento;
- Cormorant Garamond para display y Geist para UI/copy;
- title reveal por líneas;
- scroll reveal CSS para headings;
- zoom/crossfade fotográfico sutil;
- menú fullscreen editorial con crossfade por hover/focus;
- View Transitions progresivas para navegación;
- `prefers-reduced-motion` desactiva motion no esencial;
- sin Motion, GSAP, Lenis, WebGL ni shaders.

## Conversión

WhatsApp es la conversión principal. Los mensajes y eventos se diferencian por:

- Hero;
- producto/colección;
- sucursal;
- CTA final;
- floating desktop.

El floating WhatsApp permanece inactivo en mobile para no competir con CTAs contextuales.

## Rutas editoriales

Las rutas públicas comparten el mismo sistema visual de Home:

- `/zapatos-de-cuero`
- `/zapatos-hombre`
- `/zapatos-mujer`
- `/nuestra-fabricacion`
- `/tiendas`
- `/tiendas/central`
- `/tiendas/sucursal-1`
- `/tiendas/sucursal-2`

No se inventan direcciones, horarios, stock, políticas, testimonios ni claims técnicos.

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

Ya implementado y validado:

- design governance;
- sistema editorial + motion;
- Hero product-first;
- accordion de Colecciones;
- Product Storytelling sticky;
- navegación fullscreen/crossfade;
- rutas secundarias editoriales;
- WhatsApp contextual + eventos `dataLayer`;
- copy client-facing y regression guards;
- SEO técnico + preview noindex;
- Railway runtime hardening;
- Route Quality QA;
- Functional Interaction QA;
- **21 snapshots** locales y live;
- Lighthouse local y Railway.

## Pendiente del cliente antes de producción

- logo maestro/vectorial;
- originales fotográficos de alta resolución;
- fotografías por producto/fabricación/sucursal;
- direcciones y horarios exactos;
- catálogo definitivo, tallas, colores, precios y stock;
- garantía y políticas de cambios/devoluciones;
- claims técnicos autorizados;
- testimonios reales si se usarán;
- proveedor de analytics.

## Route Quality Gate

`npm run qa:routes` valida las 9 rutas HTML públicas en mobile y desktop: HTTP, H1 visible único, title/description, canonical, `noindex,nofollow`, overflow horizontal y errores `pageerror`/`console.error`. Corre tanto en CI local como en Railway.

## Siguiente gate

Sin datos adicionales del cliente, el trabajo técnico principal queda en mantenimiento/regresión. Antes de producción:

1. incorporar datos reales faltantes;
2. revisar visualmente la preview con el cliente;
3. completar NAP/Product structured data solo con datos confirmados;
4. configurar analytics elegido;
5. volver a ejecutar CI + Preview QA del HEAD final;
6. activar indexación únicamente al publicar;
7. sacar PR #3 de draft/mergear solo con autorización explícita.
