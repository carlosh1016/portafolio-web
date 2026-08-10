import ProyectCard from "./ProyectCard";

const myProjects = [
  {
    title: "Inspirate Inventory",
    description: "Sistema de inventario web para una perfumería familiar en Colombia que mezcla fragancias con alcohol en diferentes presentaciones. Backend en Go con más de 75 endpoints, control de stock transaccional, y descuentos automatizados. Frontend en Next.js 16 con React 19, TanStack Query y shadcn/ui, soportando dos roles de usuario. Infraestructura en Supabase, Oracle Cloud y Vercel.",
    tech: ["Go", "Chi", "Next.js", "React 19", "TypeScript", "PostgreSQL", "Tailwind CSS", "TanStack Query", "Zustand", "shadcn/ui"],
    link: "https://github.com/carlosh1016/inspirate-inventory",
    productionLink: "https://inspirate-inventory.vercel.app/",
    image: "/images/project-inspirate.svg"
  },
  {
    title: "Recibos App",
    description: "Aplicación web progresiva (PWA) que digitaliza facturas colombianas: se toma una foto del recibo, se preprocesa la imagen y se extrae el texto mediante OCR para exportar los datos a Excel. Funciona 100% offline y sin backend — todo el procesamiento ocurre en el navegador, con almacenamiento local mediante IndexedDB.",
    tech: ["TypeScript", "Vite", "Tailwind CSS", "Tesseract.js", "Dexie", "ExcelJS"],
    link: "https://github.com/carlosh1016/Recibos-app",
    productionLink: "https://recibos-app-beige.vercel.app/",
    image: "/images/project-recibos.svg"
  },
  {
    title: "Portafolio Personal",
    description: "Mi sitio web profesional desarrollado con Next.js y Tailwind CSS para mostrar mi trayectoria y proyectos como desarrollador.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/carlosh1016/portafolio-web",
    image: "/images/project-portafolio.svg"
  },
  {
    title: "Cloth Inc",
    description: "Proyecto académico desarrollado en una materia de la Universidad UADE, donde practiqué desarrollo full-stack de punta a punta: frontend, backend y bases de datos. Es una plataforma de e-commerce para una tienda de ropa con inventario, gestión de usuarios y procesos de compra. El código está disponible en los repositorios; no cuenta con despliegue en vivo.",
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

        {/* Tarjeta placeholder para próximo proyecto */}
        <div className="border-2 border-dashed border-white/15 rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-3 min-h-[220px] hover:border-[var(--primary)]/50 transition-colors">
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-2xl text-[var(--primary)]">
            +
          </div>
          <h3 className="text-lg font-semibold">Próximo proyecto</h3>
          <p className="text-sm text-[var(--muted)] max-w-xs">
            En desarrollo — pronto habrá algo nuevo por aquí.
          </p>
        </div>
      </div>
    </section>
  );
}