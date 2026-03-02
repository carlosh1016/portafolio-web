import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import BentoGrid from "@/components/BentoGrid";
import Experience from "@/components/Experience";
import Profile from "@/components/Profile";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 pt-28 space-y-24">
        <Hero />
        
        {/* Usamos un grid de 3 columnas para pantallas grandes (lg) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Columna Principal (ocupa 2 de 3 columnas) */}
          <div className="lg:col-span-2 space-y-24">
            <About />
            
            {/* El BentoGrid ahora muestra tu formación y stack antes de los proyectos */}
            <BentoGrid /> 
            
            {/* Sección de proyectos (Portafolio y Cloth Inc) */}
            <Projects /> 
            
            <Experience />
          </div>

          {/* Columna Lateral (Perfil y contacto) */}
          <aside className="space-y-8">
            <Profile />
          </aside>
        </div>

        <Footer />
      </main>
    </>
  );
}