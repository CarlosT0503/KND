import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getAgentePorId } from "@/data/agents";
import { operaciones } from "@/data/operations";
import { logros } from "@/data/achievements";
import WindowFrame from "@/components/ui/WindowFrame";
import StampBadge from "@/components/ui/StampBadge";

// Nota: esta ruta se renderiza dinámicamente (sin generateStaticParams).
// Next.js 16.3 + Turbopack tiene un bug conocido al prerenderizar rutas
// dinámicas en build ("Expected workStore to be initialized"). Como los
// datos serán reales/dinámicos (Supabase) más adelante de todas formas,
// renderizar on-demand es la opción correcta aquí, no solo un workaround.
type Params = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  const agente = getAgentePorId(id);
  return {
    title: agente
      ? `Número ${agente.numero} // KND`
      : "Agente no encontrado // KND",
  };
}

export default async function AgenteDetailPage({ params }: Params) {
  const { id } = await params;
  const agente = getAgentePorId(id);
  if (!agente) notFound();

  const logrosAgente = logros.filter((l) => agente.logroIds.includes(l.id));
  const operacionesAgente = operaciones.filter((o) =>
    agente.operacionSlugs.includes(o.slug),
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-10">
      <WindowFrame
        title={`Número ${agente.numero}`}
        subtitle="Expediente clasificado"
        action={
          <Link
            href="/agentes"
            className="text-xs uppercase tracking-[0.15em] text-knd-terminal-dim hover:text-knd-terminal"
          >
            ← Volver
          </Link>
        }
      >
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
          <div className="knd-paper relative border border-knd-paper-darker p-5">
            <div className="absolute -top-3 right-4 rotate-6">
              <StampBadge
                color={agente.numero % 2 === 0 ? "green" : "red"}
                className="text-[10px]"
              >
                {agente.sello}
              </StampBadge>
            </div>
            <div className="mx-auto h-32 w-32 overflow-hidden rounded-full border-4 border-knd-ink/15 bg-knd-black-soft">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={agente.avatar}
                alt={`Número ${agente.numero}`}
                className="h-full w-full object-cover"
              />
            </div>
            <dl className="mt-4 space-y-2.5 text-sm text-knd-ink/85">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.2em] text-knd-ink/55">
                  Especialidad
                </dt>
                <dd className="font-semibold">{agente.especialidad}</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.2em] text-knd-ink/55">
                  Armas / equipo
                </dt>
                <dd>{agente.armas.join(", ")}</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.2em] text-knd-ink/55">
                  Estado
                </dt>
                <dd>{agente.activo ? "Activo" : "Inactivo"}</dd>
              </div>
            </dl>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="font-display text-xl tracking-wide text-knd-terminal">
                Reporte del expediente
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-knd-terminal/85">
                {agente.descripcion}
              </p>
              {agente.citas.length > 0 && (
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm italic leading-relaxed text-knd-terminal/85">
                  {agente.citas.map((cita, i) => (
                    <li key={i}>&ldquo;{cita}&rdquo;</li>
                  ))}
                </ul>
              )}
            </div>

            {logrosAgente.length > 0 && (
              <div>
                <h2 className="font-display text-xl tracking-wide text-knd-terminal">
                  Logros
                </h2>
                <div className="mt-2 flex flex-wrap gap-2">
                  {logrosAgente.map((l) => (
                    <span
                      key={l.id}
                      className="flex items-center gap-1.5 border border-knd-border bg-knd-panel px-2.5 py-1.5 text-xs text-knd-terminal"
                    >
                      <span>{l.icono}</span> {l.nombre}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {operacionesAgente.length > 0 && (
              <div>
                <h2 className="font-display text-xl tracking-wide text-knd-terminal">
                  Operaciones
                </h2>
                <ul className="mt-2 space-y-1.5">
                  {operacionesAgente.map((op) => (
                    <li key={op.slug}>
                      <Link
                        href={`/operaciones/${op.slug}`}
                        className="text-sm text-knd-terminal/85 underline decoration-knd-terminal-dim underline-offset-4 hover:text-knd-terminal"
                      >
                        {op.nombre} — {op.fechaLegible}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </WindowFrame>
    </div>
  );
}
