import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "outline" | "teal" | "navy";
  className?: string;
}

const variantStyles = {
  default: "bg-blue-500/10 text-blue-500",
  outline: "border border-blue-500/30 text-blue-500",
  teal: "bg-teal-500/10 text-teal-500",
  navy: "bg-navy-700 text-white",
};

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
