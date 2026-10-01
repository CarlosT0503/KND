import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getOperacionPorSlug } from "@/data/operations";
import { agentes } from "@/data/agents";
import { getFotosPorOperacion } from "@/data/gallery";
import WindowFrame from "@/components/ui/WindowFrame";
import StampBadge from "@/components/ui/StampBadge";
import PolaroidPhoto from "@/components/ui/PolaroidPhoto";

// Nota: esta ruta se renderiza dinámicamente (sin generateStaticParams).
// Next.js 16.3 + Turbopack tiene un bug conocido al prerenderizar rutas
// dinámicas en build ("Expected workStore to be initialized"). Como los
// datos serán reales/dinámicos (Supabase) más adelante de todas formas,
// renderizar on-demand es la opción correcta aquí, no solo un workaround.
type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const operacion = getOperacionPorSlug(slug);
  return {
    title: operacion
      ? `Operación: ${operacion.nombre} // KND`
      : "Operación no encontrada // KND",
  };
}

export default async function OperacionDetailPage({ params }: Params) {
  const { slug } = await params;
  const operacion = getOperacionPorSlug(slug);
  if (!operacion) notFound();

  const completada = operacion.estado === "completada";
  const agentesParticipantes = agentes.filter((a) =>
    operacion.agenteIds.includes(a.id),
  );
  const fotos = getFotosPorOperacion(operacion.slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-10">
      <WindowFrame
        title={operacion.nombre}
        subtitle={operacion.tipo}
        action={
          <Link
            href="/operaciones"
            className="text-xs uppercase tracking-[0.15em] text-knd-terminal-dim hover:text-knd-terminal"
          >
            ← Volver
          </Link>
        }
      >
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[340px_1fr]">
          <div className="space-y-4">
            <div className="relative overflow-hidden border border-knd-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={operacion.portada}
                alt={`Portada de la operación ${operacion.nombre}`}
                className="h-56 w-full object-cover"
              />
              <div className="absolute right-2 top-2 rotate-6">
                <StampBadge color={completada ? "green" : "red"}>
                  {completada ? "Completada" : "Próxima"}
                </StampBadge>
              </div>
            </div>
            <dl className="space-y-2 border border-knd-border bg-knd-panel p-4 text-sm">
              <div className="flex justify-between gap-2">
                <dt className="uppercase tracking-wide text-knd-terminal-dim">
                  Fecha:
                </dt>
                <dd className="text-knd-terminal">{operacion.fechaLegible}</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="uppercase tracking-wide text-knd-terminal-dim">
                  Lugar:
                </dt>
                <dd className="text-knd-terminal">{operacion.lugar}</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="uppercase tracking-wide text-knd-terminal-dim">
                  Tipo:
                </dt>
                <dd className="text-knd-terminal">{operacion.tipo}</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="uppercase tracking-wide text-knd-terminal-dim">
                  Estado:
                </dt>
                <dd
                  className={
                    completada ? "text-knd-terminal-glow" : "text-knd-yellow"
                  }
                >
                  {completada ? "Completada" : "Próxima"}
                </dd>
              </div>
            </dl>
            <div>
              <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-knd-terminal-dim">
                Agentes
              </p>
              <div className="flex flex-wrap gap-2">
                {agentesParticipantes.map((a) => (
                  <Link
                    key={a.id}
                    href={`/agentes/${a.id}`}
                    title={`Número ${a.numero}`}
                    className="h-10 w-10 overflow-hidden rounded-full border-2 border-knd-border hover:border-knd-terminal-dim"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={a.avatar}
                      alt={`Número ${a.numero}`}
                      className="h-full w-full object-cover"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="font-display text-xl tracking-wide text-knd-terminal">
                Descripción de la misión
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-knd-terminal/85">
                {operacion.descripcion}
              </p>
            </div>

            {operacion.reporteMision && (
              <div className="knd-paper border border-knd-paper-darker p-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-knd-ink/55">
                  Reporte de misión
                </p>
                <p className="mt-1 font-hand text-lg leading-snug text-knd-ink">
                  {operacion.reporteMision}
                </p>
                {operacion.bajas && (
                  <p className="mt-2 text-xs uppercase tracking-wide text-knd-ink/60">
                    {operacion.bajas}
                  </p>
                )}
              </div>
            )}

            {fotos.length > 0 && (
              <div>
                <h2 className="font-display text-xl tracking-wide text-knd-terminal">
                  Galería de la misión
                </h2>
                <div className="knd-corkboard mt-2 grid grid-cols-2 place-items-center gap-6 border border-knd-border p-6 sm:grid-cols-3">
                  {fotos.map((foto) => (
                    <PolaroidPhoto
                      key={foto.id}
                      src={foto.src}
                      alt={foto.alt}
                      rotacion={foto.rotacion}
                      caption={foto.caption}
                      className="w-full max-w-[160px]"
                    />
                  ))}
                </div>
              </div>
            )}

            {operacion.equipoUtilizado && operacion.equipoUtilizado.length > 0 && (
              <div>
                <h2 className="font-display text-xl tracking-wide text-knd-terminal">
                  Equipo utilizado
                </h2>
                <div className="mt-2 flex flex-wrap gap-3">
                  {operacion.equipoUtilizado.map((item) => (
                    <div
                      key={item.nombre}
                      className="flex w-20 flex-col items-center gap-1 border border-knd-border bg-knd-panel p-3 text-center"
                    >
                      <span className="text-2xl">{item.emoji}</span>
                      <span className="text-[10px] uppercase tracking-wide text-knd-terminal-dim">
                        {item.nombre}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </WindowFrame>
    </div>
  );
}
