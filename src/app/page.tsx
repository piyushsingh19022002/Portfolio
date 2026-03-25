import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import CodingActivity from "@/components/CodingActivity";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full relative overflow-x-hidden">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <CodingActivity />
      <Contact />
      <Footer />
    </main>
  );
}
