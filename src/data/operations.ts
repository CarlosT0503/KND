import type { Operacion } from "@/types";

// DATOS MOCK — fechas y reportes narrativos aún por completar para varias
// operaciones (portadas y participantes sí son reales).
// Convención: el nombre de toda operación empieza con "Operación ".
// Las operaciones "proxima" o con fecha aún no confirmada usan
// fechaLegible = "Por Definir" y fecha = "" (no se usa para ordenar,
// solo las completadas con fecha real se ordenan por ella).
// El orden del arreglo importa: getProximaOperacion() devuelve la
// PRIMERA con estado "proxima", así que "Operación Bolos" va primero
// para que sea la que se muestra en el cartel de Inicio. También define
// el orden de las secciones en /archivos.
export const operaciones: Operacion[] = [
  {
    slug: "six-flags",
    nombre: "Operación Six Flags",
    fecha: "2026-07-12",
    fechaLegible: "12 de julio, 2026",
    lugar: "Six Flags México",
    tipo: "Diversión",
    estado: "completada",
    portada: "/galeria/Portada%20de%20Operaciones/Six%20Flags.jpg",
    descripcion:
      "Infiltración total en territorio de montañas rusas. Objetivo: sobrevivir a la fila de tres horas para la torre del susto sin perder la moral del equipo.",
    reporteMision:
      "Montañas rusas, comida cara y muchas risas. Misión exitosa. Sin bajas.",
    bajas: "Sin bajas",
    agenteIds: ["numero-1", "numero-2", "numero-5"],
    totalAgentesEquipo: 6,
    equipoUtilizado: [
      { nombre: "Gorra amiga", emoji: "🧢" },
      { nombre: "Snacks", emoji: "🍿" },
      { nombre: "Dinero", emoji: "💰" },
      { nombre: "Protector solar", emoji: "🧴" },
    ],
  },
  {
    slug: "gotcha",
    nombre: "Operación Gotcha",
    fecha: "2026-07-05",
    fechaLegible: "5 de julio, 2026",
    lugar: "Campo Gotcha, Zona Norte",
    tipo: "Combate táctico",
    estado: "completada",
    portada: "/galeria/Portada%20de%20Operaciones/Gotcha.jpg",
    descripcion:
      "Operación de combate simulado. El objetivo era capturar la bandera del equipo rival sin que Soporte se quedara sin snacks a mitad de la batalla.",
    reporteMision:
      "Balas de pintura, camuflaje improvisado y una emboscada que casi funciona. Un agente quedó fuera de combate temporalmente por una moradura de honor.",
    bajas: "1 baja leve (moradura de honor)",
    agenteIds: ["numero-2", "numero-6"],
    totalAgentesEquipo: 6,
    equipoUtilizado: [
      { nombre: "Careta", emoji: "🥽" },
      { nombre: "Overol", emoji: "🥼" },
      { nombre: "Munición", emoji: "🔴" },
      { nombre: "Agua", emoji: "💧" },
    ],
  },
  {
    slug: "carlosfest",
    nombre: "Operación CarlosFest",
    fecha: "",
    fechaLegible: "Por Definir",
    lugar: "Casa de Carlos",
    tipo: "Reunión / Fiesta",
    estado: "completada",
    portada: "/galeria/Miembros%20Oficiales%20de%20KND.jpeg",
    descripcion:
      "La reunión anual de todo el escuadrón en honor al comandante. Expediente fotográfico completo, reporte detallado pendiente de redactar.",
    agenteIds: ["numero-1", "numero-2", "numero-3", "numero-4"],
    totalAgentesEquipo: 6,
  },
  {
    slug: "rocodromo",
    nombre: "Operación Rocódromo",
    fecha: "",
    fechaLegible: "Por Definir",
    lugar: "Rocódromo",
    tipo: "Deporte / Aventura",
    estado: "completada",
    portada: "/galeria/Operacion%20Rocodromo/Roben%20el%20zapato%20de%20Yor.jpeg",
    descripcion:
      "Ascenso táctico a la pared de escalada. Se reportaron múltiples fallos de agarre y un zapato de Número 4 en grave peligro.",
    agenteIds: ["numero-1", "numero-3"],
    totalAgentesEquipo: 6,
  },
  {
    slug: "ecologico",
    nombre: "Operación Ecológico",
    fecha: "",
    fechaLegible: "Por Definir",
    lugar: "Por definir",
    tipo: "Ecológico",
    estado: "completada",
    portada: "/assets/operaciones/portada-ecologico.svg",
    descripcion:
      "Misión de conciencia ambiental del cuartel. Detalles de la operación aún clasificados.",
    agenteIds: ["numero-2", "numero-3"],
    totalAgentesEquipo: 6,
  },
  {
    slug: "dorada",
    nombre: "Operación Dorada",
    fecha: "",
    fechaLegible: "Por Definir",
    lugar: "Por definir",
    tipo: "Por definir",
    estado: "completada",
    portada: "/assets/operaciones/portada-dorada.svg",
    descripcion:
      "Operación de nombre en clave \"Dorada\". Reporte de misión pendiente de desclasificar.",
    agenteIds: ["numero-2"],
    totalAgentesEquipo: 6,
  },
  {
    slug: "coyote-vs-acme",
    nombre: "Operación Coyote vs ACME",
    fecha: "",
    fechaLegible: "Por Definir",
    lugar: "Por definir",
    tipo: "Persecución",
    estado: "completada",
    portada: "/galeria/Operacion%20Coyote%20vs%20ACME/Operacion%20Coyote%20vs%20ACME.jpeg",
    descripcion:
      "El eterno enfrentamiento entre el escuadrón y sus propios planes fallidos. Ningún coyote fue lastimado en el proceso.",
    agenteIds: ["numero-1", "numero-2", "numero-5"],
    totalAgentesEquipo: 6,
  },
  {
    slug: "elifest",
    nombre: "Operación Elifest",
    fecha: "",
    fechaLegible: "Por Definir",
    lugar: "Por definir",
    tipo: "Fiesta",
    estado: "completada",
    portada: "/galeria/Operacion%20Elifest/Operaci%C3%B3n%20Elifest.jpeg",
    descripcion:
      "Celebración oficial del Elifest. Registro fotográfico disponible, reporte completo pendiente.",
    agenteIds: ["numero-1", "numero-2", "numero-5", "numero-6"],
    totalAgentesEquipo: 6,
  },
  {
    slug: "examen-de-grado",
    nombre: "Operación Examen de Grado",
    fecha: "",
    fechaLegible: "Por Definir",
    lugar: "Universidad",
    tipo: "Supervivencia académica",
    estado: "completada",
    portada: "/galeria/Operacion%20Examen%20de%20Grado/Operacion%20Examen%20de%20Grado.jpeg",
    descripcion:
      "Misión de alto riesgo académico. Todos los agentes desplegados lograron sobrevivir al examen de grado.",
    agenteIds: ["numero-1", "numero-4"],
    totalAgentesEquipo: 6,
  },
  {
    slug: "barrio-de-los-sapos",
    nombre: "Operación Barrio de los Sapos",
    fecha: "",
    fechaLegible: "Por Definir",
    lugar: "Barrio de los Sapos",
    tipo: "Por definir",
    estado: "completada",
    portada: "/galeria/Operacion%20Barrio%20de%20los%20Sapos/Operaci%C3%B3n%20Barrio%20de%20los%20Sapos.jpeg",
    descripcion:
      "Expedición al Barrio de los Sapos. Reporte de misión y agentes participantes aún por confirmar.",
    agenteIds: [],
    totalAgentesEquipo: 6,
  },
  {
    slug: "bolos",
    nombre: "Operación Bolos",
    fecha: "",
    fechaLegible: "Por Definir",
    lugar: "Por definir",
    tipo: "Diversión",
    estado: "proxima",
    portada: "/galeria/Portada%20de%20Operaciones/Boliche.jpg",
    descripcion:
      "Misión de precisión: derribar la mayor cantidad de pinos posible sin que se note que Número 3 hace trampa con la bola ligera.",
    agenteIds: ["numero-1", "numero-2", "numero-3", "numero-4", "numero-5", "numero-6"],
    totalAgentesEquipo: 6,
  },
  {
    slug: "pista-de-hielo",
    nombre: "Operación Pista de Hielo",
    fecha: "",
    fechaLegible: "Por Definir",
    lugar: "Por definir",
    tipo: "Deporte de invierno",
    estado: "proxima",
    portada: "/galeria/Portada%20de%20Operaciones/Pista%20de%20hielo.jpg",
    descripcion:
      "Primer despliegue de KND sobre hielo. Riesgo de misión: alto. Nivel de dignidad al caer: variable.",
    agenteIds: ["numero-1", "numero-2", "numero-5", "numero-6"],
    totalAgentesEquipo: 6,
  },
  {
    slug: "escape-room",
    nombre: "Operación Escape Room",
    fecha: "",
    fechaLegible: "Por Definir",
    lugar: "Cámara Secreta, Centro",
    tipo: "Infiltración / Rompecabezas",
    estado: "proxima",
    portada: "/galeria/Portada%20de%20Operaciones/Escape%20Room.jpg",
    descripcion:
      "Objetivo: escapar de la cámara clasificada en menos de 60 minutos. Se sospecha que Número 2 ya investigó pistas por su cuenta, lo cual va contra el reglamento.",
    agenteIds: ["numero-1", "numero-2", "numero-5", "numero-6"],
    totalAgentesEquipo: 6,
  },
];

export function getOperacionPorSlug(slug: string): Operacion | undefined {
  return operaciones.find((o) => o.slug === slug);
}

export function getProximaOperacion(): Operacion | undefined {
  return operaciones.find((o) => o.estado === "proxima");
}

export function getOperacionesCompletadas(): Operacion[] {
  return operaciones
    .filter((o) => o.estado === "completada")
    .sort((a, b) => (a.fecha < b.fecha ? 1 : -1));
}
