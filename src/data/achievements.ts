import type { Logro } from "@/types";

// Logros compartidos: cualquier agente puede desbloquear el mismo logro.
// La relación agente <-> logro vive en Agente.logroIds (src/data/agents.ts),
// no aquí — así un mismo logro puede pertenecer a varios agentes a la vez.
export const logros: Logro[] = [
  {
    id: "primera-operacion",
    nombre: "Primera Operación",
    descripcion: "Completó su primera misión oficial de KND.",
    icono: "🎖️",
    rareza: "comun",
  },
  {
    id: "sobrevivio-gotcha",
    nombre: "Sobrevivió al Gotcha",
    descripcion: "Salió del campo de batalla con la moral intacta (más o menos).",
    icono: "🔫",
    rareza: "raro",
  },
  {
    id: "veterano-six-flags",
    nombre: "Veterano de Six Flags",
    descripcion: "Sobrevivió a la fila de tres horas sin perder la cabeza.",
    icono: "🎢",
    rareza: "comun",
  },
  {
    id: "nunca-abandona",
    nombre: "Nunca Abandones a un Agente",
    descripcion: "Se quedó hasta el final de la misión pase lo que pase.",
    icono: "🤝",
    rareza: "raro",
  },
  {
    id: "mvp-mision",
    nombre: "MVP de la Misión",
    descripcion: "Reconocido por el equipo como el agente más valioso de la operación.",
    icono: "🏆",
    rareza: "legendario",
  },
  {
    id: "tanque-oficial",
    nombre: "Tanque Oficial",
    descripcion: "Levantó algo que nadie más pudo levantar. Literalmente.",
    icono: "💪",
    rareza: "raro",
  },
  {
    id: "snack-master",
    nombre: "Snack Master",
    descripcion: "Nunca, jamás, se ha quedado sin provisiones en el campo.",
    icono: "🍫",
    rareza: "comun",
  },
  {
    id: "fotografo-oficial",
    nombre: "Fotógrafo Oficial",
    descripcion: "Documentó la operación para el archivo histórico de KND.",
    icono: "📸",
    rareza: "comun",
  },
  {
    id: "jirafa-veloz-cu",
    nombre: "La Jirafa Más Veloz en Todo CU",
    descripcion: "Título honorífico otorgado tras una hazaña de velocidad que nadie se explica del todo.",
    icono: "🦒",
    rareza: "raro",
  },
];
