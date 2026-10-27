import Image from "next/image";
import Card from "./ui/Card";
import Tag from "./ui/Tag";

export interface Project {
  title: string;
  summary: string;
  highlights: string[];
  tech: string[];
  image?: string;
  link?: string;
  productionLink?: string;
  note?: string;        // Aclaración junto a los enlaces (ej. demo con contraseña)
}

interface ProjectCardProps extends Project {
  featured?: boolean;
}

export default function ProjectCard({
  title,
  summary,
  highlights,
  tech,
  image,
  link,
  productionLink,
  note,
  featured = false,
}: ProjectCardProps) {
  return (
    <Card
      padded={false}
      hoverable
      className={`group overflow-hidden flex flex-col ${featured ? "md:flex-row" : ""}`}
    >
      {image && (
        <div
          className={`relative aspect-video overflow-hidden bg-white/5 border-b border-white/10 ${
            featured ? "md:w-1/2 md:aspect-auto md:min-h-80 md:border-b-0 md:border-r" : ""
          }`}
        >
          <Image
            src={image}
            alt={`Vista de ${title}`}
            fill
            sizes={featured ? "(min-width: 768px) 576px, 100vw" : "(min-width: 768px) 50vw, 100vw"}
            className={`object-cover group-hover:scale-[1.03] transition-transform duration-500 ${
              featured ? "object-top md:object-left-top" : "object-top"
            }`}
          />
        </div>
      )}

      <div className={`p-6 flex flex-col flex-grow gap-4 ${featured ? "md:p-8 md:w-1/2" : ""}`}>
        {featured && (
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)]">
            Proyecto principal
          </span>
        )}
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-[var(--foreground)]/90 leading-relaxed">{summary}</p>

        <ul className="space-y-2 text-sm text-[var(--muted)] leading-relaxed">
          {highlights.map((h) => (
            <li key={h} className="flex gap-2">
              <span className="text-[var(--primary)]" aria-hidden="true">▹</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <Tag key={t} accent>{t}</Tag>
          ))}
        </div>

        <div className="pt-2 mt-auto flex flex-wrap items-center gap-x-4 gap-y-2">
          {productionLink && (
            <a href={productionLink} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[var(--primary)] hover:underline">
              Ver en producción ↗
            </a>
          )}
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[var(--primary)] hover:underline">
              Ver repositorio ↗
            </a>
          )}
          {note && <span className="text-xs text-[var(--muted)]">{note}</span>}
        </div>
      </div>
    </Card>
  );
}
