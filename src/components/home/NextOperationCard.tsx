import Link from "next/link";
import type { Operacion } from "@/types";
import StampBadge from "@/components/ui/StampBadge";

export default function NextOperationCard({
  operacion,
}: {
  operacion?: Operacion;
}) {
  if (!operacion) {
    return (
      <div className="knd-paper flex h-full flex-col items-center justify-center gap-2 border border-knd-paper-darker p-6 text-center">
        <p className="font-display text-xl text-knd-ink">
          Sin operaciones programadas
        </p>
        <p className="text-xs text-knd-ink/70">
          El cuartel está en modo standby.
        </p>
      </div>
    );
  }

  return (
    <div className="knd-paper relative flex h-full flex-col gap-4 border border-knd-paper-darker p-5">
      <div className="flex items-start justify-between gap-2">
        <p className="font-display text-lg tracking-wide text-knd-ink/80">
          Próxima Operación
        </p>
        <StampBadge color="red" className="rotate-6 text-[10px]">
          Top Secret
        </StampBadge>
      </div>
      <h3 className="font-display text-3xl leading-none text-knd-ink">
        {operacion.nombre}
      </h3>
      <dl className="space-y-1.5 text-sm text-knd-ink/80">
        <div className="flex items-center gap-2">
          <span>📅</span>
          <dd>{operacion.fechaLegible}</dd>
        </div>
        <div className="flex items-center gap-2">
          <span>📍</span>
          <dd>{operacion.lugar}</dd>
        </div>
        <div className="flex items-center gap-2">
          <span>👥</span>
          <dd>{operacion.agenteIds.length} agentes confirmados</dd>
        </div>
      </dl>
      <Link
        href={`/operaciones/${operacion.slug}`}
        className="mt-auto inline-flex w-fit items-center gap-1 border-b-2 border-knd-ink/60 pb-0.5 text-xs uppercase tracking-[0.15em] text-knd-ink hover:border-knd-ink"
      >
        Ver detalles →
      </Link>
    </div>
  );
}
