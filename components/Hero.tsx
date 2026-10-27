import Image from "next/image";
import { Mail, Github, Linkedin } from "lucide-react";
import PhoneContact from "./PhoneContact";
import SocialLink from "./ui/SocialLink";

export default function Hero() {
  return (
    <section
      id="hero"
      className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >

      {/* Foto + Nombre */}
      <div className="flex items-center gap-6 sm:gap-8">

        {/* Foto */}
        <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border border-white/20 shrink-0">
          <Image
            src="/images/perfil.jpeg"
            alt="Carlos Julián Hernández"
            fill
            sizes="(min-width: 768px) 176px, 128px"
            className="object-cover"
            priority
          />
        </div>

        {/* Nombre y rol */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Carlos Julián Hernández
          </h1>

          <p className="text-lg sm:text-xl text-[var(--muted)]">
            Estudiante de Ingeniería de Sistemas con enfoque en IA, Backend & Datos
          </p>
        </div>

      </div>

      {/* Ubicación + contacto + CTA */}
      <div id="contact" className="space-y-6 scroll-mt-24">
        <div>
          <p className="font-medium">Ubicación</p>
          <p className="text-[var(--muted)]">Colombia 🇨🇴</p>
        </div>

        <div className="flex flex-wrap gap-4">
          <PhoneContact />

          <SocialLink
            icon={<Mail size={18} />}
            label="Email"
            href="mailto:carlosjher1016@gmail.com"
            ariaLabel="Enviar email"
          />

          <SocialLink
            icon={<Github size={18} />}
            label="GitHub"
            href="https://github.com/carlosh1016"
            external
            ariaLabel="Ver perfil de GitHub"
          />

          <SocialLink
            icon={<Linkedin size={18} />}
            label="LinkedIn"
            href="https://www.linkedin.com/in/carlos-hernandez-5557a8320/"
            external
            ariaLabel="Ver perfil de LinkedIn"
          />
        </div>

        <div className="flex gap-4">
          <a
            href="#projects"
            className="bg-[var(--primary)] text-black px-6 py-3 rounded-xl font-medium hover:brightness-110 transition"
          >
            Ver proyectos
          </a>
        </div>
      </div>
    </section>
  );
}
