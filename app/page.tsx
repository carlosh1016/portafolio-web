import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import BentoGrid from "@/components/BentoGrid";
import Experience from "@/components/Experience";
import Profile from "@/components/Profile";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 pt-28 space-y-24">
        <Hero />
        <About />
        <BentoGrid />
        <Experience />
        <Profile />
        <Footer />
      </main>
    </>
  );
}

