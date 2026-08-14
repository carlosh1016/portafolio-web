interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "highlight";
  padded?: boolean;
}

const variantClasses: Record<NonNullable<CardProps["variant"]>, string> = {
  default: "bg-white/5 border border-white/10 hover:border-[var(--primary)]",
  highlight: "bg-[var(--primary)]/10 border border-[var(--primary)]/20",
};

export default function Card({
  children,
  className = "",
  variant = "default",
  padded = true,
}: CardProps) {
  return (
    <div
      className={`rounded-2xl transition-colors duration-300 ${variantClasses[variant]} ${
        padded ? "p-8" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
