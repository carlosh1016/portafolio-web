import ProjectCard, { type Project } from "./ProjectCard";
import SectionTitle from "./ui/SectionTitle";

// El primer proyecto se muestra destacado a ancho completo
const myProjects: Project[] = [
  {
    title: "Ecolex — Asistente de IA para cumplimiento ambiental ESG",
    summary:
      "Plataforma SaaS multi-tenant con un agente conversacional RAG que responde preguntas sobre normativa ambiental colombiana citando la fuente exacta. Proyecto de grado, Universidad EAN (2026).",
    highlights: [
      "Backend en FastAPI + PostgreSQL/pgvector y pipeline de ingesta de PDFs nativos y escaneados con OCR multimodal.",
      "Sincronización automática con las publicaciones del Ministerio de Ambiente: el corpus pasó de 7 normas curadas a 322 documentos y 36.001 fragmentos vectorizados.",
      "Despliegue completo con Docker en Oracle Cloud, Next.js en Vercel y TLS automático con Caddy, a un costo medido de centavos de dólar por consulta.",
    ],
    tech: ["FastAPI", "PostgreSQL + pgvector", "RAG", "Next.js", "Docker", "Oracle Cloud"],
    link: "https://github.com/carlosh1016/Enviroment-agent",
    productionLink: "https://enviroment-agent.vercel.app/",
    image: "/images/screenshot-ecolex.png",
  },
  {
    title: "Inspirate Inventory",
    summary:
      "Sistema de inventario web para una perfumería familiar en Colombia que prepara fragancias en diferentes presentaciones.",
    highlights: [
      "Backend en Go (Chi) con más de 75 endpoints, control de stock transaccional y descuentos automatizados.",
      "Frontend en Next.js 16 y React 19 con TanStack Query, Zustand y shadcn/ui, con dos roles de usuario.",
      "Infraestructura en Supabase, Oracle Cloud y Vercel.",
    ],
    tech: ["Go", "Chi", "PostgreSQL", "Next.js", "TypeScript", "TanStack Query"],
    link: "https://github.com/carlosh1016/inspirate-inventory",
    image: "/images/project-inspirate.svg",
  },
  {
    title: "Recibos App",
    summary:
      "PWA que digitaliza facturas colombianas: foto del recibo, extracción de texto con OCR y exportación a Excel.",
    highlights: [
      "Preprocesamiento de imagen y OCR con Tesseract.js directamente en el navegador.",
      "100% offline y sin backend: almacenamiento local en IndexedDB con Dexie.",
      "Exportación de los datos extraídos a Excel con ExcelJS.",
    ],
    tech: ["TypeScript", "Vite", "Tesseract.js", "Dexie", "ExcelJS", "Tailwind CSS"],
    link: "https://github.com/carlosh1016/Recibos-app",
    productionLink: "https://recibos-app-beige.vercel.app/",
    note: "Demo protegida con contraseña",
    image: "/images/project-recibos.svg",
  },
];

export default function Projects() {
  const [featured, ...rest] = myProjects;

  return (
    <section id="projects" className="space-y-8 scroll-mt-24">
      <SectionTitle>Proyectos destacados</SectionTitle>

      <ProjectCard {...featured} featured />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rest.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
