export default function BentoGrid() {
  return (
    <section id="studies" className="space-y-8">
      <h2 className="text-3xl font-semibold tracking-tight">
        Estudios
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Bachiller */}
        <div className="bg-[var(--card)] rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-300">
          <p className="text-[var(--muted)]">
            Bachiller Académico
          </p>
          <p className="text-[var(--muted)]">
            Colegio Agustiniano Norte
          </p>
          <span className="text-sm text-[var(--muted)]">
            2016 – 2021
          </span>
        </div>

        {/* EAN */}
        <div className="bg-[var(--card)] rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-300">
          <p className="text-[var(--muted)]">
            Ingeniería de Sistemas
          </p>
          <p className="text-[var(--muted)]">
            Universidad EAN
          </p>
          <span className="text-sm text-[var(--muted)]">
            2022 – 2026
          </span>
        </div>

        {/* UADE */}
        <div className="bg-[var(--card)] rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-300">
          <p className="text-[var(--muted)]">
            Ingeniería Informática
          </p>
          <p className="text-[var(--muted)]">
            Universidad UADE
          </p>
          <span className="text-sm text-[var(--muted)]">
            2025
          </span>
        </div>

      </div>
    </section>
  );
}

