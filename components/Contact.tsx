import { Github, Linkedin, Mail } from "lucide-react";
import PhoneContact from "./PhoneContact";
import ButtonLink from "./ui/ButtonLink";
import Card from "./ui/Card";
import SectionTitle from "./ui/SectionTitle";
import SocialLink from "./ui/SocialLink";
import { contact } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <Card variant="highlight" className="md:p-12 text-center space-y-6">
        <SectionTitle>¿Hablamos?</SectionTitle>
        <p className="max-w-xl mx-auto text-[var(--muted)] leading-relaxed">
          Busco oportunidades en backend, ingeniería de datos e IA. La forma más
          rápida de contactarme es por email o LinkedIn.
        </p>

        <ButtonLink href={`mailto:${contact.email}`}>
          <Mail size={16} /> {contact.email}
        </ButtonLink>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 pt-2">
          <SocialLink
            icon={<Linkedin size={18} />}
            label="LinkedIn"
            href={contact.linkedin}
            external
            ariaLabel="Ver perfil de LinkedIn"
          />
          <SocialLink
            icon={<Github size={18} />}
            label="GitHub"
            href={contact.github}
            external
            ariaLabel="Ver perfil de GitHub"
          />
          <PhoneContact />
        </div>
      </Card>
    </section>
  );
}
