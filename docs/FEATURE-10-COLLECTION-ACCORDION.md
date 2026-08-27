# Feature 10 — Editorial Collection Accordion

## Objetivo

Adaptar el patrón de **horizontal accordion hero** estudiado en la referencia de Nicolai Palmkvist al contexto ecommerce/editorial de Matius, sin copiar su identidad, assets, copy ni implementación Elementor.

## Qué se conserva del patrón de referencia

- paneles fotográficos de ancho variable;
- descubrimiento progresivo;
- numeración visible;
- rail vertical en desktop;
- expansión por interacción;
- cambio a accordion vertical en mobile;
- contenido revelado dentro del panel activo;
- interacción principal implementada con CSS y estado mínimo.

## Qué NO se copia

- branding del autor original;
- DM Sans como identidad;
- azul eléctrico;
- iconografía del portfolio;
- textos/contactos/proyectos;
- estructura Elementor;
- hojas fullscreen de proyectos;
- assets externos del template;
- proporciones exactas ni timing exacto del original.

## Adaptación Matius

Paneles:

1. Hombre
2. Mujer
3. Cuero

La tercera entrada es deliberadamente genérica: las imágenes disponibles son assets first-party de campaña, no fotografías verificadas de un modelo Oxford concreto. Oxford permanece como producto destacado en la capa de producto, donde el nombre/precio pueden tratarse de forma explícita sin atribuirle una fotografía incorrecta.

Cada panel usa únicamente imágenes first-party ya registradas en `data/media.ts`. Estas imágenes se presentan como **universo de campaña**, no como evidencia de que una fotografía represente un modelo exacto.

## Interacción

### Desktop

- los tres paneles parten con el mismo peso;
- hover da una preview de crecimiento mientras ningún panel está abierto;
- click abre un panel y comprime los otros;
- el panel activo revela título, copy y CTAs;
- Escape cierra el panel activo;
- el botón de cierre está disponible dentro del panel.

### Mobile

- el accordion cambia a orientación vertical;
- no existe dependencia de hover;
- cada rail completo es un botón táctil;
- el panel activo ocupa la mayor parte del bloque;
- los CTAs se apilan a ancho completo;
- existe un botón `Cerrar colección` dentro del contenido para no depender de un icono que pueda quedar fuera del viewport después de la expansión;
- interacción compatible con `prefers-reduced-motion`.

## Accesibilidad

- controles reales `<button>`;
- `aria-expanded` + `aria-controls`;
- cierre mediante Escape;
- cierre mobile visible dentro del contenido;
- focus visible;
- enlaces/WhatsApp solo aparecen dentro del panel activo;
- targets táctiles amplios;
- ninguna función indispensable depende de hover;
- reduced motion elimina las transiciones no esenciales.

## CRO

El panel activo ofrece:

- `Explorar colección` → ruta SEO real;
- `Consultar por WhatsApp` → evento/product source contextual usando el nombre de la colección.

El CTA global `Ver todos los zapatos` permanece fuera del accordion para usuarios que no quieran interactuar con el componente.

## Performance

- sin GSAP;
- sin Motion;
- sin Lenis;
- sin WebGL;
- `next/image` para todas las fotografías;
- estado React mínimo exclusivamente para abrir/cerrar paneles;
- animación principal mediante CSS `flex-grow`, `transform` y `opacity`.

## Fallback

`components/collection/collection-card.tsx` se conserva. Si el accordion falla validación visual/CRO o resulta demasiado pesado conceptualmente, `CollectionsSection` puede volver al grid anterior sin reconstruir el componente.

## QA requerido

Antes de considerar la feature terminada:

- `npm run lint`;
- `npm run typecheck`;
- `npm run build`;
- smoke de rutas;
- snapshot `collections-mobile.png`;
- snapshot `collections-desktop.png`;
- snapshot `collections-open-mobile.png` con **Cuero** abierto;
- snapshot `collections-open-desktop.png` con **Cuero** abierto;
- Lighthouse CI;
- inspección visual real de ambos estados;
- verificar que floating WhatsApp no cubra CTAs en mobile.
