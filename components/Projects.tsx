import ProyectCard from "./ProyectCard";

const myProjects = [
  {
    title: "Portafolio Personal",
    description: "Mi sitio web profesional desarrollado con Next.js y Tailwind CSS para mostrar mi trayectoria y proyectos como desarrollador.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/carlosh1016/portafolio-web",
    image: "/images/perfil.jpeg" 
  },
  {
    title: "Cloth Inc",
    description: "Plataforma integral de E-commerce para una tienda de ropa. Incluye sistema de inventario, gestión de usuarios y procesos de compra.",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    frontendLink: "https://github.com/DiSavoia101/cloth-inc-frontend.git",
    backendLink: "https://github.com/DiSavoia101/cloth-inc-backend.git"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 space-y-8">
      <h2 className="text-3xl font-bold border-b border-white/10 pb-4">
        Proyectos Destacados
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {myProjects.map((project, index) => (
          <ProyectCard 
            key={index}
            {...project} 
          />
        ))}
      </div>
    </section>
  );
}