type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  repoUrl: string;
  liveUrl?: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  repoUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 p-6 hover:border-primary transition">
      <h3 className="text-xl font-bold mb-2">{title}</h3>

      <p className="text-slate-500 text-sm mb-4">
        {description}
      </p>

      <ul className="flex flex-wrap gap-2 mb-6">
        {tech.map((item) => (
          <li
            key={item}
            className="text-xs px-3 py-1 rounded-full bg-slate-100"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="flex gap-4 text-sm font-medium">
        <a
          href={repoUrl}
          target="_blank"
          className="hover:text-primary transition"
        >
          Repositorio
        </a>

        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            className="hover:text-primary transition"
          >
            Ver App
          </a>
        )}
      </div>
    </article>
  );
}
