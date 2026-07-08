export default function About() {
  return (
    <section
      id="about"
      className="bg-[var(--card)] rounded-2xl p-10 space-y-6"
    >

      <h3 className="text-2xl font-semibold tracking-tight">
        Sobre mí
      </h3>

      <p className="max-w-3xl text-[var(--muted)] leading-relaxed">
        Soy estudiante de Ingeniería de Sistemas con interés principal en el
        desarrollo backend y la construcción de sistemas bien estructurados.
        Me gusta entender cómo funcionan las cosas por dentro, escribir código
        claro y priorizar soluciones simples y mantenibles.

        Me apasiona seguir aprendiendo y creciendo en el campo del desarrollo de software,
        o cualquier área relacionada con la ingeniería de sistemas como ciencia de datos, 
        DevOps o seguridad informática, todo con un enfoque práctico y basado en fundamentos sólidos.
      </p>

      <p className="max-w-3xl text-[var(--muted)] leading-relaxed">
        He trabajado con tecnologías como Go, Java, Node.js, bases de datos
        relacionales, análisis predictivos y Machine Learning,
        y disfruto aprender fundamentos sólidos antes de pasar a soluciones complejas.
      </p>

    </section>
  );
}
