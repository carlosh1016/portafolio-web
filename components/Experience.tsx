const experiences = [
  {
    role: "Practicante de Data Engineering",
    company: "Bodytech Colombia · Área de Experiencia al Cliente",
    period: "Abril 2026 – Octubre 2026 (en curso)",
    description:
      "Automatización de pipelines de datos con Python y n8n, consultas SQL sobre Redshift y PostgreSQL, análisis en Google Colab, reportes en Power BI e integración con APIs externas y Google Drive.",
    stack:
      "Python · SQL · Redshift · PostgreSQL · n8n · Power BI · Google Colab",
  },
  {
    role: "Desarrollador Backend en Formación",
    company: "Quantum Data Processing",
    period: "Junio 2024 – Febrero 2025",
    description:
      "Desarrollador backend en formación trabajando con el lenguaje Go, con enfoque en bases de datos: administración, migración y soporte. Una experiencia formativa y de aprendizaje.",
    stack: "Go · PostgreSQL · Linux",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="space-y-8">

      {/* Título */}
      <h2 className="text-3xl font-semibold tracking-tight">
        Experiencia
      </h2>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={`${exp.company}-${exp.role}`}
            className="bg-[var(--card)] border border-white/10 rounded-2xl p-8 space-y-4 hover:scale-[1.02] transition-transform duration-300"
          >
            {/* Rol + fechas */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h3 className="text-xl font-medium">{exp.role}</h3>
              <span className="text-sm text-[var(--muted)]">{exp.period}</span>
            </div>

            {/* Empresa */}
            <p className="text-sm text-[var(--muted)]">{exp.company}</p>

            {/* Descripción */}
            <p className="text-sm text-[var(--muted)] max-w-3xl leading-relaxed">
              {exp.description}
            </p>

            {/* Tecnologías */}
            <span className="text-sm text-[var(--primary)]">{exp.stack}</span>
          </div>
        ))}
      </div>

    </section>
  );
}
