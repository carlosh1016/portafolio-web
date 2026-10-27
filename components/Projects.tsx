import ProyectCard from "./ProyectCard";

const myProjects = [
  {
    title: "Ecolex — Asistente de IA para cumplimiento ambiental ESG",
    description: "Plataforma SaaS multi-tenant con un agente conversacional RAG que responde preguntas sobre normativa ambiental colombiana citando la fuente exacta. Diseñé el backend en FastAPI con PostgreSQL/pgvector, el pipeline de ingesta de PDFs nativos y escaneados (OCR multimodal) y una sincronización automática con las publicaciones oficiales del Ministerio de Ambiente. El corpus creció de 7 normas curadas a 322 documentos y 36.001 fragmentos vectorizados, con un costo medido de centavos de dólar por consulta. Desplegado con Docker en Oracle Cloud, Next.js en Vercel y TLS automático con Caddy. Proyecto de grado, Universidad EAN (2026).",
    tech: ["FastAPI", "Python", "PostgreSQL", "pgvector", "RAG", "OpenRouter", "Next.js", "TypeScript", "Docker", "Caddy", "Oracle Cloud", "Vercel"],
    link: "https://github.com/carlosh1016/Enviroment-agent",
    productionLink: "https://enviroment-agent.vercel.app/",
    image: "/images/project-ecolex.svg"
  },
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
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 space-y-8 scroll-mt-24">
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