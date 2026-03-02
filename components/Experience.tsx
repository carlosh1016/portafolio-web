export default function Experience() {
  return (
    <section id="experience" className="space-y-8">

      {/* Título */}
      <h2 className="text-3xl font-semibold tracking-tight">
        Experiencia
      </h2>

      {/* Experiencia */}
      <div className="bg-[var(--card)] border border-white/10 rounded-2xl p-8 space-y-4 hover:scale-[1.02] transition-transform duration-300">

        {/* Rol + fechas */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <h3 className="text-xl font-medium">
            Desarrollador Backend en Formación
          </h3>

          <span className="text-sm text-[var(--muted)]">
            Jun 17 – Feb 28 · 10 meses
          </span>
        </div>

        {/* Empresa */}
        <p className="text-sm text-[var(--muted)]">
          QuantumData Processing
        </p>

        {/* Descripción */}
        <p className="text-sm text-[var(--muted)] max-w-3xl">
          Apoyo en el desarrollo y mantenimiento de aplicaciones backend,
          trabajando con lógica de negocio, bases de datos y servicios,
          siguiendo buenas prácticas y fundamentos clásicos de desarrollo
          de software.
        </p>

        {/* Tecnologías */}
        <span className="text-sm text-[var(--primary)]">
          Golang · PostgreSQL · Linux · Backend
        </span>
      </div>

    </section>
  );
}
