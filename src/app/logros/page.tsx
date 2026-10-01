import type { Metadata } from "next";
import Link from "next/link";
import WindowFrame from "@/components/ui/WindowFrame";
import { logros } from "@/data/achievements";
import { agentes } from "@/data/agents";
import type { Logro } from "@/types";

export const metadata: Metadata = {
  title: "Logros // KND",
  description: "Sistema de logros y reconocimientos de KND.",
};

const RAREZA_LABEL: Record<Logro["rareza"], string> = {
  comun: "Común",
  raro: "Raro",
  legendario: "Legendario",
};

const RAREZA_COLOR: Record<Logro["rareza"], string> = {
  comun: "border-knd-border text-knd-terminal-dim",
  raro: "border-sky-500/60 text-sky-400",
  legendario: "border-knd-yellow text-knd-yellow",
};

export default function LogrosPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-10">
      <WindowFrame title="Logros" subtitle="Reconocimientos del cuartel">
        <div className="grid grid-cols-1 gap-5 pt-2 sm:grid-cols-2 lg:grid-cols-3">
          {logros.map((logro) => {
            const agentesConLogro = agentes.filter((a) =>
              a.logroIds.includes(logro.id),
            );
            return (
              <div
                key={logro.id}
                className={`flex flex-col gap-3 border-2 bg-knd-panel p-4 ${RAREZA_COLOR[logro.rareza]}`}
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-current text-2xl">
                    {logro.icono}
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.2em]">
                    {RAREZA_LABEL[logro.rareza]}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-xl tracking-wide text-knd-terminal">
                    {logro.nombre}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-knd-terminal/75">
                    {logro.descripcion}
                  </p>
                </div>
                {agentesConLogro.length > 0 && (
                  <div className="mt-auto flex flex-wrap gap-x-3 gap-y-1 border-t border-knd-border pt-2">
                    {agentesConLogro.map((agente) => (
                      <Link
                        key={agente.id}
                        href={`/agentes/${agente.id}`}
                        className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wide text-knd-terminal-dim hover:text-knd-terminal"
                      >
                        Desbloqueado por Número {agente.numero} →
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </WindowFrame>
    </div>
  );
}
