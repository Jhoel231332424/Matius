# Matius Perfect — Design System v1.0

## 1. Objetivo

Este documento define el sistema visual, de interacción y de implementación para la landing demo de **Matius Perfect**.

La dirección de marca es:

**Editorial leather / contemporary craft / premium accesible.**

La interfaz debe comunicar tres atributos centrales:

1. **Cuero**
2. **Fabricación**
3. **Durabilidad**

La conversión principal de la landing es **WhatsApp**.

El sistema debe priorizar fotografía, tipografía, composición y materialidad. Los efectos visuales son secundarios y nunca deben competir con el producto.

---

## 2. Principios de diseño

### 2.1 Producto primero

Las fotografías del calzado son el elemento visual principal. UI, bordes, iconos y animaciones deben acompañarlas, no dominarlas.

### 2.2 Premium sin exceso

Evitar:

- glassmorphism fuerte,
- gradientes tecnológicos,
- neones,
- sombras exageradas,
- partículas,
- cursores personalizados,
- animaciones infinitas,
- cards con estética SaaS,
- iconografía decorativa innecesaria.

### 2.3 Artesanal contemporáneo

La marca debe sentirse manufacturada y táctil sin caer en una estética rústica o vintage genérica.

### 2.4 Movimiento con propósito

Motion debe utilizarse para:

- revelar producto,
- reforzar jerarquía,
- conectar bloques narrativos,
- mostrar detalle/material,
- indicar interacción.

No se debe animar un elemento únicamente porque sea técnicamente posible.

### 2.5 Conversión visible

WhatsApp debe aparecer como canal de compra/consulta contextual durante todo el recorrido, pero sin convertirse en ruido visual.

---

# 3. Foundations

## 3.1 Paleta

### Neutrales

```css
--mat-ivory: #E6DFCF;
--mat-warm-white: #F0EADF;
--mat-sand: #C9B9A5;
--mat-stone: #9A8875;
--mat-charcoal: #17110D;
--mat-black: #010101;
```

### Leather tones

```css
--mat-cognac: #7D3F23;
--mat-tobacco: #5A3521;
--mat-dark-brown: #28140A;
```

### Brand accent

```css
--mat-red: #9E2C1B;
--mat-red-hover: #7F2015;
```

> El rojo debe utilizarse de forma controlada: CTA secundario de marca, pequeños estados activos o detalles. No debe convertirse en el color dominante del sitio.

### Roles semánticos runtime

```css
--mat-canvas: var(--mat-warm-white);
--mat-surface: var(--mat-ivory);
--mat-surface-dark: var(--mat-charcoal);
--mat-text: var(--mat-charcoal);
--mat-text-inverse: var(--mat-warm-white);
--mat-action: var(--mat-charcoal);
--mat-action-hover: var(--mat-dark-brown);
--mat-accent: var(--mat-red);
```

### Contraste

- Texto principal: charcoal/black sobre warm white/ivory.
- Texto invertido: warm white sobre charcoal/black.
- Cognac y tobacco son tonos de soporte visual, no colores de body text.
- Todo texto interactivo debe cumplir contraste WCAG AA.

---

## 3.2 Tipografía

### Sistema recomendado

**Display / editorial:** serif con carácter.

Candidatos gratuitos compatibles con Next.js/Google Fonts:

- Cormorant Garamond
- DM Serif Display
- Libre Baskerville

**UI / body:** sans neutral.

Candidatos:

- Inter
- Manrope
- Geist

### Recomendación inicial

```text
Display: Cormorant Garamond
UI/Body: Geist
```

Antes de producción, validar que la tipografía elegida no entre en conflicto con la identidad gráfica oficial de Matius.

### Escala tipográfica

```css
--text-xs: 0.75rem;      /* 12 */
--text-sm: 0.875rem;     /* 14 */
--text-base: 1rem;       /* 16 */
--text-lg: 1.125rem;     /* 18 */
--text-xl: 1.25rem;      /* 20 */
--text-2xl: 1.5rem;      /* 24 */
--text-3xl: 1.875rem;    /* 30 */
--text-4xl: 2.25rem;     /* 36 */
--text-5xl: 3rem;        /* 48 */
--text-6xl: 3.75rem;     /* 60 */
--text-7xl: 4.5rem;      /* 72 */
--text-8xl: 6rem;        /* 96 */
```

### Hero

Desktop:

```css
font-size: clamp(4rem, 8vw, 8.5rem);
line-height: 0.88;
letter-spacing: -0.035em;
```

Mobile:

```css
font-size: clamp(3rem, 15vw, 5rem);
line-height: 0.9;
```

### Section headings

```css
font-size: clamp(2.5rem, 5vw, 5rem);
line-height: 0.95;
letter-spacing: -0.025em;
```

### Body

```css
font-size: clamp(1rem, 1.2vw, 1.125rem);
line-height: 1.6;
```

### Reglas

- H1/H2 grandes: serif editorial.
- Navegación, botones, etiquetas y body: sans.
- Evitar uppercase en párrafos largos.
- Uppercase sí puede usarse en eyebrow labels pequeñas con tracking alto.

---

## 3.3 Espaciado

Sistema base de 4 px.

```css
--space-1: 0.25rem;  /* 4 */
--space-2: 0.5rem;   /* 8 */
--space-3: 0.75rem;  /* 12 */
--space-4: 1rem;     /* 16 */
--space-5: 1.25rem;  /* 20 */
--space-6: 1.5rem;   /* 24 */
--space-8: 2rem;     /* 32 */
--space-10: 2.5rem;  /* 40 */
--space-12: 3rem;    /* 48 */
--space-16: 4rem;    /* 64 */
--space-20: 5rem;    /* 80 */
--space-24: 6rem;    /* 96 */
--space-32: 8rem;    /* 128 */
--space-40: 10rem;   /* 160 */
```

### Section spacing

Desktop:

```css
padding-block: clamp(6rem, 10vw, 10rem);
```

Mobile:

```css
padding-block: clamp(4rem, 14vw, 6rem);
```

---

## 3.4 Grid y container

### Container

```css
max-width: 1440px;
padding-inline: clamp(1rem, 4vw, 4rem);
margin-inline: auto;
```

### Editorial grid

Desktop:

- 12 columnas
- gap entre 20–32 px

Tablet:

- 8 columnas

Mobile:

- 4 columnas
- gap 12–16 px

### Ancho de lectura

Párrafos narrativos:

```css
max-width: 60ch;
```

Copy de hero:

```css
max-width: 48ch;
```

---

## 3.5 Breakpoints

Usar los breakpoints estándar de Tailwind como base, pero diseñar por contenido:

```text
sm  = 640px
md  = 768px
lg  = 1024px
xl  = 1280px
2xl = 1536px
```

Regla importante: ninguna interacción crítica debe depender de hover.

---

# 4. Shape / borders / elevation

## Radios

La marca no debe verse excesivamente redondeada.

```css
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 14px;
--radius-pill: 999px;
```

Uso:

- Product cards: 0–8 px.
- Botones: 999 px si se busca lenguaje editorial contemporáneo; alternativamente 4–8 px para una estética más clásica.
- Imágenes hero/lifestyle: preferir 0–8 px.

## Bordes

```css
border: 1px solid var(--border);
```

Bordes delgados, nunca doble borde ni glow.

## Sombras

Evitar sombras visibles como recurso principal.

Permitido:

```css
box-shadow: 0 8px 30px rgba(14, 13, 12, 0.06);
```

solo en overlays, dropdowns o navegación móvil.

---

# 5. Buttons

## Primary

Uso: CTA principal no-WhatsApp, por ejemplo `Descubrir zapatos`.

```text
background: charcoal
text: warm white
height: 48–52px
padding-inline: 24–28px
```

Hover:

- fondo black,
- translateY máximo -1 px,
- transición 180–220 ms.

## WhatsApp

No utilizar verde brillante como lenguaje visual dominante de la página.

Opción recomendada:

- botón charcoal o brand red,
- icono de WhatsApp,
- label explícito `Consultar por WhatsApp`.

El verde de WhatsApp puede reservarse para el botón flotante o un pequeño icono identificativo.

## Secondary / ghost

- fondo transparente,
- border neutral,
- texto foreground.

## Touch targets

Mínimo 44×44 px.

---

# 6. Images

## Principio

La fotografía es parte del design system.

## Aspect ratios

```text
Hero desktop: 16:9 / 3:2 según asset
Hero mobile: 4:5 / 3:4
Product card: 4:5
Lifestyle portrait: 4:5
Lifestyle landscape: 3:2
Macro leather: 16:9 o 3:2
Store cards: 4:3
```

## Tratamiento

- Luz natural/cálida.
- Saturación controlada.
- Negros profundos sin aplastar detalle.
- Textura del cuero visible.
- Evitar fondos genéricos de ecommerce blanco en toda la experiencia; mezclarlos con lifestyle y macro.

## Next/Image

- Hero: `priority`.
- Debajo del fold: lazy por defecto.
- Definir `sizes` explícitamente.
- Reservar dimensiones para evitar CLS.
- Las imágenes SEO importantes deben existir como `<Image>`/`<img>`, no solo CSS backgrounds.

---

# 7. Motion system

## Librería

**Motion for React** es el motor principal.

No instalar GSAP o Lenis en v1 sin justificación técnica.

## Duraciones

```css
--duration-fast: 160ms;
--duration-base: 240ms;
--duration-slow: 480ms;
--duration-editorial: 700ms;
```

## Easings

UI:

```css
cubic-bezier(0.2, 0.8, 0.2, 1)
```

Editorial reveal:

```css
cubic-bezier(0.22, 1, 0.36, 1)
```

## Patrones permitidos

### Fade up

```text
opacity 0 → 1
y 18 → 0
```

### Image reveal

```text
clip-path inset(8% 0 0 0) → inset(0)
```

### Hero image

```text
scale 1.03 → 1
```

### Macro scroll

```text
scale 1 → 1.08
```

### Hover product

- cambio de imagen con crossfade,
- imagen scale máximo 1.02,
- CTA/label translate máximo 4 px.

## Prohibido

- bounce excesivo,
- spring fuerte en contenido editorial,
- letter-by-letter en todos los títulos,
- scroll hijacking,
- animaciones infinitas decorativas,
- transiciones de más de ~900 ms salvo escena narrativa específica.

## Reduced motion

Todo componente animado debe respetar `prefers-reduced-motion` mediante `useReducedMotion` o `MotionConfig`.

---

# 8. Navigation

## Topbar

Altura aproximada: 28–36 px.

Contenido corto:

`Fabricado en Cochabamba · Envíos a Bolivia · Atención por WhatsApp`

Mobile: mostrar una versión reducida.

## Navbar

Desktop:

- altura 72–88 px,
- logo a izquierda,
- navegación simple,
- CTA WhatsApp a derecha.

Mobile:

- logo,
- botón WhatsApp opcional compacto,
- Sheet menu.

La navbar puede reducir altura al hacer scroll, pero debe reaparecer cuando el usuario sube.

---

# 9. Product Card

Componente objetivo: `ProductCardMatius`.

## Contenido

1. imagen principal,
2. segunda imagen opcional,
3. nombre,
4. color/material si está confirmado,
5. precio solo si está confirmado,
6. CTA `Consultar este modelo`.

## Estados

Desktop hover:

- transición a segunda imagen,
- reveal discreto del CTA.

Mobile:

- CTA siempre visible o accesible tras tap,
- nunca esconder información esencial detrás del hover.

---

# 10. Section Heading

Estructura estándar:

```text
EYEBROW
Heading editorial grande
Copy de apoyo opcional
```

Ejemplo:

```text
NUESTRA ESENCIA
Cuero, oficio y tiempo.
Tres elementos detrás de un par que busca acompañarte durante años.
```

Evitar centrar todas las secciones. Alternar alineaciones según composición editorial.

---

# 11. WhatsApp UX

## CTA contextual

La función debe recibir origen y contexto.

Ejemplos:

```text
hero
product:{slug}
store:{slug}
floating
final-cta
```

## Mensaje producto

```text
Hola, vi el modelo {productName} en la web de Matius Perfect. ¿Qué tallas y colores tienen disponibles?
```

## Mensaje general

```text
Hola, vi la página de Matius Perfect y quisiera consultar los modelos de zapatos disponibles.
```

## Analytics event naming

```text
whatsapp_hero_click
whatsapp_product_click
whatsapp_store_click
whatsapp_final_cta_click
whatsapp_floating_click
```

---

# 12. Accessibility

- HTML semántico.
- Un único H1 principal por página.
- Contraste AA.
- Focus visible.
- Targets ≥ 44 px.
- Navegación usable con teclado.
- `aria-label` en controles icon-only.
- Alt text contextual para producto/lifestyle.
- `prefers-reduced-motion` respetado.
- No depender únicamente de color para estados.

---

# 13. SEO visual

## Headings

Jerarquía H1 → H2 → H3 basada en contenido, no en apariencia.

## Imágenes

Ejemplos de naming:

```text
zapato-oxford-cuero-marron-matius-perfect.webp
proceso-fabricacion-zapatos-matius-perfect.webp
sucursal-central-matius-perfect.webp
```

## Alt

Describir lo visible y relevante. Evitar keyword stuffing.

## Local

Cuando existan datos reales para Central / Sucursal 1 / Sucursal 2, mantener NAP consistente y generar `LocalBusiness` por ubicación.

---

# 14. Component rules

## shadcn/ui

Usar para primitives de comportamiento/accesibilidad:

- Button
- Sheet
- Navigation Menu
- Accordion cuando sea útil
- Carousel solo donde sea necesario

No aceptar los estilos default como diseño final: deben adaptarse a los tokens Matius.

## React Bits

Máximo 1–2 patrones especiales. Recrear con Motion si el componente Pro añade una dependencia innecesaria.

## 21st.dev

Fuente de patrones y aceleración, no identidad visual. Todo componente copiado/adaptado debe ser normalizado al sistema de tokens.

## Magic UI

Permitido: `Blur Fade` ligero. `Marquee` solo con contenido real que justifique movimiento continuo.

## UIverse

Solo inspiración para microinteracciones. No copiar componentes con glow/neon/gradients ajenos a la marca.

---

# 15. Performance budget

Objetivos:

```text
LCP <= 2.5 s
INP <= 200 ms
CLS <= 0.1
```

Reglas:

- minimizar Client Components,
- no instalar librerías completas para una interacción menor,
- imágenes optimizadas,
- fuentes con `next/font`,
- no bloquear render por animaciones iniciales,
- no reproducir video pesado automáticamente en mobile sin estrategia adaptativa,
- lazy-load para contenido fuera del viewport.

---

# 16. Breakpoint behavior por sección

## Hero
Desktop: layout editorial amplio / posible split o image dominant.
Mobile: imagen vertical y copy claramente legible, CTA visible temprano.

## Brand pillars
Desktop: tres paneles o composición asimétrica.
Mobile: stack vertical.

## Collections
Desktop: grid 12-column.
Mobile: stack o horizontal snap.

## Featured products
Desktop: 3–4 productos visibles.
Mobile: 1.x card / carousel con snap.

## Craftsmanship
Desktop: sticky storytelling.
Mobile: timeline vertical sin sticky prolongado.

## Leather detail
Desktop: macro full-width + callouts.
Mobile: macro + copy debajo; reducir zoom/parallax.

## Lifestyle
Desktop: editorial grid asimétrico.
Mobile: secuencia vertical.

## Lookbook
Desktop: masonry/grid.
Mobile: 2 columnas o horizontal snap.

## Stores
Desktop: 3 cards.
Mobile: stack / accordion si aumenta contenido.

---

# 17. Tokens de implementación

La fuente runtime está en `styles/variables.css`; `app/globals.css` la importa y `styles/theme.css` expone los roles compatibles con Tailwind CSS v4. `token.json` replica el contrato en un formato interoperable para handoff y tooling, pero no se carga en producción.

No volver a declarar colores, spacing, radios o duraciones dentro de componentes. Si cambia un valor global, actualizar `styles/variables.css` y mantener sincronizado `token.json`.

---

# 18. Definition of Done visual

Una sección se considera terminada cuando:

- usa tokens del sistema,
- funciona en mobile sin depender de hover,
- mantiene jerarquía semántica,
- tiene estados focus/hover/active,
- respeta reduced motion,
- no introduce una nueva dependencia sin justificación,
- las imágenes están optimizadas y dimensionadas,
- los CTAs de WhatsApp tienen contexto,
- no contiene claims del cliente no verificados,
- no compromete Core Web Vitals por efectos visuales.

---

## Estado

**v1.0 — listo para usar como contrato visual de la demo.**

Debe actualizarse después de recibir assets reales, tipografía/brand guidelines oficiales y feedback del cliente.
