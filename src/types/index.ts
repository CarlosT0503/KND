// Tipos compartidos del Cuartel General KND.
// Todo el contenido real (agentes, operaciones, fotos) se define en src/data/
// y respeta estas formas. Cuando conectemos Supabase, estos tipos serán
// el contrato entre la base de datos y la interfaz.

export type EstadoOperacion = "completada" | "proxima" | "planeando";

export interface Agente {
  /** slug usado en la URL /agentes/[id] */
  id: string;
  numero: number;
  alias: string;
  especialidad: string;
  /** Texto tipo "expediente", en tono narrativo. */
  descripcion: string;
  armas: string[];
  /** Logros como texto corto, estilo ficha. */
  logrosDestacados: string[];
  /** ids de src/data/achievements.ts que pertenecen a este agente */
  logroIds: string[];
  /** frases / citas célebres del agente, para mostrar como lista de bullets */
  citas: string[];
  /** slugs de operaciones en las que participó */
  operacionSlugs: string[];
  /** sello estilo "TOP AGENT", "GENIUS", etc. */
  sello: string;
  /** clave de color temático, ver AGENTE_COLORES en data/agents.ts */
  color: "azul" | "verde" | "caqui" | "rojo" | "morado" | "amarillo";
  /** ruta de imagen en /public */
  avatar: string;
  activo: boolean;
}

export interface EquipoUtilizado {
  nombre: string;
  emoji: string;
}

export interface Operacion {
  /** slug usado en la URL /operaciones/[slug] */
  slug: string;
  nombre: string;
  /** fecha ISO, ej "2026-07-12" */
  fecha: string;
  /** fecha en formato legible ES, ej "12 de julio, 2026" */
  fechaLegible: string;
  lugar: string;
  tipo: string;
  estado: EstadoOperacion;
  /** ruta de la imagen de portada en /public */
  portada: string;
  descripcion: string;
  reporteMision?: string;
  bajas?: string;
  /** ids de agentes confirmados/participantes */
  agenteIds: string[];
  totalAgentesEquipo: number;
  equipoUtilizado?: EquipoUtilizado[];
}

export interface Logro {
  id: string;
  nombre: string;
  descripcion: string;
  icono: string;
  rareza: "comun" | "raro" | "legendario";
}

export interface FotoGaleria {
  id: string;
  src: string;
  alt: string;
  operacionSlug: string;
  /** grados de rotación para el efecto polaroid, ej -4, 3, 6 */
  rotacion: number;
  caption?: string;
}

export interface MensajeComm {
  id: string;
  hora: string;
  agenteNumero: number;
  texto: string;
}
