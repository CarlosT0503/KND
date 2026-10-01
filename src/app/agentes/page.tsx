import type { Metadata } from "next";
import WindowFrame from "@/components/ui/WindowFrame";
import AgentCard from "@/components/agentes/AgentCard";
import { agentes } from "@/data/agents";

export const metadata: Metadata = {
  title: "Agentes // KND",
  description: "Expedientes de los agentes de KND.",
};

export default function AgentesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-10">
      <WindowFrame title="Agentes" subtitle="Conoce al equipo">
        <div className="grid grid-cols-1 gap-6 pt-2 sm:grid-cols-2 lg:grid-cols-3">
          {agentes.map((agente) => (
            <AgentCard key={agente.id} agente={agente} />
          ))}
        </div>
      </WindowFrame>
    </div>
  );
}
