# Matius Perfect — Visual Contract

Este archivo es la fuente de verdad del lenguaje visual del proyecto. Los agentes y colaboradores deben leerlo antes de modificar UI. Las decisiones aquí definidas no se reinterpretan por turno: se cambian únicamente cuando existe una razón de producto o de marca documentada.

## 1. Tesis visual

**Modern Bolivian Leather / Editorial Commerce.**

Matius Perfect debe sentirse como una marca boliviana contemporánea de calzado de cuero: elegante, táctil, urbana y duradera. Premium accesible, no lujo artificial. Artesanal, no rústica. Moderna, no tecnológica/SaaS.

La fotografía y el producto dominan. La interfaz acompaña.

## 2. Objetivo de producto

La landing debe llevar al visitante por esta secuencia:

`descubrir → desear → entender calidad → confiar → consultar por WhatsApp`

Conversión primaria: **WhatsApp**.

Cada sección debe mejorar al menos una de estas dimensiones: deseo, comprensión, confianza o conversión. Si no lo hace, se simplifica o elimina.

## 3. Información verificada vs. no verificada

Puede afirmarse actualmente:
- marca: Matius Perfect;
- foco de la demo: zapatos;
- cuero, fabricación y durabilidad como pilares;
- origen/presencia en Cochabamba, Bolivia;
- atención por WhatsApp;
- tres puntos físicos denominados Central, Sucursal 1 y Sucursal 2;
- assets de campaña expuestos públicamente por el sitio oficial;
- Oxford con precio público únicamente mientras la fuente oficial lo mantenga vigente.

No inventar:
- direcciones u horarios;
- garantía, devoluciones o cambios;
- stock, tallas o colores;
- reviews/testimonios;
- procedencia/tipo técnico del cuero;
- procesos exactos de fabricación;
- relación entre una fotografía de campaña y un modelo concreto si no está confirmada.

## 4. Tipografía

- Display/editorial: `Cormorant Garamond`.
- Body/UI: `Geist`.
- H1: editorial, dominante, compacto; evitar más de tres líneas desktop y cuatro mobile.
- UI: legible, sobria, sin tracking exagerado salvo eyebrows.
- No introducir una tercera familia sin revisión del contrato.

Los títulos editoriales deben sentirse estables y con autoridad. El movimiento se resuelve por líneas completas, no letra por letra.

## 5. Paleta

Los tokens de `app/globals.css` son la fuente técnica de verdad.

Paleta aprobada para esta fase:
- black: `#010101`;
- charcoal: `#17110d`;
- dark brown: `#28140a`;
- tobacco: `#5a3521`;
- cognac: `#7d3f23`;
- ivory: `#e6dfcf`;
- warm white: `#f0eadf`;
- Matius red: `#9e2c1b`.

Uso visual:
- black / charcoal: autoridad, navegación, secciones inmersivas y contraste;
- dark brown / tobacco / cognac: material, cuero y transiciones cromáticas;
- ivory / warm white: respiración editorial y legibilidad;
- Matius red: acento escaso para conversión, foco o firma de marca.

Proporción orientativa en escenas de alto impacto: 60–70% oscuridad, 20–30% fotografía/material, 5–10% marfil y menos de 3% rojo.

Regla: no usar el rojo como fondo dominante repetido en múltiples secciones.

## 6. Composición

Preferir:
- retícula editorial de 12 columnas en desktop;
- asimetría controlada;
- imágenes grandes que atraviesen la retícula;
- cambios de ritmo entre secciones claras/oscuras;
- mucho espacio negativo alrededor del producto;
- numeración funcional cuando explica secuencia/proceso;
- líneas finas como separadores y elementos de ritmo.

Evitar:
- bento grids genéricos;
- tres cards con iconos como explicación de marca;
- glassmorphism;
- gradientes decorativos tecnológicos;
- blobs, particles, cursores custom;
- sombras flotantes de SaaS;
- exceso de rounded cards;
- componentes cuyo único valor sea “tener un efecto”.

## 7. Hero

Debe contener:
1. un único H1;
2. una imagen dominante de producto/campaña;
3. una propuesta de valor breve;
4. un CTA primario;
5. un CTA secundario contextual a WhatsApp.

No usar:
- autoplay carousel;
- loader de marca;
- testimonios dentro del hero;
- más de dos acciones principales;
- decoración que compita con el producto.

La imagen hero es candidata LCP: `next/image`, `fetchPriority="high"`, `sizes` correcto, sin animaciones que retrasen paint.

El H1 usa reveal por línea mediante clip/translate suave. La fotografía puede entrar con un scale máximo aproximado de `1.045 → 1` y cambio de saturación/luminosidad muy leve.

## 8. Product Card

Orden obligatorio:
1. imagen;
2. categoría;
3. nombre;
4. precio solo si está verificado;
5. contexto breve;
6. CTA de WhatsApp.

La fotografía ocupa más área visual que metadata/copy.

No mostrar badges, descuentos, reviews, stock o urgencia si no son reales.

## 9. Colecciones

Las colecciones deben sentirse como entradas editoriales al catálogo, no como cards de dashboard. Cada elemento debe ser un enlace crawlable real. En mobile debe funcionar sin hover.

## 10. Fabricación — signature moment

Es la única escena de storytelling de scroll que puede ser compleja.

Preferencia técnica:
`CSS sticky → CSS transitions → JS mínimo → librería de motion solo si existe una necesidad demostrada`.

Mobile usa narrativa vertical simple; no debe copiar una interacción desktop que empeore scroll/lectura.

## 11. Photography

Prioridad:
1. producto real;
2. macro de material/acabado;
3. fabricación real;
4. lifestyle;
5. campaña/lookbook;
6. sucursales.

Reglas:
- usar assets first-party o autorizados;
- alt contextual cuando la imagen comunica contenido;
- alt vacío si es estrictamente decorativa;
- no afirmar que un asset de campaña representa un producto específico sin evidencia;
- usar crops específicos por breakpoint cuando sea necesario.

## 12. Banner editorial de material

Entre la selección de producto y la historia de fabricación debe existir una transición fotográfica de ancho completo. Su función es cambiar el ritmo desde catálogo hacia material/oficio sin introducir un efecto aislado.

Reglas:
- usar una fotografía autorizada de producto o detalle con overlay oscuro suficiente;
- copy de una o dos líneas, con mezcla sobria de peso regular y semibold;
- no atribuir a Matius servicios observados en otras marcas;
- en esta fase comunica `cuero auténtico`, `calzado hecho en Cochabamba` y carácter del material;
- altura menor al hero, sin autoplay ni interacción obligatoria;
- mobile mantiene imagen, contraste y texto legible sin depender de un crop desktop.

## 13. Barra institucional de confianza

Antes del footer debe aparecer una franja de confianza basada solo en datos verificados de Matius. No usar claims de financiación, cambios, garantía, checkout o envíos si el cliente no los confirma.

Contenido aprobado para esta fase:
1. cuero auténtico;
2. hecho en Cochabamba;
3. atención directa por WhatsApp;
4. presencia física: Central y dos sucursales.

La barra usa una superficie institucional Matius —tobacco/charcoal, nunca verde PACCO—, numeración o líneas editoriales y texto breve. No debe convertirse en un conjunto de cards SaaS. Desktop usa cuatro columnas; mobile apila en una columna o dos cuando el ancho lo permita.

## 14. Motion

Motion refuerza jerarquía/material; nunca compensa una composición débil.

Lenguaje aprobado:
- títulos Hero: clip-reveal por línea, `~760–850ms`, easing editorial `cubic-bezier(0.22, 1, 0.36, 1)`;
- títulos de sección: reveal al entrar al viewport, preferentemente CSS scroll-driven con fallback estático;
- eyebrows/copy: fade + translate breve;
- reglas editoriales: expansión horizontal desde el origen;
- imágenes: scale máximo aproximado `1.045 → 1`, crossfade y cambios leves de saturación/brightness;
- hover: color/opacity/scale mínimo;
- sticky storytelling solo cuando la relación producto/material lo justifique.

Principio: **las imágenes pueden moverse; los títulos mantienen autoridad**.

Permitido:
- fade/translate breve;
- scale muy sutil de imagen;
- sticky storytelling;
- hover de segunda imagen;
- clip/reveal cuando ayuda a presentar material;
- crossfade entre estados visuales;
- transiciones oscuras entre escenas si no bloquean navegación ni LCP.

Límites:
- una escena de scroll compleja máxima;
- evitar animación letra por letra en todo el sitio;
- nada de loops infinitos decorativos;
- respetar `prefers-reduced-motion`;
- evitar nuevas dependencias de animación sin demostrar que CSS no alcanza;
- no introducir springs, bounce, elastic, tilt 3D, particles o cursores custom para “hacerlo premium”.

## 15. WhatsApp / CRO

WhatsApp debe aparecer en momentos de intención, no como ruido constante.

Sources soportados:
- hero;
- product;
- store;
- final-cta;
- floating;
- general.

Cada CTA de producto/sucursal debe producir mensaje contextual cuando existan esos datos.

El botón flotante es soporte, no reemplaza los CTAs narrativos.

## 16. Mobile-first

Mobile no es desktop comprimido.

Comprobar como mínimo:
- 320 px;
- 375/390 px;
- 430 px;
- tablet;
- 1440 px desktop.

En mobile:
- producto visible temprano;
- botones ≥ 44 px;
- nada depende de hover;
- evitar sticky prolongado;
- textos editoriales no deben producir líneas huérfanas extremas;
- WhatsApp flotante no cubre navegación/CTAs.

## 17. Accesibilidad

Hard gates:
- navegación por teclado;
- `:focus-visible` perceptible;
- landmarks semánticos;
- contraste WCAG AA;
- nombres accesibles consistentes;
- skip link;
- reduced motion;
- estructura de headings coherente;
- imágenes con alt correcto.

Objetivo Lighthouse Accessibility: **≥ 0.95**, ideal **1.00**.

## 18. Performance

Objetivos de laboratorio/CI:
- Performance ≥ 0.75 como gate inicial, objetivo ≥ 0.90;
- LCP ≤ 4 s en CI, objetivo de campo ≤ 2.5 s;
- CLS ≤ 0.1;
- TBT ≤ 350 ms como objetivo;
- minimizar Client Components.

No instalar una librería para un componente que puede resolverse con CSS/React/HTML existente.

## 19. SEO visual/estructural

- un H1 por página;
- headings por semántica, no por tamaño;
- links reales para categorías/rutas;
- imágenes clave mediante `next/image`/HTML discoverable;
- canonical por página;
- previews `noindex` por defecto;
- LocalBusiness/Product solo con datos reales suficientes;
- no publicar rutas doorway duplicadas.

## 20. Regla de decisión

Antes de añadir una técnica/componente, responder:

> ¿Hace que el producto se vea más premium, comprensible o confiable; o solo hace que la página tenga más efectos?

Si la respuesta es “más efectos”, rechazarla.

## 21. Definition of Done visual

Un cambio visual no está terminado hasta que:
- respeta este contrato;
- no inventa datos;
- pasa lint/typecheck/build;
- smoke routes pasan;
- snapshots mobile/desktop son inspeccionados;
- Lighthouse no introduce regresiones relevantes;
- CTAs funcionan y son visibles;
- no genera drift visual respecto del sistema aprobado.

## 22. Archivos del sistema de diseño

El sistema se entrega como cuatro piezas coordinadas y responsive; mobile no mantiene una variante separada:

| Archivo | Responsabilidad |
| --- | --- |
| `DESIGN.md` | Contrato visual, narrativo, responsive y de calidad. |
| `styles/variables.css` | Fuente runtime de colores, roles semánticos, espaciado, controles, layout y motion. |
| `styles/theme.css` | Puente de los tokens runtime hacia utilidades de Tailwind CSS v4. |
| `token.json` | Handoff interoperable para diseño, tooling y futuras plataformas. No se importa en producción. |

La referencia editorial de calzado se traduce a Matius, no se copia: se conservan fotografía dominante, escala de 4 px, botones de 48 px, bordes discretos, movimiento sobrio y gutters `20 / 32 / 48 px`; se sustituyen sus colores y tipografía por la identidad verificada de Matius (negro, marfil, cuero cognac, rojo, Cormorant Garamond y Geist).

En mobile, los mismos tokens cambian por breakpoint. La barra superior usa un mensaje corto de una línea, el hero reduce altura y espaciado sin perder jerarquía, los CTAs mantienen 48 px y ninguna acción depende de hover.
