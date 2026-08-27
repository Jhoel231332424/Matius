# Railway Preview Runtime

## Objetivo

Mantener el preview de Matius Perfect estable y observable sin depender de configuración manual no documentada.

## Servicio

- Proyecto Railway: `Matius Preview`
- Servicio: `matius-preview`
- Rama: `feat/landing-foundation`
- Dominio: `https://matius-preview-production.up.railway.app`

## Runtime esperado

- Start command: `npm start`
- Healthcheck: `/api/health`
- Healthcheck timeout: 120 segundos
- Sleep application: desactivado
- Restart policy: `ON_FAILURE`
- Max restart retries: 3

## Endpoints operativos

### `/api/health`

Endpoint mínimo para healthchecks de Railway. Debe responder HTTP 200 y:

```json
{"status":"ok"}
```

No contiene información de negocio ni datos sensibles.

### `/api/deployment-info`

Expone únicamente metadatos de deployment necesarios para sincronizar GitHub Actions con Railway:

- commit SHA;
- branch;
- environment;
- service.

Se usa para impedir que el Preview QA valide un deployment anterior.

## QA

`.github/workflows/preview-qa.yml` comprueba ambos endpoints antes de ejecutar snapshots y Lighthouse contra el dominio real.

Los cambios de runtime en Railway deben mantenerse alineados con este documento. Si se cambia healthcheck, restart policy o start command, actualizar este archivo dentro de la misma feature.
