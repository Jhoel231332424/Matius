# Phase Status — Matius Perfect

## Resumen

Branch activa: `feat/landing-foundation`  
PR: #3 (draft)

La landing ya superó foundation, wireframe y primera producción visual. Existe una demo editorial modular, medible y protegida para preview, con reglas versionadas para evitar rediseños arbitrarios por agentes/Codex.

## Fase 1 — Foundation

Estado: **completada**.

- Next.js + TypeScript + Tailwind.
- React/App Router.
- Design tokens y tipografías mediante `next/font`.
- `types/`, `data/`, `lib/` y UI primitives.
- Layout global y floating WhatsApp.
- Home modularizada en 10 secciones.
- Rutas de zapatos, fabricación y tiendas.
- Metadata, canonical por página, sitemap y robots.
- Builders Organization / LocalBusiness / Product / Breadcrumb.
- CI base: install, lint, typecheck y build.

## Fase 2 — Producción visual de demo

Estado: **completada con los assets first-party actualmente disponibles**.

- Registro de medios en `data/media.ts`.
- Cuatro imágenes oficiales de campaña integradas.
- Hero con prioridad LCP.
- Brand Pillars, Collections, Lifestyle, Lookbook y Leather Detail con fotografía.
- Final CTA fotográfico.
- Oxford conserva la información pública verificada en la capa de producto.
- Allowlist remota limitada a `matiusperfect.com/assets/**`.

Importante: las imágenes de campaña se usan como universo visual; no se asignan a un modelo concreto sin verificación.

## Fase 3 — Design governance

Estado: **completada**.

Feature commit: `c21319c`.

- `DESIGN.md` como contrato visual.
- `AGENTS.md` con reglas obligatorias para agentes/Codex.
- skills locales:
  - `matius-design`;
  - `matius-cro`;
  - `matius-seo`;
  - `matius-visual-qa`.

Principio central: `Modern Bolivian Leather / Editorial Commerce`.

## Fase 4 — Sistema editorial

Estado: **completada y validada**.

Reference components — `054bf9c`:
- Hero product-first en mobile;
- ProductCardMatius;
- Featured Products con jerarquía;
- Fabricación sticky CSS.

Propagación — `36a5285`:
- Brand Pillars editoriales;
- Leather Detail;
- Lookbook;
- Stores sin placeholders falsos;
- Final CTA.

No se usa Motion/GSAP/Lenis/WebGL en el bundle actual. El storytelling se resuelve CSS-first.

## Fase 5 — CRO / WhatsApp contextual

Estado: **completada y validada**.

Base: `508c7c3`.  
Mobile safety: `1a515e9`.

- mensajes diferenciados por Hero, producto, sucursal, CTA final y botón flotante;
- eventos `window.dataLayer` mantienen nombres estables;
- contexto de producto/sucursal conservado;
- floating WhatsApp no cubre contenido/CTAs mobile;
- documentación en `docs/CONVERSION-WHATSAPP.md`.

Proveedor real de analytics (GA4/GTM u otro) aún no está conectado; la capa de eventos sí está preparada.

## Fase 6 — Editorial Collection Accordion

Estado: **completada y validada visualmente**.

Commits principales:
- `480951c` — implementación inicial;
- `d7b2647` — polish + open-state QA;
- `811a012` — scope correcto del QA interactivo;
- `99755e7` — integridad de contenido + cierre mobile.

Características:
- tres paneles: Hombre / Mujer / Cuero;
- accordion horizontal en desktop;
- accordion vertical en mobile;
- hover como preview únicamente;
- click/teclado para abrir;
- Escape para cerrar;
- cierre visible dentro del contenido mobile;
- CTA de colección + WhatsApp contextual;
- CSS-first, sin librerías de motion;
- `CollectionCard` original conservado como fallback.

La tercera entrada se llama `Cuero`, no `Oxford`, para evitar asociar una fotografía de campaña a un modelo concreto sin evidencia.

## Fase 7 — Visual QA automático

Estado: **completada y validada sobre el HEAD actual**.

Base inicial: `abbc8c1`.  
Harness Playwright: `2ae1847`.  
Carga determinística de imágenes: `05f6794`.

CI cubre:
- lint;
- typecheck;
- build;
- smoke de 11 rutas;
- Lighthouse mobile;
- artifacts de reportes;
- **10 snapshots por PR**:
  - Hero mobile/desktop;
  - Colecciones cerradas mobile/desktop;
  - Colecciones con `Cuero` abierto mobile/desktop;
  - Fabricación mobile/desktop;
  - Contacto mobile/desktop.

El harness:
- usa `playwright-core` solo como tooling;
- reutiliza Chrome del runner;
- fuerza `reducedMotion: reduce`;
- elimina smooth scroll en la sesión;
- desplaza a anchors de forma programática;
- espera la carga real de imágenes lazy antes de capturar.

HEAD validado: `05f67944d197830cfa19983cb569441610f7c582`.

## Fase 8 — Preview / Deployment Safety

Estado: **preparada en código; deploy externo pendiente**.

Feature commit: `5889f10`.

- local y preview permanecen `noindex,nofollow`;
- `VERCEL_ENV=preview` actúa como segundo guard;
- `robots.txt` permite crawling del preview para que crawlers puedan leer `noindex`;
- indexación solo se permite en producción final;
- guía completa en `docs/DEPLOYMENT.md`.

El conector de Vercel aún debe quedar autorizado/conectado para crear el preview desde este entorno.

## Pendiente del cliente

### Marca / assets
- [ ] logo maestro/vectorial;
- [ ] originales fotográficos en máxima resolución;
- [ ] fotografías específicas por producto;
- [ ] macros de cuero/acabados reales;
- [ ] material real de fabricación;
- [ ] fotografías reales de sucursales.

### Negocio
- [ ] direcciones exactas de Central, Sucursal 1 y Sucursal 2;
- [ ] horarios;
- [ ] teléfonos por sucursal si varían;
- [ ] catálogo definitivo;
- [ ] precios finales vigentes;
- [ ] tallas y colores;
- [ ] stock si se desea mostrar;
- [ ] garantía;
- [ ] cambios/devoluciones;
- [ ] claims técnicos de cuero/fabricación autorizados;
- [ ] testimonios/reseñas reales si se usarán.

## Próximo gate

### Preview Deploy

1. conectar/autorizar Vercel;
2. desplegar `feat/landing-foundation` como preview separado del sitio oficial;
3. confirmar `noindex,nofollow` en HTML;
4. ejecutar QA mobile/desktop sobre la URL real;
5. probar CTAs WhatsApp reales;
6. ejecutar Lighthouse/Core Web Vitals sobre el deploy;
7. corregir cualquier diferencia de infraestructura/crops;
8. mantener PR draft hasta completar esta revisión.

## Después del preview

- sustituir assets/datos al recibir material del cliente;
- conectar proveedor de analytics y validar eventos WhatsApp;
- completar `LocalBusiness` con NAP/horarios confirmados;
- crear páginas/product schema cuando exista catálogo definitivo;
- activar `NEXT_PUBLIC_ALLOW_INDEXING=true` únicamente en producción final;
- sacar PR de draft y mergear solo después de revisión explícita.
