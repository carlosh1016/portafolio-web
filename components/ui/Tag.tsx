interface TagProps {
  children: React.ReactNode;
  accent?: boolean;
}

export default function Tag({ children, accent = false }: TagProps) {
  return (
    <span
      className={`px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 border border-white/10 ${
        accent ? "text-[var(--primary)]" : "text-[var(--muted)]"
      }`}
    >
      {children}
    </span>
  );
}
