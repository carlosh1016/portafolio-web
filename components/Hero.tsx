export default function Hero() {
  return (
    <section
      id="hero"
      className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >

      {/* Foto + Nombre */}
      <div className="flex items-center gap-8">
        
        {/* Foto */}
        <div className="w-38 h-38 md:w-50 md:h-50 rounded-full overflow-hidden border border-white/20 shrink-0">
          <img
            src="/profile.jpg"
            alt="Carlos Hernández"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Nombre y rol */}
        <div className="space-y-2">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Carlos Hernández
          </h1>

          <h2 className="text-xl text-[var(--muted)]">
            Backend Developer · Ingeniería de Sistemas
          </h2>
        </div>

      </div>

      <p className="max-w-xl text-[var(--muted)]">
        Portafolio personal de Carlos Hernández.
      </p>

      <div className="flex gap-4 pt-4">
        <a
          href="#projects"
          className="bg-[var(--primary)] text-black px-6 py-3 rounded-xl font-medium hover:brightness-110 transition"
        >
          Ver proyectos
        </a>
      </div>
    </section>
  );
}
