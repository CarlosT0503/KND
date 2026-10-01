import type { ReactNode } from "react";

interface StampBadgeProps {
  children: ReactNode;
  color?: "red" | "green";
  className?: string;
}

export default function StampBadge({
  children,
  color = "red",
  className = "",
}: StampBadgeProps) {
  const colorClasses =
    color === "red"
      ? "border-knd-red text-knd-red"
      : "border-knd-green-stamp text-knd-green-stamp";

  return (
    <span className={`knd-stamp ${colorClasses} ${className}`}>
      {children}
    </span>
  );
}
