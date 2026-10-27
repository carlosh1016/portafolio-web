import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Orden pensado para reclutadores: primero el trabajo, luego el perfil */}
      <main className="max-w-6xl mx-auto px-6 pt-32 space-y-28">
        <Hero />

        <Projects />

        <Experience />

        <Skills />

        <About />

        <Contact />

        <Footer />
      </main>
    </>
  );
}
