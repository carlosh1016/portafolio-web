"use client";

import { MessageCircle, Phone } from "lucide-react";
import SocialLink from "./ui/SocialLink";

/**
 * Contactos telefónicos con el número ofuscado.
 * El número NO se renderiza en el HTML plano (server): se ensambla en el
 * cliente solo al momento del clic, evitando que scrapers/bots lo capturen.
 * Las partes van codificadas en base64 y divididas para dificultar el scraping estático.
 */
const PARTS = ["NTc=", "MzAwNTY0", "NzA0MA=="];

function getNumber(): string {
  return PARTS.map((p) => atob(p)).join("");
}

export default function PhoneContact() {
  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${getNumber()}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const call = () => {
    window.location.href = `tel:+${getNumber()}`;
  };

  return (
    <>
      <SocialLink icon={<Phone size={18} />} label="Llamar" onClick={call} ariaLabel="Llamar" />
      <SocialLink
        icon={<MessageCircle size={18} />}
        label="WhatsApp"
        onClick={openWhatsApp}
        ariaLabel="Escribir por WhatsApp"
      />
    </>
  );
}
