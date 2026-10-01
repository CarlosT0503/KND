import type { ReactNode } from "react";

interface WindowFrameProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export default function WindowFrame({
  title,
  subtitle,
  action,
  children,
  className = "",
}: WindowFrameProps) {
  return (
    <div className={`relative border border-knd-border bg-knd-panel ${className}`}>
      <div className="flex flex-col gap-3 border-b border-knd-border bg-knd-black-soft px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center border-2 border-knd-red text-xs font-bold text-knd-red">
          ✕
        </span>
        <div className="order-first text-center sm:order-none sm:flex-1">
          <h1 className="font-display text-3xl tracking-wide text-knd-yellow sm:text-4xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-knd-terminal-dim">
              {subtitle}
            </p>
          )}
        </div>
        <div className="flex shrink-0 items-center justify-end gap-3">
          {action}
          <span className="flex h-6 w-6 items-center justify-center border-2 border-knd-red text-xs font-bold text-knd-red">
            ✕
          </span>
        </div>
      </div>
      {children && <div className="p-4 sm:p-6">{children}</div>}
    </div>
  );
}
