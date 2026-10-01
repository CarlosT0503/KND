"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { agentes } from "@/data/agents";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/agentes", label: "Agentes" },
  { href: "/operaciones", label: "Operaciones" },
  { href: "/archivos", label: "Archivos" },
  { href: "/logros", label: "Logros" },
];

export default function Navbar() {
  const pathname = usePathname();
  const agenteSesion = agentes[0];

  return (
    <header className="sticky top-0 z-50 border-b border-knd-border bg-knd-black-soft/95 backdrop-blur">
      <div className="knd-grid-bg absolute inset-0 opacity-40 pointer-events-none" />
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center border-2 border-knd-terminal text-knd-terminal font-display text-lg">
            K
          </span>
          <span className="leading-none">
            <span className="block font-display text-2xl tracking-wide text-knd-yellow">
              KND
            </span>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-knd-terminal-dim">
              Cuartel General
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-xs uppercase tracking-[0.15em] transition-colors ${
                  isActive
                    ? "border-b-2 border-knd-terminal text-knd-terminal"
                    : "border-b-2 border-transparent text-knd-terminal-dim hover:text-knd-terminal"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href={`/agentes/${agenteSesion.id}`}
          className="flex items-center gap-2 border border-knd-border px-2 py-1.5 text-right hover:border-knd-terminal-dim"
        >
          <span className="hidden leading-none sm:block">
            <span className="block text-[9px] uppercase tracking-[0.2em] text-knd-terminal-dim">
              Agente
            </span>
            <span className="block font-display text-sm tracking-wide text-knd-terminal">
              Número {agenteSesion.numero}
            </span>
          </span>
          <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-knd-terminal-dim bg-knd-panel text-xs">
            <img
              src={agenteSesion.avatar}
              alt={`Número ${agenteSesion.numero}`}
              className="h-full w-full object-cover"
            />
          </span>
        </Link>
      </div>

      {/* Nav móvil */}
      <nav className="relative flex items-center gap-1 overflow-x-auto border-t border-knd-border px-2 py-1.5 md:hidden">
        {NAV_LINKS.map((link) => {
          const isActive =
            link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap px-3 py-1.5 text-[11px] uppercase tracking-[0.15em] ${
                isActive
                  ? "border border-knd-terminal text-knd-terminal"
                  : "border border-transparent text-knd-terminal-dim"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
