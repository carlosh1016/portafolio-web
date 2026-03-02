export default function BentoGrid() {
  return (
    <section 
      id="studies" 
      className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[180px] scroll-mt-24"
    >
      {/* Educación - Ocupa 2 columnas */}
      <div className="md:col-span-2 row-span-1 bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-[var(--primary)] transition-colors">
        <h3 className="text-sm font-medium text-[var(--muted)] mb-2">Formación</h3>
        <p className="text-2xl font-semibold">Ingeniería de Sistemas</p>
        <p className="text-[var(--muted)]">Universidad - En curso 🎓</p>
      </div>

      {/* Stack Principal - Ocupa 1 columna pero es más alta */}
      <div className="md:col-span-1 row-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-[var(--primary)] transition-colors flex flex-col justify-between">
        <div>
          <h3 className="text-sm font-medium text-[var(--muted)] mb-4">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {["Node.js", "React", "PostgreSQL", "TypeScript", "Tailwind"].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <p className="text-xs text-[var(--muted)]">Enfoque principal en desarrollo Backend.</p>
      </div>

      {/* Ubicación o Disponibilidad */}
      <div className="md:col-span-1 row-span-1 bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-[var(--primary)] transition-colors flex items-center justify-center">
        <div className="text-center">
          <p className="text-3xl">🇨🇴</p>
          <p className="text-sm font-medium mt-2">Remoto / Colombia</p>
        </div>
      </div>

      {/* GitHub/Stats rápido */}
      <div className="md:col-span-1 row-span-1 bg-[var(--primary)]/10 border border-[var(--primary)]/20 rounded-3xl p-8 flex items-center justify-center text-center">
         <p className="font-medium text-[var(--primary)]">
           Abierto a nuevas oportunidades laborales
         </p>
      </div>
    </section>
  );
}