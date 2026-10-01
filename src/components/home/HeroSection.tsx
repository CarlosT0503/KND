import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative h-full min-h-[380px] overflow-hidden border border-knd-border">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/cuartel/treehouse-hero.svg"
        alt="Ilustración de la casa del árbol, cuartel general de KND"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-knd-black via-knd-black/50 to-transparent" />
      <div className="knd-noise absolute inset-0" />
      <div className="relative flex h-full flex-col justify-center gap-4 p-6 sm:p-10">
        <p className="text-xs uppercase tracking-[0.3em] text-knd-terminal-dim">
          Bienvenido al
        </p>
        <h1 className="font-display text-5xl leading-[0.9] tracking-wide text-knd-yellow sm:text-6xl lg:text-7xl">
          CUARTEL
          <br />
          GENERAL
        </h1>
        <p className="max-w-sm text-sm text-knd-terminal/90 sm:text-base">
          Misiones planeadas. Reglamentos ignorados. Recuerdos clasificados
          para siempre.
        </p>
        <Link
          href="/operaciones"
          className="mt-2 inline-flex w-fit items-center gap-2 border-2 border-knd-terminal bg-knd-terminal/10 px-5 py-2.5 text-sm uppercase tracking-[0.15em] text-knd-terminal transition-colors hover:bg-knd-terminal hover:text-knd-black"
        >
          [ Abrir Tablero ]
        </Link>
      </div>
    </div>
  );
}
