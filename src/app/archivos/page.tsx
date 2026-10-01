import type { Metadata } from "next";
import Link from "next/link";
import WindowFrame from "@/components/ui/WindowFrame";
import PolaroidPhoto from "@/components/ui/PolaroidPhoto";
import StickyNote from "@/components/ui/StickyNote";
import { operaciones } from "@/data/operations";
import { getFotosPorOperacion } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Archivos // KND",
  description: "Tablero de fotografías y recuerdos de KND.",
};

export default function ArchivosPage() {
  const operacionesConFotos = operaciones.filter(
    (o) => getFotosPorOperacion(o.slug).length > 0,
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-10">
      <WindowFrame title="Archivos" subtitle="Tablero de recuerdos de KND">
        <div className="space-y-12 pt-2">
          {operacionesConFotos.map((op) => {
            const fotos = getFotosPorOperacion(op.slug);
            return (
              <div key={op.slug}>
                <div className="mb-3 flex items-center justify-between">
                  <h2 className="font-display text-2xl tracking-wide text-knd-yellow">
                    {op.nombre}
                  </h2>
                  <Link
                    href={`/operaciones/${op.slug}`}
                    className="text-xs uppercase tracking-[0.15em] text-knd-terminal-dim hover:text-knd-terminal"
                  >
                    Ver expediente →
                  </Link>
                </div>
                <div className="knd-corkboard flex flex-wrap items-start gap-8 border border-knd-border p-6 sm:p-10">
                  {fotos.map((foto) => (
                    <PolaroidPhoto
                      key={foto.id}
                      src={foto.src}
                      alt={foto.alt}
                      rotacion={foto.rotacion}
                      caption={foto.caption}
                      className="w-40 sm:w-48"
                    />
                  ))}
                </div>
              </div>
            );
          })}

          <StickyNote rotacion={-2} className="mx-auto w-fit">
            <p className="text-center leading-relaxed">
              Más fotos próximamente...
              <br />
              ¡sube las tuyas, agente!
            </p>
          </StickyNote>
        </div>
      </WindowFrame>
    </div>
  );
}
