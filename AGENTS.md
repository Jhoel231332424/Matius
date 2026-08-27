# AGENTS.md — Matius Perfect

Este repositorio usa reglas explícitas para evitar drift visual, claims inventados y regresiones de UX/performance.

## Antes de modificar frontend

1. Leer `DESIGN.md` completo.
2. Leer `docs/DESIGN-SYSTEM.md`.
3. Revisar el Component Mapping (Issue #2 y documentación asociada).
4. Inspeccionar los componentes/tokens existentes antes de crear otros nuevos.
5. Preferir reutilizar la arquitectura actual.
6. No introducir una librería de UI/motion sin justificar por qué HTML/CSS/React actuales no alcanzan.
7. Distinguir siempre dato verificado de placeholder/demo.

## Reglas de implementación

- Next.js App Router + TypeScript + Tailwind son la base.
- Mantener Server Components por defecto.
- Añadir `use client` solo cuando existe interacción real necesaria.
- Reutilizar `Container`, `SectionHeading`, `Button`, helpers SEO y helpers WhatsApp existentes.
- No duplicar tokens en componentes: usar `app/globals.css`.
- Evitar estilos globales que anulen utilities de Tailwind por cascada.
- No usar imágenes remotas fuera de allowlists explícitas.
- Mantener `next/image` para imágenes relevantes.

## Datos de negocio

Nunca inventar:
- testimonios;
- direcciones/horarios;
- stock;
- garantía/devoluciones;
- tallas/colores;
- procedencia o tipo técnico de cuero;
- procesos de fabricación concretos;
- descuentos/urgencia.

Si un dato falta, omitirlo o dejarlo en la capa de datos como pendiente interno; no publicarlo como claim real.

## UX / CRO

La conversión primaria es WhatsApp.

Cada feature debe responder:
- ¿qué entiende mejor el usuario?;
- ¿qué deseo genera?;
- ¿qué confianza añade?;
- ¿qué acción habilita?

Si no mejora al menos una, cuestionar la feature.

## SEO

Antes de declarar SEO completo:
- metadata/canonical correctos;
- Open Graph/Twitter;
- sitemap/robots;
- enlaces crawlables;
- headings semánticos;
- imágenes indexables;
- structured data solo con datos reales.

Preview permanece `noindex` salvo variable explícita de producción.

## QA obligatorio por feature

Cada feature subida al repositorio debe:
1. estar en `feat/landing-foundation` mientras PR #3 continúe abierto;
2. tener commit identificable por feature;
3. pasar `npm run lint`;
4. pasar `npm run typecheck`;
5. pasar `npm run build`;
6. pasar smoke routes de CI;
7. revisar snapshots mobile y desktop si modifica UI;
8. revisar Lighthouse si afecta first viewport, imágenes, JS, SEO o accesibilidad.

No declarar un gate como verde si no se ejecutó.

## Visual regression

Antes de aceptar un cambio de UI comparar:
- 390×844;
- 1440×1000.

Buscar:
- crops incorrectos;
- botones sin texto/contraste;
- overflow;
- cambios inesperados en typography/spacing;
- elementos tapados por floating WhatsApp;
- navegación mobile rota;
- secciones con ritmo inconsistente.

## Skills locales

Usar según la tarea:
- `.codex/skills/matius-design/SKILL.md` — dirección visual y UI;
- `.codex/skills/matius-cro/SKILL.md` — conversión/WhatsApp;
- `.codex/skills/matius-seo/SKILL.md` — SEO técnico/local/producto;
- `.codex/skills/matius-visual-qa/SKILL.md` — snapshots/a11y/performance.

## Política de cambios visuales

`DESIGN.md` manda sobre preferencias circunstanciales del agente.

No cambiar globalmente paleta, tipografías, CTA hierarchy, product card anatomy o motion philosophy sin actualizar `DESIGN.md` en el mismo feature commit y explicar el motivo.

## Definition of Done

Una feature no está terminada porque “se ve bien” o porque compila. Está terminada cuando cumple contrato visual, negocio, responsive, accesibilidad, SEO aplicable y CI.
