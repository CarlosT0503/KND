import Link from "next/link";

interface SectionHeaderProps {
  title: string;
  href?: string;
  hrefLabel?: string;
}

export default function SectionHeader({
  title,
  href,
  hrefLabel = "Ver todas",
}: SectionHeaderProps) {
  return (
    <div className="mb-4 flex items-center justify-between border-b border-knd-border pb-2">
      <h2 className="font-display text-xl tracking-wide text-knd-terminal sm:text-2xl">
        {title}
      </h2>
      {href && (
        <Link
          href={href}
          className="text-xs uppercase tracking-[0.15em] text-knd-terminal-dim transition-colors hover:text-knd-terminal"
        >
          {hrefLabel} →
        </Link>
      )}
    </div>
  );
}
