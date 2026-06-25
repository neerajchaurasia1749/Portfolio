import Nav from "@/components/portfolio/Nav";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import Impact from "@/components/portfolio/Impact";
import CurrentFocus from "@/components/portfolio/CurrentFocus";
import Contact from "@/components/portfolio/Contact";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Neeraj Chaurasiya — Senior Software Engineer";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Portfolio of Neeraj Chaurasiya, Senior Software Engineer specializing in Networking, Security, Embedded Systems, AI, and Distributed Infrastructure.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Portfolio of Neeraj Chaurasiya, Senior Software Engineer specializing in Networking, Security, Embedded Systems, AI, and Distributed Infrastructure.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Impact />
        <CurrentFocus />
        <Contact />
      </main>
      <footer className="py-8 border-t border-white/5 max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
        <p>© 2025 Neeraj Chaurasiya. Built with precision.</p>
        <div className="flex items-center gap-6 mt-4 md:mt-0">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </footer>
    </div>
  );
}
