"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--background)]/80 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <span className="font-semibold">
          Carlos Hernández
        </span>

        <div className="flex gap-6 text-sm text-[var(--muted)]">
          <a href="#about" className="hover:text-white">Sobre mí</a>
          <a href="#studies" className="hover:text-white">Estudios</a>
          <a href="#experience" className="hover:text-white">Experiencia</a>
          <a href="#contact" className="hover:text-white">Contacto</a>
        </div>

      </div>
    </nav>
  );
}
