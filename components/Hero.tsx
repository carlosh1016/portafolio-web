import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Briefcase, FileText, Github, Linkedin, Mail, MapPin } from "lucide-react";
import ButtonLink from "./ui/ButtonLink";
import { contact } from "@/lib/site";

// El botón "Descargar CV" aparece solo si este archivo existe en /public
const CV_FILE = "cv-carlos-hernandez.pdf";
const hasCv = existsSync(path.join(process.cwd(), "public", CV_FILE));

const socials = [
  { href: `mailto:${contact.email}`, label: "Enviar email", icon: Mail, external: false },
  { href: contact.github, label: "Ver perfil de GitHub", icon: Github, external: true },
  { href: contact.linkedin, label: "Ver perfil de LinkedIn", icon: Linkedin, external: true },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 scroll-mt-24"
    >
      {/* Foto */}
      <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border border-white/20 shrink-0">
        <Image
          src="/images/perfil.jpeg"
          alt="Carlos Julián Hernández"
          fill
          sizes="(min-width: 768px) 192px, 128px"
          className="object-cover"
          priority
        />
      </div>

      <div className="space-y-6">
        {/* Disponibilidad */}
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 px-3 py-1 text-xs font-medium text-[var(--primary)]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75 animate-ping motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--primary)]" />
          </span>
          Disponible para nuevas oportunidades
        </span>

        {/* Nombre, rol y propuesta de valor */}
        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Carlos Julián Hernández
          </h1>
          <p className="text-xl md:text-2xl font-medium">Backend & Data Engineer</p>
          <p className="max-w-2xl text-[var(--muted)] leading-relaxed">
            Construyo pipelines de datos, APIs y agentes RAG en producción con
            Python, SQL, Go y FastAPI.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--muted)]">
          <span className="inline-flex items-center gap-2">
            <Briefcase size={16} /> Practicante de Data Engineering en Bodytech
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin size={16} /> Colombia
          </span>
        </div>

        {/* CTAs + redes */}
        <div className="flex flex-wrap items-center gap-3">
          <ButtonLink href="#projects">Ver proyectos</ButtonLink>
          {hasCv && (
            <ButtonLink href={`/${CV_FILE}`} download variant="secondary">
              <FileText size={16} /> Descargar CV
            </ButtonLink>
          )}
          <div className="flex items-center gap-2">
            {socials.map(({ href, label, icon: Icon, external }) => (
              <a
                key={href}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={label}
                title={label}
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/5 text-[var(--muted)] hover:text-[var(--primary)] hover:border-[var(--primary)]/60 transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
