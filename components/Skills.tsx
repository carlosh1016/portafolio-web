import Card from "./ui/Card";
import SectionTitle from "./ui/SectionTitle";
import Tag from "./ui/Tag";

const skillGroups = [
  {
    title: "Lenguajes",
    items: ["Python", "Go", "SQL", "TypeScript"],
  },
  {
    title: "Backend",
    items: ["FastAPI", "Node.js", "Chi", "APIs REST"],
  },
  {
    title: "Bases de datos",
    items: ["PostgreSQL", "pgvector", "Redshift", "MySQL / MariaDB", "MongoDB"],
  },
  {
    title: "Datos e IA",
    items: ["RAG", "Embeddings", "OpenRouter", "ETL / Pipelines", "n8n", "Power BI", "Google Colab"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "CSS", "Tailwind CSS"],
  },
  {
    title: "Infraestructura",
    items: ["Docker", "Linux", "Git", "Caddy", "Oracle Cloud", "Vercel", "Supabase"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="space-y-8 scroll-mt-24">
      <SectionTitle>Habilidades</SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillGroups.map((group) => (
          <Card key={group.title} padded={false} className="p-6">
            <h3 className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wider mb-4">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
