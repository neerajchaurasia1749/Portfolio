import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    company: "Hughes Systique Corporation",
    role: "Senior Software Engineer",
    period: "2023 — Present",
    desc: "Designed and built enterprise-grade Zero Trust Network Access platforms, quantum-safe VPN gateways, and AI-powered project intelligence tools across cross-functional engineering teams.",
  },
  {
    company: "Capgemini",
    role: "Engineer",
    period: "2022 — 2023",
    desc: "Contributed to large-scale telecom and cloud infrastructure projects, focusing on system integration, performance optimization, and production deployment pipelines.",
  },
  {
    company: "Reliance Jio",
    role: "Deputy Manager",
    period: "2020 — 2022",
    desc: "Developed 5G core network functions including Session Management Function (SMF), SIP Application Server, ASN encoder/decoder, and O-RAN/PHY emulator components.",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-40 max-w-7xl mx-auto px-6" ref={ref}>
      <div className="flex flex-col md:flex-row gap-16 md:gap-32">
        <div className="md:w-1/3">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-serif text-white/90 sticky top-32"
          >
            Experience.
          </motion.h2>
        </div>

        <div className="md:w-2/3 flex flex-col gap-24">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.2 + i * 0.15, ease: "easeOut" }}
              className="flex flex-col md:flex-row gap-4 md:gap-16 border-b border-white/5 pb-16 relative"
            >
              <div className="md:w-1/3 pt-1 flex flex-col gap-1">
                <span className="font-sans text-base tracking-widest uppercase text-muted-foreground">
                  {exp.period}
                </span>
              </div>

              <div className="md:w-2/3 flex flex-col gap-4">
                <div>
                  <h3 className="font-serif text-3xl text-white/90 leading-tight">
                    {exp.company}
                  </h3>
                  <p className="font-sans text-xl text-primary mt-2">{exp.role}</p>
                </div>
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mt-2">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
