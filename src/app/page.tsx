import Link from "next/link";
import { agentes } from "@/data/agents";
import { getOperacionesCompletadas, getProximaOperacion } from "@/data/operations";
import { fotosDestacadas } from "@/data/gallery";
import TerminalPanel from "@/components/ui/TerminalPanel";
import StickyNote from "@/components/ui/StickyNote";
import PolaroidPhoto from "@/components/ui/PolaroidPhoto";
import SectionHeader from "@/components/ui/SectionHeader";
import HeroSection from "@/components/home/HeroSection";
import NextOperationCard from "@/components/home/NextOperationCard";
import CommsPanel from "@/components/home/CommsPanel";
import OperationCard from "@/components/operaciones/OperationCard";

export default function HomePage() {
  const ultimasOperaciones = getOperacionesCompletadas().slice(0, 2);
  const proximaOperacion = getProximaOperacion();
  const fotosRecientes = fotosDestacadas;
  const agentesActivos = agentes.filter((a) => a.activo);

  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-8 sm:px-6 lg:py-10">
      {/* Hero: terminal + bienvenida + próxima operación */}
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-[260px_1fr_300px]">
        <div className="flex flex-col gap-4">
          <TerminalPanel title="Sistema KND" cursor>
            <p>CONEXIÓN ESTABLECIDA</p>
            <p className="text-knd-terminal-glow">&gt;&gt; BIENVENIDO AGENTE</p>
            <p>&gt;&gt; HOY ES UN BUEN DÍA</p>
            <p>&gt;&gt; PARA SALVAR EL MUNDO.</p>
            <div className="mt-3 border-t border-knd-border pt-3">
              <p className="text-[10px] uppercase tracking-[0.2em] text-knd-terminal-dim">
                Agentes conectados
              </p>
              <p className="font-display text-3xl text-knd-terminal-glow">
                {agentesActivos.length} / {agentes.length}
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-knd-terminal-dim">
                Todos presentes. Todos importantes.
              </p>
            </div>
          </TerminalPanel>
          <StickyNote rotacion={-4} className="text-sm">
            <p className="font-bold uppercase">Regla #1:</p>
            <p>Obedecer a Carlos.</p>
          </StickyNote>
        </div>

        <HeroSection />

        <NextOperationCard operacion={proximaOperacion} />
      </section>

      {/* Últimas operaciones + galería reciente */}
      <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <SectionHeader
            title="Últimas Operaciones"
            href="/operaciones"
            hrefLabel="Ver todas"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {ultimasOperaciones.map((op) => (
              <OperationCard key={op.slug} operacion={op} />
            ))}
          </div>
        </div>
        <div>
          <SectionHeader
            title="Galería Reciente"
            href="/archivos"
            hrefLabel="Ver toda"
          />
          <div className="knd-corkboard grid grid-cols-2 place-items-center gap-6 border border-knd-border p-6">
            {fotosRecientes.map((foto) => (
              <PolaroidPhoto
                key={foto.id}
                src={foto.src}
                alt={foto.alt}
                rotacion={foto.rotacion}
                caption={foto.caption}
                className="w-full max-w-[180px]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Agentes activos + comunicaciones */}
      <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <SectionHeader title="Agentes Activos" href="/agentes" hrefLabel="Ver todos" />
          <div className="flex flex-wrap gap-4 border border-knd-border bg-knd-panel p-4">
            {agentesActivos.map((agente) => (
              <Link
                key={agente.id}
                href={`/agentes/${agente.id}`}
                className="flex w-20 flex-col items-center gap-1.5 text-center transition-transform hover:-translate-y-1"
              >
                <span className="h-16 w-16 overflow-hidden rounded-full border-2 border-knd-border bg-knd-black-soft">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={agente.avatar}
                    alt={`Número ${agente.numero}`}
                    className="h-full w-full object-cover"
                  />
                </span>
                <span className="text-[9px] uppercase tracking-wide text-knd-terminal-dim">
                  Agente
                </span>
                <span className="text-xs font-semibold text-knd-terminal">
                  Número {agente.numero}
                </span>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <SectionHeader title="Comunicaciones" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_170px]">
            <CommsPanel />
            <StickyNote
              rotacion={4}
              className="hidden items-center justify-center sm:flex"
            >
              <p className="text-center font-bold uppercase leading-relaxed">
                Planear
                <br />
                Ejecutar
                <br />
                Divertirse
                <br />
                Repetir
              </p>
            </StickyNote>
          </div>
        </div>
      </section>
    </div>
  );
}
