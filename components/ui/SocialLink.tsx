"use client";

import type { ReactNode } from "react";

interface SocialLinkProps {
  icon: ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
  external?: boolean;
  ariaLabel?: string;
}

const baseClassName =
  "flex items-center gap-2 text-sm px-3 py-2 -mx-3 -my-2 rounded-lg hover:bg-white/5 hover:text-[var(--primary)] transition-colors cursor-pointer";

export default function SocialLink({
  icon,
  label,
  href,
  onClick,
  external = false,
  ariaLabel,
}: SocialLinkProps) {
  const content = (
    <>
      {icon}
      <span>{label}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={baseClassName}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={baseClassName}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
