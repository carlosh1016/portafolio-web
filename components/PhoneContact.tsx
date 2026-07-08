"use client";

import { MessageCircle, Phone } from "lucide-react";

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

  const base =
    "flex items-center gap-2 text-sm hover:text-[var(--primary)] transition-colors cursor-pointer";

  return (
    <>
      <button type="button" onClick={call} className={base} aria-label="Llamar">
        <Phone size={18} />
        <span>Llamar</span>
      </button>

      <button
        type="button"
        onClick={openWhatsApp}
        className={base}
        aria-label="Escribir por WhatsApp"
      >
        <MessageCircle size={18} />
        <span>WhatsApp</span>
      </button>
    </>
  );
}
