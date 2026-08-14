import Image from "next/image";
import {
  Mail,
  Github,
  Linkedin,
} from "lucide-react";
import PhoneContact from "./PhoneContact";
import SocialLink from "./ui/SocialLink";

export default function Profile() {
  return (
    <section id="contact" className="space-y-6 scroll-mt-24">

      {/* Foto + Nombre */}
      <div className="flex items-center gap-4">
        <div className="relative w-24 h-24 rounded-full overflow-hidden border border-white/10">
          <Image
            src="/images/perfil.jpeg"
            alt="Carlos Julián Hernández"
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold">Carlos Julián Hernández</h2>
          <p className="text-sm text-[var(--muted)]">
            Estudiante de Ingeniería de Sistemas
          </p>
        </div>
      </div>

      {/* Card secundaria */}
      <div className="hover:scale-[1.02] transition-transform duration-300">
        <h4 className="font-medium">Ubicación</h4>
        <p className="text-[var(--muted)]">Colombia 🇨🇴</p>
      </div>

      {/* Contacto con iconos */}
      <div className="flex flex-wrap gap-4 pt-2">

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
    </section>
  );
}
