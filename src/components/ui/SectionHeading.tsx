interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
  className?: string;
  compact?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  light = false,
  className = "",
  compact = false,
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={`${compact ? "max-w-2xl mb-8 md:mb-10" : "max-w-3xl mb-12 md:mb-16"} ${alignmentClasses[align]} ${className}`}>
      {badge && (
        <span className={`inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-500 ${compact ? "text-[0.625rem]" : "text-xs"} font-semibold uppercase tracking-widest`}>
          {badge}
        </span>
      )}
      <h2
        className={`${compact ? "text-2xl sm:text-3xl lg:text-4xl" : "text-3xl sm:text-4xl lg:text-5xl"} font-bold tracking-tight leading-tight ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 ${compact ? "text-sm sm:text-base" : "text-base sm:text-lg"} leading-relaxed ${
            light ? "text-gray-300" : "text-gray-500"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
