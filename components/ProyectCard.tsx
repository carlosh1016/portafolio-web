interface ProyectProps {
  title: string;
  description: string;
  tech: string[];
  image?: string;       // El "?" hace que la imagen sea opcional
  link?: string;
  productionLink?: string;
  frontendLink?: string;
  backendLink?: string;
}

export default function ProyectCard({
  title,
  description,
  tech,
  image,
  link,
  productionLink,
  frontendLink,
  backendLink
}: ProyectProps) {
  return (
    <div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[var(--primary)] transition-all duration-300 flex flex-col">
      {/* Solo se muestra el contenedor de imagen si existe la propiedad 'image' */}
      {image && (
        <div className="aspect-video relative overflow-hidden bg-white/10">
          <img 
            src={image} 
            alt={title}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
          />
        </div>
      )}
      
      <div className="p-6 flex flex-col flex-grow space-y-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-[var(--muted)] text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="text-[10px] uppercase tracking-wider bg-white/10 px-2 py-1 rounded text-[var(--primary)] font-semibold">
              {t}
            </span>
          ))}
        </div>

        <div className="pt-4 mt-auto flex flex-wrap gap-4">
          {productionLink && (
            <a href={productionLink} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[var(--primary)] hover:underline">
              Ver en Producción ↗
            </a>
          )}
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[var(--primary)] hover:underline">
              Ver Repositorio ↗
            </a>
          )}
          {frontendLink && (
            <a href={frontendLink} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[var(--primary)] hover:underline">
              GitHub Frontend ↗
            </a>
          )}
          {backendLink && (
            <a href={backendLink} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[var(--primary)] hover:underline">
              GitHub Backend ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}