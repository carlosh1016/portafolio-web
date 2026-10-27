# Portafolio — Carlos Julián Hernández

Portafolio personal: backend, ingeniería de datos e IA.
En producción: https://portafolio-web-carlosh.vercel.app

## Stack

Next.js 16 (App Router, página estática) · React 19 · Tailwind CSS v4 · lucide-react · pnpm

## Desarrollo

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm lint
pnpm build
```

## Dónde editar el contenido

| Sección     | Archivo                        |
|-------------|--------------------------------|
| Hero        | `components/Hero.tsx`          |
| Proyectos   | `components/Projects.tsx` (el primero sale destacado) |
| Experiencia | `components/Experience.tsx`    |
| Habilidades | `components/Skills.tsx`        |
| Sobre mí    | `components/About.tsx`         |
| Contacto    | `components/Contact.tsx`, `lib/site.ts` |

**CV:** coloca el PDF en `public/cv-carlos-hernandez.pdf` y el botón "Descargar CV" aparece solo en el Hero.
