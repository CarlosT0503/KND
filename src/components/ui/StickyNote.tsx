import type { ReactNode } from "react";

interface StickyNoteProps {
  children: ReactNode;
  rotacion?: number;
  className?: string;
}

export default function StickyNote({
  children,
  rotacion = -3,
  className = "",
}: StickyNoteProps) {
  return (
    <div
      className={`relative bg-knd-yellow p-4 font-hand text-knd-ink shadow-[0_8px_18px_rgba(0,0,0,0.45)] ${className}`}
      style={{ transform: `rotate(${rotacion}deg)` }}
    >
      <span className="absolute -top-2.5 left-1/2 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-gradient-to-br from-red-400 to-knd-red-dark shadow" />
      {children}
    </div>
  );
}
