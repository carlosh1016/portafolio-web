import {
  Phone,
  Mail,
  Github,
  Linkedin,
  MessageCircle,
} from "lucide-react";

export default function Profile() {
  return (
    <section id="contact" className="space-y-6">

      {/* Foto + Nombre */}
      <div className="flex items-center gap-4">
        <div className="w-24 h-24 rounded-full overflow-hidden border border-white/10">
          <img
            src="/profile.jpg"
            alt="Carlos Hernandez"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold">Carlos Hernández</h2>
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

        <a
          href="tel:+573005647040"
          className="flex items-center gap-2 text-sm hover:text-[var(--primary)] transition-colors"
        >
          <Phone size={18} />
          <span>Llamar</span>
        </a>

        <a
          href="https://wa.me/573005647040"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm hover:text-[var(--primary)] transition-colors"
        >
          <MessageCircle size={18} />
          <span>WhatsApp</span>
        </a>

        <a
          href="mailto:carlosjher1016@gmail.com"
          className="flex items-center gap-2 text-sm hover:text-[var(--primary)] transition-colors"
        >
          <Mail size={18} />
          <span>Email</span>
        </a>

        <a
          href="https://github.com/carlosh1016"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm hover:text-[var(--primary)] transition-colors"
        >
          <Github size={18} />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/carlos-hernandez-5557a8320/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm hover:text-[var(--primary)] transition-colors"
        >
          <Linkedin size={18} />
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  );
}
