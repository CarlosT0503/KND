import Link from "next/link";
import type { Agente } from "@/types";
import StampBadge from "@/components/ui/StampBadge";

const COLOR_BORDER: Record<Agente["color"], string> = {
  azul: "border-t-sky-500",
  verde: "border-t-lime-600",
  caqui: "border-t-yellow-700",
  rojo: "border-t-orange-600",
  morado: "border-t-purple-500",
  amarillo: "border-t-amber-400",
};

export default function AgentCard({ agente }: { agente: Agente }) {
  return (
    <Link
      href={`/agentes/${agente.id}`}
      className={`knd-paper group relative block border-t-8 p-4 shadow-[0_10px_20px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-1 ${COLOR_BORDER[agente.color]}`}
    >
      <div className="absolute -top-3 right-3 rotate-6">
        <StampBadge
          color={agente.numero % 2 === 0 ? "green" : "red"}
          className="px-2 py-0.5 text-[10px]"
        >
          {agente.sello}
        </StampBadge>
      </div>
      <div className="flex items-center gap-3 border-b border-knd-paper-darker/60 pb-3">
        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-knd-ink/20 bg-knd-black-soft">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={agente.avatar}
            alt={`Número ${agente.numero}`}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-knd-ink/60">
            Agente
          </p>
          <h3 className="font-display text-2xl leading-none text-knd-ink">
            Número {agente.numero}
          </h3>
        </div>
      </div>
      <dl className="mt-3 space-y-1.5 text-xs text-knd-ink/80">
        <div className="flex gap-1">
          <dt className="shrink-0 font-semibold uppercase tracking-wide">
            Especialidad:
          </dt>
          <dd>{agente.especialidad}</dd>
        </div>
        <div className="flex gap-1">
          <dt className="shrink-0 font-semibold uppercase tracking-wide">Armas:</dt>
          <dd>{agente.armas.join(", ")}</dd>
        </div>
        <div className="flex gap-1">
          <dt className="shrink-0 font-semibold uppercase tracking-wide">Logros:</dt>
          <dd>{agente.logrosDestacados.join(", ")}</dd>
        </div>
      </dl>
    </Link>
  );
}
