import type { AnchorHTMLAttributes } from "react";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary";
}

const variantClasses: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  primary: "bg-[var(--primary)] text-black hover:brightness-110",
  secondary:
    "border border-white/15 bg-white/5 text-[var(--foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)]",
};

export default function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-[var(--primary)] focus-visible:outline-offset-4 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
