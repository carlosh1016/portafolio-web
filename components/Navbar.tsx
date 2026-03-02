"use client";

import { useEffect, useId, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const navLinkClassName =
    "relative text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors focus-visible:outline-none";

  const navLinks = (
    <>
      <a
        href="#about"
        className={navLinkClassName}
        onClick={() => setOpen(false)}
      >
        Sobre mí
      </a>
      <a
        href="#studies"
        className={navLinkClassName}
        onClick={() => setOpen(false)}
      >
        Estudios
      </a>
      <a
        href="#projects"
        className={navLinkClassName}
        onClick={() => setOpen(false)}
      >
        Proyectos
      </a>
      <a
        href="#experience"
        className={navLinkClassName}
        onClick={() => setOpen(false)}
      >
        Experiencia
      </a>
      <a
        href="#contact"
        className={navLinkClassName}
        onClick={() => setOpen(false)}
      >
        Contacto
      </a>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[var(--background)]/70 backdrop-blur supports-[backdrop-filter]:bg-[var(--background)]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex justify-between items-center">
        <a href="#hero" className="font-semibold tracking-tight hover:text-white transition-colors">
          Carlos Hernández
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks}
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div
        id={panelId}
        className={
          open
            ? "md:hidden border-t border-white/10 bg-[var(--background)]/80 backdrop-blur"
            : "hidden"
        }
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-col gap-3">
          {navLinks}
        </div>
      </div>
    </nav>
  );
}