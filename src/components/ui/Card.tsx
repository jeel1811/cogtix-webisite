import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  padding?: "sm" | "md" | "lg";
}

const paddingStyles = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function Card({
  children,
  className = "",
  hover = true,
  glass = false,
  padding = "md",
}: CardProps) {
  const baseStyles = "rounded-2xl transition-all duration-300";

  const hoverStyles = hover
    ? "hover:-translate-y-1 hover:shadow-xl card-glow"
    : "";

  const bgStyles = glass
    ? "glass"
    : "bg-white border border-gray-200/60";

  return (
    <div className={`${baseStyles} ${bgStyles} ${hoverStyles} ${paddingStyles[padding]} ${className}`}>
      {children}
    </div>
  );
}
