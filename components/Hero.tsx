export default function Hero() {
  return (
    <section
      id="hero"
      className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >

      {/* Foto + Nombre */}
      <div className="flex items-center gap-6 sm:gap-8">

        {/* Foto */}
        <div className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border border-white/20 shrink-0">
          <img
            src="/images/perfil.jpeg"
            alt="Carlos Julián Hernández"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Nombre y rol */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Carlos Julián Hernández
          </h1>

          <h2 className="text-lg sm:text-xl text-[var(--muted)]">
            Backend Developer · Ingeniero de Datos · Ingeniero de IA · Estudiante de nuevas tecnologías
          </h2>
        </div>

      </div>

      {/* Subtexto + CTA */}
      <div className="space-y-6">
        <p className="max-w-xl text-[var(--muted)] leading-relaxed">
          Ingeniero de sistemas enfocado en backend, datos y automatización.
          Construyo pipelines, APIs y sistemas que funcionan.
        </p>

        <div className="flex gap-4">
          <a
            href="#projects"
            className="bg-[var(--primary)] text-black px-6 py-3 rounded-xl font-medium hover:brightness-110 transition"
          >
            Ver proyectos
          </a>
        </div>
      </div>
    </section>
  );
}
