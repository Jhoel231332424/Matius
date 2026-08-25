# Phase Status — Matius Perfect

## Foundation + First Visual Pass

Estado: **implementado en `feat/landing-foundation`**.

### Completado

- Next.js + TypeScript + Tailwind.
- Design tokens y tipografías con `next/font`.
- SEO base: metadata, canonical por página, robots, sitemap y JSON-LD builders.
- Preview `noindex` por defecto.
- WhatsApp oficial configurado y CTAs contextuales preparados.
- Topbar, Navbar, Footer y Floating WhatsApp.
- 10 secciones de Home separadas en módulos independientes.
- Hero editorial con Motion y soporte para `prefers-reduced-motion`.
- Brand Pillars.
- Collections + `CollectionCard` reusable.
- Featured Products + `ProductCardMatius` reusable.
- Craftsmanship con sticky scroll storytelling.
- Leather Detail con motion suave.
- Lifestyle grid.
- Lookbook.
- Stores.
- Final CTA.
- GitHub Actions con install, lint, typecheck y build.

### Verificación

El CI del HEAD funcional anterior pasó correctamente:

- install: success
- lint: success
- typecheck: success
- build: success

### Siguiente fase

1. Assets reales/autorizados.
2. Logo definitivo.
3. Fotografías hero/producto/cuero/fabricación/lifestyle/sucursales.
4. Analytics para WhatsApp.
5. QA responsive/accessibility.
6. Lighthouse/Core Web Vitals.
7. Datos completos de sucursales y catálogo.
8. Schema Product/LocalBusiness completo solo con información real.
