# KND — Cuartel General Digital

Web privada del grupo KND: operaciones (salidas/aventuras), expedientes de
agentes, galería de fotos y sistema de logros. Prototipo visual funcional
con datos mock — sin backend, sin autenticación todavía.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 (config vía CSS, ver `src/app/globals.css`)
- Datos mock en `src/data/` (sin base de datos todavía)

## Cómo correrlo en local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Estructura

```
src/
  app/            rutas (Inicio, /agentes, /operaciones, /archivos, /logros)
  components/
    ui/           átomos reutilizables: StampBadge, PolaroidPhoto, StickyNote,
                  TerminalPanel, WindowFrame, SectionHeader
    layout/       Navbar, Footer
    home/         piezas exclusivas de Inicio (Hero, próxima operación, comms)
    agentes/      AgentCard
    operaciones/  OperationCard
  data/           MOCK: agents.ts, operations.ts, achievements.ts,
                  gallery.ts, comms.ts — edita aquí para cambiar contenido
  types/          tipos compartidos (Agente, Operacion, Logro, FotoGaleria...)
public/
  assets/         imágenes por categoría, ver public/assets/README.md
scripts/
  generate-placeholders.py   regenera los placeholders SVG si hace falta
```

## Siguientes pasos (no incluidos aún, a propósito)

- Sustituir datos mock por contenido real del grupo.
- Sustituir placeholders de `public/assets/` por fotos reales.
- Supabase (auth + base de datos + storage).
- Deployment en Vercel + dominio privado.
