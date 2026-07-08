export default function BentoGrid() {
  return (
    <section 
      id="studies" 
      className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto md:auto-rows-[minmax(180px,auto)] scroll-mt-24"
    >
      {/* Educación - Ocupa 2 columnas */}
      <div className="md:col-span-2 row-span-1 bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-[var(--primary)] transition-colors flex flex-col justify-center">
        <h3 className="text-sm font-medium text-[var(--muted)] mb-4">Formación 🎓</h3>
        <div className="space-y-3">
          <div>
            <p className="text-lg font-semibold leading-tight">Ingeniería de Sistemas</p>
            <p className="text-sm text-[var(--muted)]">Universidad EAN · Bogotá, Colombia · En curso</p>
          </div>
          <div>
            <p className="text-lg font-semibold leading-tight">Ingeniería Informática</p>
            <p className="text-sm text-[var(--muted)]">Universidad UADE · Argentina · En curso</p>
          </div>
        </div>
      </div>

      {/* Stack Principal - Ocupa 1 columna pero es más alta */}
      <div className="md:col-span-1 row-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-[var(--primary)] transition-colors flex flex-col justify-between">
        <div>
          <h3 className="text-sm font-medium text-[var(--muted)] mb-4">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Python", "SQL/Redshift", "PostgreSQL", "Go", "Node.js",
              "TypeScript", "n8n", "Automatizaciones", "Power BI", "Google Colab",
              "React", "Tailwind CSS", "Docker (básico)", "Linux",
              "Claude Code", "Herramientas de IA",
            ].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <p className="text-xs text-[var(--muted)] mt-4">Enfoque en backend, datos y automatización.</p>
      </div>

      {/* GitHub/Stats rápido */}
      <div className="md:col-span-2 row-span-1 bg-[var(--primary)]/10 border border-[var(--primary)]/20 rounded-3xl p-8 flex items-center justify-center text-center">
         <p className="font-medium text-[var(--primary)]">
           Abierto a nuevas oportunidades laborales
         </p>
      </div>
    </section>
  );
}