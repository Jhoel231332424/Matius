# QA Checklist — Matius Perfect Landing

## Responsive

Verificar manualmente como mínimo:

- 320 × 568
- 375 × 667
- 390 × 844
- 430 × 932
- 768 × 1024
- 1024 × 768
- 1366 × 768
- 1440 × 900
- 1920 × 1080

## Snapshots automáticos

El CI genera **19 snapshots** por PR mediante `scripts/capture-visuals.mjs` + `playwright-core`, reutilizando el Chrome instalado en el runner.

### Mobile — 390 × 844
- `home-mobile.png`
- `menu-mobile.png`
- `collections-mobile.png`
- `collections-open-mobile.png`
- `craftsmanship-mobile.png`
- `contact-mobile.png`
- `leather-route-mobile.png`
- `craft-route-mobile.png`
- `stores-route-mobile.png`

### Desktop — 1440 × 1000
- `home-desktop.png`
- `menu-desktop.png`
- `collections-desktop.png`
- `collections-open-desktop.png`
- `craftsmanship-desktop.png`
- `craftsmanship-story-desktop.png`
- `contact-desktop.png`
- `leather-route-desktop.png`
- `craft-route-desktop.png`
- `stores-route-desktop.png`

### Menú fullscreen

`menu-mobile/desktop` abre el menú real y valida:

- cobertura fullscreen;
- jerarquía editorial;
- fotografía/crossfade listo para interacción;
- controles visibles;
- ausencia de clipping;
- contraste y foco perceptible.

### Colecciones — estado cerrado y abierto

`collections-mobile/desktop` valida el accordion en reposo.

`collections-open-mobile/desktop` abre programáticamente el panel **Cuero** mediante su botón accesible y valida:

- expansión correcta;
- paneles secundarios comprimidos;
- título/copy visibles;
- CTA `Explorar colección` visible;
- CTA WhatsApp visible y legible;
- botón cerrar visible;
- botón `Cerrar colección` visible dentro del contenido mobile;
- ausencia de clipping/overflow;
- floating WhatsApp sin cubrir controles en mobile.

### Product storytelling / Fabricación

`craftsmanship-mobile/desktop` valida la entrada a la sección `#fabricacion`.

`craftsmanship-story-desktop` desplaza el viewport hasta el panel sticky para validar el estado real de storytelling:

- producto completo dentro del marco;
- sticky alineado bajo el header;
- capítulo y producto visibles simultáneamente;
- numeración y tipografía sin clipping;
- suficiente contraste sobre el panel oscuro;
- floating WhatsApp sin cubrir información crítica.

### Rutas secundarias

Los snapshots `leather-route-*`, `craft-route-*` y `stores-route-*` validan que las páginas internas mantengan el mismo sistema visual de Home.

Revisar especialmente:

- H1 editorial y un solo H1 por ruta;
- motion/reduced-motion coherente con Home;
- CTAs visibles;
- navegación y enlaces de retorno;
- ausencia de fotografías atribuidas falsamente a producto, proceso o sucursal;
- directorio de tiendas legible sin direcciones/horarios inventados;
- no aparecer copy interno/provisional.

### Determinismo de captura

Playwright abre la ruta indicada, espera `networkidle`, fuerza `reducedMotion: reduce`, elimina smooth-scroll para la sesión y desplaza programáticamente el viewport a los selectores necesarios descontando el header sticky.

Para Colecciones, Playwright ejecuta además la interacción real con el botón `Abrir colección Cuero` y espera a que el heading `Cuero` sea visible dentro de `#zapatos` antes de capturar.

Para el estado sticky de Fabricación, Playwright alinea `#fabricacion figure` bajo el header antes de capturar.

Esto evita capturas tomadas a mitad del scroll o fuera de la sección. El objetivo del artifact es comparar **layout, crop, jerarquía, estados interactivos y CTA**, no validar timing de animación.

Si un snapshot con selector no muestra la sección indicada, `collections-open-*` no muestra Cuero abierto o `craftsmanship-story-desktop` no muestra el panel sticky real, el QA se considera roto aunque GitHub Actions finalice sin error.

Revisar siempre:
- selector/sección/ruta correcta;
- crop de imágenes;
- CTA visible;
- overflow/clipping;
- jerarquía tipográfica;
- contraste;
- espacios excesivos;
- drift respecto de `DESIGN.md`;
- floating WhatsApp sin tapar controles.

## Navegación

- Navbar no tapa anchors al navegar.
- Menú fullscreen es operable con teclado.
- Escape cierra el menú y restaura foco.
- Focus trap permanece dentro del diálogo abierto.
- Todos los enlaces internos resuelven.
- Enlaces externos usan `noopener noreferrer`.
- CTA flotante no cubre contenido en pantallas pequeñas.

## WhatsApp

Validar eventos:

- `whatsapp_hero_click`
- `whatsapp_product_click`
- `whatsapp_store_click`
- `whatsapp_final_cta_click`
- `whatsapp_floating_click`
- `whatsapp_general_click`

Cada evento debe incluir `source`, `page_path` y contexto de producto/sucursal cuando corresponda.

Validar también el mensaje prellenado por origen según `docs/CONVERSION-WHATSAPP.md`.

## Accesibilidad

- Un solo H1 por página.
- Jerarquía H2/H3 consistente.
- Focus visible en links y botones.
- Targets táctiles >= 44 px.
- Alt útil para imágenes informativas.
- Alt vacío para imágenes estrictamente decorativas.
- Nada depende exclusivamente de hover.
- `prefers-reduced-motion` desactiva motion no esencial.
- Contraste revisado en overlays sobre fotografías.
- Skip link disponible.
- Nombre accesible coincide con la intención visible.
- Accordion de Colecciones usa botones reales.
- Accordion de Colecciones puede cerrarse con Escape.
- Accordion mobile ofrece un cierre visible dentro del contenido.
- Los CTAs del panel abierto no quedan debajo de un overlay/control flotante.

## Imágenes

- Hero Home usa `fetchPriority="high"` y carga eager.
- Hero de ruta con imagen usa `priority`/`fetchPriority="high"` cuando es candidato LCP.
- Todas las imágenes reservan espacio mediante `fill` + contenedor posicionado.
- `sizes` definido.
- No se usan imágenes CSS para contenido indexable principal.
- Reemplazar URLs first-party externas por originales locales/CDN antes de producción si el cliente entrega assets.
- No asociar una foto de campaña con un producto, categoría, proceso o sucursal específicos sin verificación.

## SEO

- Preview permanece `noindex` mientras `NEXT_PUBLIC_ALLOW_INDEXING != true`.
- Canonical correcto por ruta.
- `/robots.txt` y `/sitemap.xml` accesibles.
- JSON-LD sin datos ficticios.
- `LocalBusiness` no completa dirección/horarios/teléfono hasta validarlos.
- `Product` no publica stock/tallas/variantes no verificadas.
- Open Graph/Twitter coherentes con la página.

## Performance

Objetivos de producto:

- LCP <= 2.5 s en campo
- INP <= 200 ms
- CLS <= 0.1

Gates CI actuales:

- Accessibility >= 0.95
- Best Practices >= 0.90
- SEO >= 0.95
- Performance warning si < 0.75
- LCP warning si > 4 s
- CLS error si > 0.1
- TBT warning si > 350 ms

Revisar:

- Hero como principal candidato LCP;
- Server Components por defecto;
- evitar JS en componentes puramente visuales;
- comportamiento cliente solo cuando existe interacción real;
- `playwright-core` es tooling de QA y no debe importarse desde la app;
- accordion usa estado React mínimo, sin librería de motion;
- product storytelling usa CSS sticky, sin librería de motion;
- no añadir GSAP/Lenis/WebGL/Motion sin demostrar necesidad;
- lazy loading por defecto debajo del fold;
- evitar animaciones de layout costosas.

## Gate técnico

```bash
npm run lint
npm run typecheck
npm run build
```

Además deben pasar:
- smoke de 13 rutas/recursos públicos;
- Functional Interaction QA;
- 19 snapshots automáticos inspeccionados, no solo generados;
- Lighthouse CI local;
- Preview QA + Lighthouse sobre Railway.

Los gates deben estar verdes antes de sacar el PR de draft.
