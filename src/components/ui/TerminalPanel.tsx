import type { ReactNode } from "react";

interface TerminalPanelProps {
  title?: string;
  children: ReactNode;
  className?: string;
  cursor?: boolean;
}

export default function TerminalPanel({
  title = "SISTEMA KND",
  children,
  className = "",
  cursor = false,
}: TerminalPanelProps) {
  return (
    <div className={`border border-knd-border bg-knd-panel ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-knd-border bg-knd-black-soft px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-knd-red" />
        <span className="h-2.5 w-2.5 rounded-full bg-knd-yellow-dark" />
        <span className="h-2.5 w-2.5 rounded-full bg-knd-terminal-dim" />
        <span className="ml-2 text-[10px] uppercase tracking-[0.2em] text-knd-terminal-dim">
          {title}
        </span>
      </div>
      <div
        className={`space-y-1.5 p-4 text-sm leading-relaxed text-knd-terminal ${
          cursor ? "knd-cursor" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}
