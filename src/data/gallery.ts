import type { FotoGaleria } from "@/types";

// Fotos reales del archivo de KND, agrupadas por operación. Viven en
// public/galeria/ (archivos originales del usuario, organizados en
// subcarpetas por operación — sin renombrar). getFotosPorOperacion()
// alimenta el tablero de /archivos.
export const galeria: FotoGaleria[] = [
  {
    id: "six-flags-1",
    src: "/galeria/Operacion Six Flags/Six Flags.jpeg",
    alt: "Agentes de KND en Six Flags",
    operacionSlug: "six-flags",
    rotacion: -4,
    caption: "En plena operación",
  },
  {
    id: "six-flags-2",
    src: "/galeria/Operacion Six Flags/Operación Six Flags Vol 1.jpeg",
    alt: "Foto grupal del equipo KND en Six Flags",
    operacionSlug: "six-flags",
    rotacion: 3,
    caption: "Volumen 1 del expediente",
  },
  {
    id: "six-flags-3",
    src: "/galeria/Operacion Six Flags/Esperanding.jpeg",
    alt: "Agentes esperando en la fila de Six Flags",
    operacionSlug: "six-flags",
    rotacion: -2,
    caption: "La eterna fila de espera",
  },
  {
    id: "six-flags-4",
    src: "/galeria/Operacion Six Flags/Nocturno.jpeg",
    alt: "Foto nocturna del equipo en Six Flags",
    operacionSlug: "six-flags",
    rotacion: 5,
    caption: "Cierre nocturno de la misión",
  },
  {
    id: "six-flags-5",
    src: "/galeria/Operacion Six Flags/Sexy Editor en Jefe.jpeg",
    alt: "Agente posando en Six Flags",
    operacionSlug: "six-flags",
    rotacion: -3,
    caption: "El editor en jefe, reportándose",
  },
  {
    id: "gotcha-1",
    src: "/galeria/Operación Gotcha/Operacion Gotcha.jpeg",
    alt: "Escuadrón de KND en la operación Gotcha",
    operacionSlug: "gotcha",
    rotacion: 4,
    caption: "Escuadrón listo para el combate",
  },
  {
    id: "gotcha-2",
    src: "/galeria/Operación Gotcha/Operacion Gotcha Arch 2.jpeg",
    alt: "Segunda foto del archivo de la operación Gotcha",
    operacionSlug: "gotcha",
    rotacion: -5,
    caption: "Archivo clasificado, versión 2",
  },
  {
    id: "rocodromo-1",
    src: "/galeria/Operacion Rocodromo/Roben el zapato de Yor.jpeg",
    alt: "Agentes de KND en el rocódromo",
    operacionSlug: "rocodromo",
    rotacion: -3,
    caption: "Escalando la pared clasificada",
  },
  {
    id: "rocodromo-2",
    src: "/galeria/Operacion Rocodromo/Comidita.jpeg",
    alt: "Agentes comiendo tras la escalada",
    operacionSlug: "rocodromo",
    rotacion: 3,
    caption: "Recarga de energía post-escalada",
  },
  {
    id: "rocodromo-3",
    src: "/galeria/Operacion Rocodromo/Guiri Guiri.jpeg",
    alt: "Agentes conversando en el rocódromo",
    operacionSlug: "rocodromo",
    rotacion: -4,
    caption: "Charla táctica de equipo",
  },
  {
    id: "rocodromo-4",
    src: "/galeria/Operacion Rocodromo/La mirada fornicacion.jpeg",
    alt: "Agente posando en el rocódromo",
    operacionSlug: "rocodromo",
    rotacion: 2,
    caption: "La mirada que lo dice todo",
  },
  {
    id: "carlosfest-1",
    src: "/galeria/Miembros Oficiales de KND.jpeg",
    alt: "Miembros oficiales de KND, foto de equipo",
    operacionSlug: "carlosfest",
    rotacion: -3,
    caption: "Foto oficial del equipo completo",
  },
  {
    id: "coyote-vs-acme-1",
    src: "/galeria/Operacion Coyote vs ACME/Operacion Coyote vs ACME.jpeg",
    alt: "Foto de la operación Coyote vs ACME",
    operacionSlug: "coyote-vs-acme",
    rotacion: -3,
    caption: "El coyote contra todo pronóstico",
  },
  {
    id: "coyote-vs-acme-2",
    src: "/galeria/Operacion Coyote vs ACME/Operacion Clasificada.jpeg",
    alt: "Foto clasificada de la operación Coyote vs ACME",
    operacionSlug: "coyote-vs-acme",
    rotacion: 4,
    caption: "Expediente clasificado",
  },
  {
    id: "examen-de-grado-1",
    src: "/galeria/Operacion Examen de Grado/Operacion Examen de Grado.jpeg",
    alt: "Foto de la operación Examen de Grado",
    operacionSlug: "examen-de-grado",
    rotacion: 3,
    caption: "Sobrevivieron al examen",
  },
  {
    id: "examen-de-grado-2",
    src: "/galeria/Operacion Examen de Grado/Operacion Tortolitos.jpeg",
    alt: "Foto de pareja durante la operación Examen de Grado",
    operacionSlug: "examen-de-grado",
    rotacion: -2,
    caption: "Los tortolitos del cuartel",
  },
  {
    id: "elifest-1",
    src: "/galeria/Operacion Elifest/Operación Elifest.jpeg",
    alt: "Foto de la operación Elifest",
    operacionSlug: "elifest",
    rotacion: -4,
    caption: "Celebrando el Elifest",
  },
  {
    id: "barrio-de-los-sapos-1",
    src: "/galeria/Operacion Barrio de los Sapos/Operación Barrio de los Sapos.jpeg",
    alt: "Foto de la operación Barrio de los Sapos",
    operacionSlug: "barrio-de-los-sapos",
    rotacion: 3,
    caption: "Expedición al Barrio de los Sapos",
  },
];

// FOTOS REALES — usadas en "Galería Reciente" (Inicio). Es una lista
// independiente de `galeria` a propósito: así Archivos sigue mostrando
// su propio agrupado por operación sin verse afectado si esta selección
// de "recientes" cambia.
export const fotosDestacadas: FotoGaleria[] = [
  {
    id: "real-miembros-oficiales",
    src: "/galeria/Miembros Oficiales de KND.jpeg",
    alt: "Miembros oficiales de KND, foto de equipo",
    operacionSlug: "carlosfest",
    rotacion: -3,
    caption: "Operación CarlosFest",
  },
  {
    id: "real-six-flags",
    src: "/galeria/Operacion Six Flags/Operación Six Flags Vol 1.jpeg",
    alt: "Agentes de KND en Six Flags",
    operacionSlug: "six-flags",
    rotacion: 4,
    caption: "Operación Six Flags",
  },
  {
    id: "real-gotcha",
    src: "/galeria/Operación Gotcha/Operacion Gotcha.jpeg",
    alt: "Escuadrón de KND en la operación Gotcha",
    operacionSlug: "gotcha",
    rotacion: -5,
    caption: "Operación Gotcha",
  },
  {
    id: "real-rocodromo",
    src: "/galeria/Operacion Rocodromo/Roben el zapato de Yor.jpeg",
    alt: "Agentes de KND en el rocódromo",
    operacionSlug: "rocodromo",
    rotacion: 3,
    caption: "Operación Rocodromo",
  },
];

export function getFotosPorOperacion(slug: string): FotoGaleria[] {
  return galeria.filter((f) => f.operacionSlug === slug);
}
