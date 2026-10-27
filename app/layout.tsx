import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://portafolio-web-carlosh.vercel.app";
const description =
  "Ingeniero de sistemas enfocado en backend, datos y automatización. Construyo pipelines de datos, APIs y sistemas con Python, SQL, Go y Node.js.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Carlos Julián Hernández | Backend & Data Engineering",
  description,
  keywords: [
    "Carlos Julián Hernández",
    "Backend Developer",
    "Data Engineering",
    "Ingeniero de Sistemas",
    "Python",
    "SQL",
    "n8n",
    "Power BI",
    "Portafolio",
  ],
  authors: [{ name: "Carlos Julián Hernández" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteUrl,
    siteName: "Carlos Julián Hernández · Portafolio",
    title: "Carlos Julián Hernández | Backend & Data Engineering",
    description,
    images: [
      {
        url: "/images/perfil.jpeg",
        width: 358,
        height: 415,
        alt: "Carlos Julián Hernández",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Carlos Julián Hernández | Backend & Data Engineering",
    description,
    images: ["/images/perfil.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
