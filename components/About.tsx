import Card from "./ui/Card";
import SectionTitle from "./ui/SectionTitle";

const education = [
  {
    degree: "Ingeniería de Sistemas",
    school: "Universidad EAN · Bogotá, Colombia",
    status: "En curso",
  },
  {
    degree: "Ingeniería Informática",
    school: "UADE · Argentina",
    status: "En curso",
  },
];

export default function About() {
  return (
    <section id="about" className="space-y-8 scroll-mt-24">
      <SectionTitle>Sobre mí</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card className="md:col-span-3 space-y-4 text-[var(--muted)] leading-relaxed">
          <p>
            Soy estudiante de Ingeniería de Sistemas y me enfoco en backend y
            datos: diseñar APIs, construir pipelines y llevar sistemas a
            producción. Mi proyecto de grado, Ecolex, me llevó desde la ingesta
            de documentos y la búsqueda vectorial hasta el despliegue completo
            en la nube.
          </p>
          <p>
            He trabajado con Go, Java, Node.js, bases de datos relacionales,
            análisis predictivo y Machine Learning. Me gusta entender cómo
            funcionan las cosas por dentro, escribir código claro y priorizar
            soluciones simples y mantenibles, con fundamentos sólidos antes de
            sumar complejidad.
          </p>
          <p>
            Sigo aprendiendo en áreas cercanas como ciencia de datos, DevOps y
            seguridad informática, siempre con un enfoque práctico.
          </p>
        </Card>

        <Card className="md:col-span-2">
          <h3 className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wider mb-4">
            Formación
          </h3>
          <ul className="space-y-4">
            {education.map((ed) => (
              <li key={ed.degree}>
                <p className="font-semibold leading-tight">{ed.degree}</p>
                <p className="text-sm text-[var(--muted)]">
                  {ed.school} · {ed.status}
                </p>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
