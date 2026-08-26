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

El CI genera diez snapshots por PR mediante `scripts/capture-visuals.mjs` + `playwright-core`, reutilizando el Chrome instalado en el runner.

### Mobile — 390 × 844
- `home-mobile.png`
- `collections-mobile.png`
- `collections-open-mobile.png`
- `craftsmanship-mobile.png`
- `contact-mobile.png`

### Desktop — 1440 × 1000
- `home-desktop.png`
- `collections-desktop.png`
- `collections-open-desktop.png`
- `craftsmanship-desktop.png`
- `contact-desktop.png`

### Colecciones — estado cerrado y abierto

`collections-mobile/desktop` valida el accordion en reposo.

`collections-open-mobile/desktop` abre programáticamente el panel **Oxford** mediante su botón accesible y valida:

- expansión correcta;
- paneles secundarios comprimidos;
- título/copy visibles;
- CTA `Explorar colección` visible;
- CTA WhatsApp visible y legible;
- botón cerrar visible;
- ausencia de clipping/overflow;
- floating WhatsApp sin cubrir controles en mobile.

### Determinismo de captura

Playwright abre Home, espera `networkidle`, fuerza `reducedMotion: reduce`, elimina smooth-scroll para la sesión y desplaza programáticamente el viewport a `#zapatos`, `#fabricacion` o `#contacto` descontando el header sticky.

Para los snapshots abiertos, Playwright ejecuta además la interacción real con el botón `Abrir colección Oxford` y espera a que el heading `Oxford` sea visible antes de capturar.

Esto evita capturas tomadas a mitad del scroll o fuera de la sección. El objetivo del artifact es comparar **layout, crop, jerarquía, estados interactivos y CTA**, no validar timing de animación.

Si un snapshot con selector no muestra la sección indicada o el snapshot `collections-open-*` no muestra Oxford abierto, el QA se considera roto aunque GitHub Actions finalice sin error.

Revisar siempre:
- selector/sección correcta;
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
- Menú móvil es operable con teclado.
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

- Un solo H1 en Home.
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
- Los CTAs del panel abierto no quedan debajo de un overlay/control flotante.

## Imágenes

- Hero usa `fetchPriority="high"` y carga eager.
- Todas las imágenes reservan espacio mediante `fill` + contenedor posicionado.
- `sizes` definido.
- No se usan imágenes CSS para contenido indexable principal.
- Reemplazar URLs first-party externas por originales locales/CDN antes de producción si el cliente entrega assets.
- No asociar una foto de campaña con un producto específico sin verificación.

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
- smoke de 11 rutas;
- snapshots automáticos inspeccionados, no solo generados;
- Lighthouse CI.

Los gates deben estar verdes antes de sacar el PR de draft.
