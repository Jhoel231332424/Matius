# Phase Status — Matius Perfect

## Resumen

Branch activa: `feat/landing-foundation`  
PR: #3 (draft)

La landing ya superó la fase de wireframe. Existe una demo visual, modular y medible construida con assets first-party disponibles públicamente, y el repositorio contiene reglas para que futuros agentes no rediseñen la marca por intuición.

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
- Preview `noindex` por defecto.
- CI base: install, lint, typecheck y build.

## Fase 2 — Producción visual de demo

Estado: **completada con los assets first-party actualmente disponibles**.

- Registro de medios en `data/media.ts`.
- Cuatro imágenes oficiales de campaña integradas.
- Hero con prioridad LCP.
- Brand Pillars, Collections, Lifestyle, Lookbook y Leather Detail con fotografía.
- Final CTA fotográfico.
- Oxford con precio público registrado en la fuente usada durante la implementación.
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

## Fase 4 — Sistema editorial de referencia

Estado: **completada y validada**.

Reference components — commit `054bf9c`:
- Hero product-first en mobile;
- CollectionCard editorial;
- Collections asimétricas;
- ProductCardMatius;
- Featured Products con jerarquía;
- Fabricación sticky CSS.

Propagación — commit `36a5285`:
- Brand Pillars editoriales;
- Leather Detail;
- Lookbook;
- Stores sin placeholders visuales falsos;
- Final CTA.

No se usa Motion/GSAP/Lenis/WebGL en el bundle actual. El storytelling se resuelve CSS-first.

## Fase 5 — CRO / WhatsApp contextual

Estado: **completada y validada**.

Feature commit: `508c7c3`.

- mensajes diferenciados por Hero, producto, sucursal, CTA final y botón flotante;
- eventos `window.dataLayer` mantienen nombres estables;
- contexto de producto/sucursal conservado;
- documentación en `docs/CONVERSION-WHATSAPP.md`.

Proveedor real de analytics (GA4/GTM u otro) aún no está conectado; la capa de eventos sí está preparada.

## Fase 6 — Visual QA automático

Estado: **implementado; usar el CI del HEAD para confirmar cada cambio**.

Feature commit: `abbc8c1`.

CI cubre:
- lint;
- typecheck;
- build;
- smoke de 11 rutas;
- Lighthouse mobile;
- artifacts de reportes;
- 8 snapshots por PR:
  - Hero mobile/desktop;
  - Colecciones mobile/desktop;
  - Fabricación mobile/desktop;
  - Contacto mobile/desktop.

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

## Próximos pasos

1. Confirmar CI verde del HEAD actual.
2. Desplegar un **preview** separado del sitio oficial.
3. Ejecutar QA visual completo sobre URL desplegada y dispositivos reales.
4. Sustituir assets/datos al recibir material del cliente.
5. Conectar proveedor de analytics y validar eventos WhatsApp.
6. Completar `LocalBusiness` con NAP/horarios confirmados.
7. Crear páginas/product schema cuando exista catálogo definitivo.
8. Ejecutar Lighthouse/Core Web Vitals sobre el deploy real.
9. Activar `NEXT_PUBLIC_ALLOW_INDEXING=true` únicamente en producción final.
10. Sacar PR de draft y mergear solo después de revisión explícita.
