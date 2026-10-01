import Link from "next/link";
import type { Operacion } from "@/types";
import StampBadge from "@/components/ui/StampBadge";

export default function OperationCard({ operacion }: { operacion: Operacion }) {
  const completada = operacion.estado === "completada";

  return (
    <Link
      href={`/operaciones/${operacion.slug}`}
      className="group relative block overflow-hidden border border-knd-border bg-knd-panel shadow-[0_10px_24px_rgba(0,0,0,0.45)] transition-transform hover:-translate-y-1"
    >
      <div className="relative h-44 w-full overflow-hidden bg-knd-black-soft">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={operacion.portada}
          alt={`Portada de la operación ${operacion.nombre}`}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute right-2 top-2 rotate-6">
          <StampBadge
            color={completada ? "green" : "red"}
            className="bg-knd-black-soft/70 text-xs"
          >
            {completada ? "Completada" : "Próxima"}
          </StampBadge>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-display text-2xl tracking-wide text-knd-yellow">
          {operacion.nombre}
        </h3>
        <div className="mt-3 space-y-1 text-xs text-knd-terminal/80">
          <p>📅 {operacion.fechaLegible}</p>
          <p>
            🧑‍🤝‍🧑 Agentes: {operacion.agenteIds.length}/{operacion.totalAgentesEquipo}
          </p>
        </div>
        <span className="mt-4 inline-block text-xs uppercase tracking-[0.15em] text-knd-terminal-dim group-hover:text-knd-terminal">
          Ver reporte →
        </span>
      </div>
    </Link>
  );
}
