const skillGroups = [
  {
    title: "Backend",
    items: ["Python", "Go", "Node.js", "TypeScript", "APIs REST"],
  },
  {
    title: "Datos",
    items: ["SQL", "n8n", "Power BI", "Google Colab", "Pipelines de datos", "ETL", "Python para análisis de datos", "Automatización de procesos"],
  },
  {
    title: "Bases de datos",
    items: ["SQL", "Redshift", "PostgreSQL", "MariaDB", "MongoDB", "MySQL"],
  },
  {
    title: "Herramientas",
    items: [
      "Claude Code",
      "Herramientas de IA",
      "APIs de IA",
      "Automatizaciones",
      "Docker (básico)",
      "Linux",
      "Git",
      "Google Drive API",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="space-y-8 scroll-mt-24">
      <h2 className="text-3xl font-semibold tracking-tight">Habilidades</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[var(--primary)] transition-colors"
          >
            <h3 className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wider mb-4">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 bg-white/10 rounded-full text-xs text-[var(--muted)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
