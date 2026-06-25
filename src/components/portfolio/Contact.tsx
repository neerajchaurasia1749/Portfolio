import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, Github, Download, ArrowUpRight } from "lucide-react";

const links = [
  {
    icon: Mail,
    label: "Email",
    handle: "neeraj.chaurasiya@example.com",
    href: "mailto:neeraj.chaurasiya@example.com",
    testId: "contact-email",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "linkedin.com/in/neerajchaurasiya",
    href: "https://linkedin.com/in/neerajchaurasiya",
    testId: "contact-linkedin",
  },
  {
    icon: Github,
    label: "GitHub",
    handle: "github.com/neerajchaurasiya",
    href: "https://github.com/neerajchaurasiya",
    testId: "contact-github",
  },
  {
    icon: Download,
    label: "Resume",
    handle: "Download PDF",
    href: "#",
    testId: "contact-resume",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 border-t border-white/5" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono text-primary tracking-widest uppercase mb-3"
        >
          Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4"
        >
          Let's Build<br />Something.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-muted-foreground mb-16 max-w-xl text-lg"
        >
          Open to senior engineering roles in infrastructure, security, telecom, and AI.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
          {links.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                whileHover={{ y: -2 }}
                data-testid={link.testId}
                className="group flex items-center gap-4 border border-white/8 rounded-xl p-5 bg-card/40 hover:border-primary/35 hover:bg-card/70 transition-all duration-300"
              >
                <div className="p-2.5 rounded-lg bg-white/5 text-muted-foreground group-hover:bg-primary/15 group-hover:text-primary transition-all duration-300">
                  <Icon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium text-sm">{link.label}</p>
                  <p className="text-muted-foreground text-xs font-mono truncate mt-0.5">{link.handle}</p>
                </div>
                <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
