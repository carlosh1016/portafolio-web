import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import BentoGrid from "@/components/BentoGrid";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 pt-28 space-y-24">
        <Hero />

        <About />

        {/* El BentoGrid muestra la formación y el stack antes de los proyectos */}
        <BentoGrid />

        <Projects />

        <Skills />

        <Experience />

        <Footer />
      </main>
    </>
  );
}
