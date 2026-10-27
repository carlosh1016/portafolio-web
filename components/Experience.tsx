import SectionTitle from "./ui/SectionTitle";
import Tag from "./ui/Tag";

const experiences = [
  {
    role: "Practicante de Data Engineering",
    company: "Bodytech Colombia · Experiencia al Cliente",
    period: "Abr 2026 – Actualidad",
    current: true,
    highlights: [
      "Automatización de pipelines de datos con Python y n8n, integrados con APIs externas y Google Drive.",
      "Consultas SQL sobre Redshift y PostgreSQL y análisis en Google Colab.",
      "Reportes en Power BI para el área de Experiencia al Cliente.",
    ],
    stack: ["Python", "SQL", "Redshift", "PostgreSQL", "n8n", "Power BI"],
  },
  {
    role: "Desarrollador Backend (en formación)",
    company: "Quantum Data Processing",
    period: "Jun 2024 – Feb 2025",
    current: false,
    highlights: [
      "Desarrollo backend con Go.",
      "Administración, migración y soporte de bases de datos PostgreSQL en entornos Linux.",
    ],
    stack: ["Go", "PostgreSQL", "Linux"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="space-y-8 scroll-mt-24">
      <SectionTitle>Experiencia</SectionTitle>

      <ol className="relative ml-1.5 border-l border-white/10 space-y-12">
        {experiences.map((exp) => (
          <li key={`${exp.company}-${exp.role}`} className="relative pl-8 space-y-3">
            <span
              className={`absolute -left-[7px] top-2 h-3 w-3 rounded-full ring-4 ring-[var(--background)] ${
                exp.current ? "bg-[var(--primary)]" : "bg-white/30"
              }`}
              aria-hidden="true"
            />

            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
              <h3 className="text-lg font-semibold">{exp.role}</h3>
              <span className="text-sm text-[var(--muted)]">{exp.period}</span>
            </div>

            <p className="text-sm font-medium text-[var(--primary)]">{exp.company}</p>

            <ul className="space-y-2 text-sm text-[var(--muted)] leading-relaxed max-w-3xl">
              {exp.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="text-[var(--primary)]" aria-hidden="true">▹</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-1">
              {exp.stack.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
