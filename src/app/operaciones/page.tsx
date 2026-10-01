import type { Metadata } from "next";
import WindowFrame from "@/components/ui/WindowFrame";
import SectionHeader from "@/components/ui/SectionHeader";
import OperationCard from "@/components/operaciones/OperationCard";
import { operaciones } from "@/data/operations";

export const metadata: Metadata = {
  title: "Operaciones // KND",
  description: "Bitácora de operaciones y salidas de KND.",
};

export default function OperacionesPage() {
  const proximas = operaciones.filter((o) => o.estado === "proxima");
  const completadas = [...operaciones]
    .filter((o) => o.estado === "completada")
    .sort((a, b) => (a.fecha < b.fecha ? 1 : -1));

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-10">
      <WindowFrame title="Operaciones" subtitle="Bitácora de misiones KND">
        <div className="space-y-10 pt-2">
          {proximas.length > 0 && (
            <div>
              <SectionHeader title="Próximas" />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {proximas.map((op) => (
                  <OperationCard key={op.slug} operacion={op} />
                ))}
              </div>
            </div>
          )}
          <div>
            <SectionHeader title="Completadas" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {completadas.map((op) => (
                <OperationCard key={op.slug} operacion={op} />
              ))}
            </div>
          </div>
        </div>
      </WindowFrame>
    </div>
  );
}
