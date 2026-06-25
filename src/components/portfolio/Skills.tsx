import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Domain = "security" | "telecom" | "embedded" | "cloud" | "ai";

const categories = [
  {
    label: "Programming",
    skills: ["C", "C++", "Python", "Bash", "Go", "Rust"],
    domain: "security" as Domain,
  },
  {
    label: "Networking",
    skills: ["VPN", "IPSec", "DPI", "TCP/IP", "Wireshark", "NFQUEUE"],
    domain: "security" as Domain,
  },
  {
    label: "Telecom",
    skills: ["5G", "O-RAN", "XRUM", "SMF", "PHY Emulator"],
    domain: "telecom" as Domain,
  },
  {
    label: "Embedded",
    skills: ["Linux", "Yocto", "ARM", "Systemd"],
    domain: "embedded" as Domain,
  },
  {
    label: "Cloud & DevOps",
    skills: ["AWS", "GCP", "Docker", "Kubernetes", "Jenkins", "TeamCity"],
    domain: "cloud" as Domain,
  },
  {
    label: "AI",
    skills: ["Generative AI", "AI Agents", "Automation Systems"],
    domain: "ai" as Domain,
  },
];

function dc(domain: Domain, alpha?: number) {
  return alpha !== undefined
    ? `hsl(var(--domain-${domain}) / ${alpha})`
    : `hsl(var(--domain-${domain}))`;
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-40 max-w-7xl mx-auto px-6" ref={ref}>
      <div className="flex flex-col md:flex-row gap-16 md:gap-32">
        <div className="md:w-1/3">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-serif text-white/90 sticky top-32"
          >
            Technical Arsenal.
          </motion.h2>
        </div>

        <div className="md:w-2/3 flex flex-col gap-24">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.2 + i * 0.15, ease: "easeOut" }}
              data-testid={`skill-category-${cat.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="flex flex-col md:flex-row gap-6 md:gap-16 border-b border-white/5 pb-16"
            >
              <h3 
                className="font-serif text-2xl md:text-3xl md:w-1/3 pt-1" 
                style={{ color: dc(cat.domain) }}
              >
                {cat.label}
              </h3>

              <div className="flex flex-col gap-3 md:w-2/3">
                {cat.skills.map((skill, j) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.4 + i * 0.1 + j * 0.1 }}
                    className="text-xl font-sans text-muted-foreground hover:text-white transition-colors"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
