import type { Agente } from "@/types";

// Contenido real del equipo. El id de cada agente es el slug de /agentes/[id]
// y se mantiene estable ("numero-6") aunque su número de placa haya cambiado
// a 60 — así no se rompen enlaces ni datos ya referenciados.
export const agentes: Agente[] = [
  {
    id: "numero-1",
    numero: 1,
    alias: "Líder",
    especialidad: "Sexo",
    descripcion:
      "Fundador autoproclamado del cuartel. Toma decisiones rápido, a veces demasiado rápido. Su megáfono es legendario y nadie sabe de dónde lo saca cada operación.",
    armas: ["Tus ojos, bebé"],
    logrosDestacados: ["Veterano de Six Flags", "Sobrevivió al Gotcha"],
    logroIds: ["veterano-six-flags", "sobrevivio-gotcha"],
    citas: [
      "Uf, qué bendición tenerlo como líder",
      "No pondré nada más en este bullet porque lo escribí yo",
      "Aliviánenme con el siguiente vol de Kaguya Sama, paro",
    ],
    operacionSlugs: [
      "carlosfest",
      "six-flags",
      "examen-de-grado",
      "elifest",
      "coyote-vs-acme",
      "rocodromo",
    ],
    sello: "TOP AGENT",
    color: "azul",
    avatar: "/galeria/Agentes/No%201.jpg",
    activo: true,
  },
  {
    id: "numero-2",
    numero: 2,
    alias: "El Cerebro",
    especialidad: "La Chamba",
    descripcion:
      "Planea cada operación con la precisión de quien ha visto demasiados documentales de espías. Siempre tiene un plan B, C y D escritos en una libreta que no suelta. En esencia, el piloto del grupo.",
    armas: ["Matemóvil", "Shapsky"],
    logrosDestacados: ["Veterano de Six Flags", "Sobrevivió al Gotcha"],
    logroIds: ["veterano-six-flags", "sobrevivio-gotcha"],
    citas: [
      "La rodilla más fuerte de este lado del mundo",
      "SHAPSKY",
      "En esencia el piloto del grupo",
    ],
    operacionSlugs: [
      "carlosfest",
      "gotcha",
      "six-flags",
      "ecologico",
      "dorada",
      "coyote-vs-acme",
      "elifest",
    ],
    sello: "GENIUS",
    color: "verde",
    avatar: "/galeria/Agentes/No%202.jpg",
    activo: true,
  },
  {
    id: "numero-3",
    numero: 3,
    alias: "Fuerza",
    especialidad: "Esquivar tirolesas",
    descripcion:
      "La línea de defensa del equipo. Carga las mochilas de todos sin quejarse y una vez levantó una nevera entera sin ayuda. Nadie ha confirmado si eso fue necesario. Es, oficialmente, la maestra.",
    armas: ["Erick", "Rodilleras"],
    logrosDestacados: ["Nunca Abandones a un Agente", "Fotógrafo Oficial"],
    logroIds: ["primera-operacion", "nunca-abandona", "fotografo-oficial"],
    citas: [
      "La Maestra",
      "Alch lo de cada quién da buenos regalos",
      "Renegada del vóleibol",
    ],
    operacionSlugs: ["carlosfest", "rocodromo", "ecologico"],
    sello: "TANQUE",
    color: "caqui",
    avatar: "/galeria/Agentes/No%203.jpg",
    activo: true,
  },
  {
    id: "numero-4",
    numero: 4,
    alias: "Velocidad",
    especialidad: "Data",
    descripcion:
      "Siempre es el primero en llegar a todo: a la fila, al punto de encuentro, a los snacks. Sus patines viven en la cajuela de alguien del equipo, permanentemente. Y sí, hace trampa con la bola ligera en los bolos.",
    armas: ["JJ", "Yor"],
    logrosDestacados: ["La Jirafa Más Veloz en Todo CU"],
    logroIds: ["jirafa-veloz-cu", "sobrevivio-gotcha", "mvp-mision"],
    citas: ["SexyBoy", "SadBoy", "Best Duo Ever"],
    operacionSlugs: ["examen-de-grado", "carlosfest"],
    sello: "ZOOM",
    color: "rojo",
    avatar: "/galeria/Agentes/No%204.jpg",
    activo: true,
  },
  {
    id: "numero-5",
    numero: 5,
    alias: "Táctico",
    especialidad: "Planes que sí salen",
    descripcion:
      "El GPS humano del cuartel. Nunca se pierde, siempre sabe dónde está el baño más cercano y calcula tiempos de traslado con una exactitud sospechosa. Sin ella, KND se acaba.",
    armas: ["Batería", "Grado de maestría"],
    logrosDestacados: ["MVP de la Misión"],
    logroIds: ["veterano-six-flags", "mvp-mision"],
    citas: [
      "Sin ella KND se acaba",
      "Novia de *****",
      "Actualmente aumentando sus niveles de poder",
    ],
    operacionSlugs: ["elifest", "coyote-vs-acme", "six-flags"],
    sello: "ESTRATEGA",
    color: "morado",
    avatar: "/galeria/Agentes/No%205.jpg",
    activo: true,
  },
  {
    id: "numero-6",
    numero: 60,
    alias: "Soporte",
    especialidad: "Procesos Estocásticos",
    descripcion:
      "La mochila andante del equipo: botiquín, snacks, cargadores, todo. Si algo hace falta a mitad de misión, Soporte ya lo tenía guardado desde antes.",
    armas: ["Lobobici"],
    logrosDestacados: ["Nunca Abandones a un Agente", "Primera Operación"],
    logroIds: ["nunca-abandona", "primera-operacion"],
    citas: [
      "Ese we está cagado",
      "BULMAROOO",
      "TODOS SABEMOS PARA QUÉ SE METIÓ A FRANCÉS",
    ],
    operacionSlugs: ["gotcha", "elifest"],
    sello: "MVP",
    color: "amarillo",
    avatar: "/galeria/Agentes/No%2060.png",
    activo: true,
  },
];

export function getAgentePorId(id: string): Agente | undefined {
  return agentes.find((a) => a.id === id);
}
