import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden" id="hero">
      {/* Soft animated background orb for subtle motion */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/30 blur-[100px] pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-accent/20 blur-[100px] pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.8, 0.4],
          x: [0, 100, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex flex-wrap gap-4 mb-12"
          >
            {["5G Telecom", "Zero Trust Security", "Embedded Linux", "Distributed Systems", "AI Agents"].map(
              (tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + i * 0.15, duration: 1.5 }}
                  className="text-sm font-sans tracking-wide text-muted-foreground uppercase"
                >
                  {tag}
                </motion.span>
              )
            )}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif text-white/90 mb-6 leading-tight"
          >
            Neeraj <br className="hidden md:block" /> Chaurasiya.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl md:text-3xl font-sans font-light text-primary mb-12"
          >
            Senior Software Engineer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-serif text-muted-foreground max-w-4xl mb-16 leading-relaxed"
          >
            Building secure, scalable, and intelligent systems from embedded devices to carrier-grade networks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.1, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-8 items-center"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-3 text-white/90 hover:text-primary transition-colors pb-1 border-b border-white/20 hover:border-primary font-sans text-sm uppercase tracking-widest"
              data-testid="hero-btn-projects"
            >
              Selected Works <ArrowUpRight size={16} />
            </a>
            <a
              href="/resume.pdf"
              download="Neeraj_Chaurasiya_Resume.pdf"
              className="inline-flex items-center justify-center gap-3 text-muted-foreground hover:text-white transition-colors font-sans text-sm uppercase tracking-widest"
              data-testid="hero-btn-resume"
            >
              Curriculum Vitae ↓
            </a>
            <a
              href="mailto:iamneerajchaurasiya@gmail.com"
              className="inline-flex items-center justify-center gap-3 text-muted-foreground hover:text-white transition-colors font-sans text-sm uppercase tracking-widest"
              data-testid="hero-btn-contact"
            >
              Email Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.3, ease: "easeOut" }}
            className="flex gap-6 mt-10 items-center"
          >
            <a 
              href="https://www.linkedin.com/in/neeraj-chaurasiya-a1872213b?utm_source=share_via&utm_content=profile&utm_medium=member_ios" 
              target="_blank" 
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-sans tracking-widest uppercase"
            >
              LinkedIn
            </a>
            <span className="text-white/20">•</span>
            <a 
              href="https://github.com/neerajchaurasia1749?tab=repositories" 
              target="_blank" 
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-sans tracking-widest uppercase"
            >
              GitHub
            </a>
          </motion.div>
        </div>

        {/* Right Column: Cyber-Terminal Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
          className="hidden lg:flex items-center justify-center w-full max-w-[500px] ml-auto relative"
        >
          <div className="w-full bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center px-4 py-3 border-b border-white/5 bg-white/[0.02]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]/80" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]/80" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]/80" />
              </div>
              <div className="flex-1 text-center text-xs font-mono text-muted-foreground/50 ml-[-40px]">
                zsh — neeraj@core
              </div>
            </div>
            
            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm flex flex-col gap-5 text-white/70">
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                <span className="text-accent/80 mr-2">$</span> init qztna-node
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.2, duration: 0.5 }}
                  className="text-primary/90 mt-1"
                >
                  &gt; DPI engine active · zero-trust policies synced
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5, duration: 0.5 }}
              >
                <span className="text-accent/80 mr-2">$</span> 5g-core start --smf
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 4.2, duration: 0.5 }}
                  className="text-primary/90 mt-1"
                >
                  &gt; Session Management Function online
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 5.5, duration: 0.5 }}
              >
                <span className="text-accent/80 mr-2">$</span> bitbake cruise-ota-image
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 6.2, duration: 0.5 }}
                  className="text-primary/90 mt-1"
                >
                  &gt; Yocto build complete · ready for fleet deployment
                </motion.div>
              </motion.div>

              {/* Blinking Cursor */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ delay: 6.5, duration: 1, repeat: Infinity }}
                className="mt-1 w-2.5 h-4 bg-accent/60"
              />

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
