# Assets de KND

Todas las imágenes de este proyecto viven aquí, organizadas por tipo. Hoy
son placeholders (SVG generados) que reproducen el tono visual del cuartel.
Cuando tengamos contenido real, sustituye el archivo manteniendo el MISMO
nombre y ruta: el código no necesita tocarse.

## Estructura

- `cuartel/treehouse-hero.svg` — ilustración del cuartel general (hero de Inicio).
  Puede quedarse como ilustración permanente o sustituirse por arte/foto real.
- `agentes/avatar-numero-N.svg` — avatar de cada agente (N = 1 a 6).
  Reemplaza por una foto/ilustración cuadrada (recomendado 400x400 o más).
- `operaciones/portada-<slug>.svg` — portada de cada operación
  (`six-flags`, `gotcha`, `escape-room`). Usa fotos horizontales, 800x500 o más.
- `galeria/<slug>-N.svg` — fotos de la galería de cada operación.
  Usa fotos en cualquier proporción; el componente `PolaroidPhoto` las recorta
  a formato cuadrado.

## Cómo agregar una operación u agente nuevo

1. Agrega la entrada correspondiente en `src/data/operations.ts` o
   `src/data/agents.ts`.
2. Sube la imagen a la subcarpeta correcta con un nombre consistente
   (ej. `operaciones/portada-mi-operacion.svg` o `.jpg`/`.png`).
3. Apunta el campo `portada` / `avatar` / `src` de ese registro a la nueva ruta.

## Regenerar placeholders

El script `scripts/generate-placeholders.py` (en la raíz del proyecto) generó
estos SVG. Puedes volver a ejecutarlo (`python3 scripts/generate-placeholders.py`)
si agregas nuevos ids y quieres un placeholder rápido antes de tener la foto real.
