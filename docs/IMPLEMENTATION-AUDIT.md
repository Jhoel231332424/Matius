# Matius Perfect — Implementation Audit

## Fecha de auditoría

2026-08-25

## Alcance

Verificar en el repositorio GitHub `Jhoel231332424/Matius` si ya existe la foundation técnica definida para la demo de Matius Perfect.

## Resultado global

**Estado actual: FOUNDATION NO IMPLEMENTADA EN GITHUB.**

En el momento de la auditoría el repositorio no contenía scaffold de aplicación. Después de la auditoría se añadió únicamente documentación en `docs/`.

---

# Checklist

## 1. Scaffold Next.js + TypeScript + Tailwind

**Estado: ❌ FALTANTE**

Debe existir como mínimo:

```text
package.json
next.config.*
tsconfig.json
postcss.config.*
app/ o src/app/
public/
```

Además debe verificarse que Tailwind esté realmente configurado y utilizado.

---

## 2. Design tokens en globals.css + next.config allowedDevOrigins

**Estado: ⚠️ DISEÑO DOCUMENTADO, IMPLEMENTACIÓN FALTANTE**

Los tokens están definidos conceptualmente en:

```text
docs/DESIGN-SYSTEM.md
```

Pero todavía deben trasladarse a `app/globals.css` o `src/app/globals.css`.

También falta verificar/crear `next.config.ts` o equivalente con `allowedDevOrigins` si el entorno de desarrollo realmente lo necesita.

No agregar `allowedDevOrigins` de forma arbitraria: configurarlo según el host/origen usado por el workspace de desarrollo.

---

## 3. types/ y data/

**Estado: ❌ FALTANTE**

Esperado:

```text
types/
  product.ts
  store.ts

data/
  site.ts
  products.ts
  stores.ts
  whatsapp.ts
```

### Reglas

- Los datos demo deben marcarse claramente como demo/placeholders.
- No inventar garantía, política de cambios, origen exacto del cuero, testimonios u otros claims no confirmados.
- `products.ts` debe permitir futuras variantes por talla/color.
- `stores.ts` debe soportar Central, Sucursal 1 y Sucursal 2.

---

## 4. lib/ utils + WhatsApp + SEO

**Estado: ❌ FALTANTE**

Esperado:

```text
lib/
  utils.ts
  whatsapp.ts
  seo.ts
```

### whatsapp.ts

Debe generar URLs/mensajes contextuales por origen:

```text
hero
product:{slug}
store:{slug}
final-cta
floating
```

### seo.ts

Debe proveer builders reutilizables para JSON-LD, sin publicar datos ficticios.

Builders sugeridos:

```text
buildOrganizationJsonLd()
buildLocalBusinessJsonLd()
buildProductJsonLd()
buildBreadcrumbJsonLd()
```

`LocalBusiness` y `Product` solo deben renderizar campos que existan realmente.

---

## 5. UI primitives

**Estado: ❌ FALTANTE**

Esperado:

```text
components/ui/
  button.tsx
  container.tsx
  section-heading.tsx
  whatsapp-button.tsx
```

### Reglas

- Deben consumir tokens del Design System.
- Focus visible.
- Touch target mínimo 44x44px.
- `whatsapp-button` debe recibir contexto/source.

---

## 6. Layout

**Estado: ❌ FALTANTE**

Esperado:

```text
components/layout/
  topbar.tsx
  navbar.tsx
  footer.tsx
  floating-whatsapp.tsx
```

### Navbar

- Desktop navigation.
- Mobile Sheet/drawer accesible.
- CTA WhatsApp.
- Navegación semántica.

### Floating WhatsApp

- Aparece después del hero.
- No usar animación infinita.
- No tapar controles en mobile.
- Analytics-ready.

---

## 7. Sections wireframe

**Estado: ❌ FALTANTE**

El component mapping define 14 bloques globales, de los cuales 10 son secciones narrativas principales.

Esperado como mínimo:

```text
components/sections/
  hero.tsx
  brand-pillars.tsx
  collections.tsx
  featured-products.tsx
  craftsmanship.tsx
  leather-detail.tsx
  lifestyle.tsx
  lookbook.tsx
  stores.tsx
  final-cta.tsx
```

Topbar, Navbar, Floating WhatsApp y Footer pertenecen a layout/global UI.

### Regla

Primero wireframe funcional. No introducir efectos complejos antes de validar composición y responsive.

---

## 8. Home + rutas preparadas

**Estado: ❌ FALTANTE**

Home:

```text
app/page.tsx
```

Rutas futuras/preparadas sugeridas:

```text
/zapatos-de-cuero
/zapatos-hombre
/zapatos-mujer
/nuestra-fabricacion
/tiendas
/tiendas/central
/tiendas/sucursal-1
/tiendas/sucursal-2
```

### Importante

No crear páginas vacías/indexables únicamente para cumplir el árbol.

Si una ruta aún no tiene contenido suficiente:

- dejar la arquitectura preparada en código/documentación,
- o usar `noindex` durante demo,
- pero no publicar thin content como producción.

---

## 9. SEO base

**Estado: ❌ FALTANTE**

Esperado:

```text
app/layout.tsx
app/sitemap.ts
app/robots.ts
```

Y JSON-LD en root/layout o componentes SEO dedicados.

### Metadata base

Debe cubrir:

- title template,
- description,
- metadataBase,
- canonical,
- Open Graph,
- Twitter cards si se decide utilizar,
- robots apropiado según entorno demo/producción.

### Structured data

Inicialmente se puede publicar `Organization` si contamos con datos verificados.

`LocalBusiness` queda pendiente de:

- dirección,
- teléfono,
- horarios,
- coordenadas/URL de ubicación si corresponde.

`Product` queda pendiente de datos reales por producto.

---

# Estado resumido

| Ítem | Estado |
|---|---|
| Scaffold Next.js + TS + Tailwind | ❌ Faltante |
| globals.css design tokens | ❌ Faltante en código |
| Design System documentado | ✅ Creado |
| next.config / allowedDevOrigins | ❌ Faltante |
| types/ | ❌ Faltante |
| data/ | ❌ Faltante |
| lib/ | ❌ Faltante |
| JSON-LD builders | ❌ Faltante |
| UI primitives | ❌ Faltante |
| Layout components | ❌ Faltante |
| Floating WhatsApp | ❌ Faltante |
| 10 sections wireframe | ❌ Faltante |
| Home composition | ❌ Faltante |
| Prepared routes | ❌ Faltante |
| Metadata base | ❌ Faltante |
| sitemap.ts | ❌ Faltante |
| robots.ts | ❌ Faltante |
| Root JSON-LD | ❌ Faltante |

---

# Orden de ejecución recomendado para Codex

1. Scaffold Next.js + TypeScript + Tailwind.
2. Añadir Motion y shadcn únicamente cuando foundation compile.
3. Aplicar tokens de `DESIGN-SYSTEM.md` a `globals.css`.
4. Crear `types/`, luego `data/`.
5. Crear `lib/whatsapp.ts`, `lib/seo.ts`, `lib/utils.ts`.
6. Crear UI primitives.
7. Crear layout.
8. Crear las 10 secciones en modo wireframe.
9. Componer Home.
10. Preparar rutas sin thin content indexable.
11. Añadir metadata, sitemap, robots y JSON-LD validado.
12. Ejecutar lint, typecheck y build.
13. Revisar responsive + accessibility.
14. Solo entonces comenzar el visual polish y Motion avanzado.

---

# Criterio para considerar la foundation completa

No marcar esta tarea como completada hasta que:

```text
npm run lint
npm run build
```

pasen correctamente (y `npm run typecheck` si existe script separado), y se haya verificado manualmente:

- home carga sin errores,
- rutas válidas no retornan 500,
- mobile navigation funciona,
- CTA WhatsApp genera mensaje válido,
- sitemap/robots son accesibles,
- JSON-LD no contiene placeholders engañosos,
- imágenes no generan CLS evidente,
- no hay imports/dependencias sin usar.

---

## Nota para Codex

Antes de implementar, leer en este orden:

1. `docs/DESIGN-SYSTEM.md`
2. Issue #2 — Component Mapping completo
3. Issue #1 — Briefing/arquitectura general
4. Este archivo `docs/IMPLEMENTATION-AUDIT.md`

No sustituir decisiones de diseño ya documentadas con defaults de librerías externas.