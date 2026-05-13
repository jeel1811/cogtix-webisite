import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "main" | "article";
  id?: string;
}

export default function Container({
  children,
  className = "",
  as: Tag = "div",
  id,
}: ContainerProps) {
  return (
    <Tag
      id={id}
      className={`mx-auto w-full max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] min-[1800px]:max-w-[1760px] px-4 sm:px-6 lg:px-8 2xl:px-12 min-[1800px]:px-14 ${className}`}
    >
      {children}
    </Tag>
  );
}
