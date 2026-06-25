import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Bot, Server, Shield, Cpu, Brain } from "lucide-react";

const focuses = [
  {
    icon: Bot,
    title: "AI Agents",
    desc: "Building autonomous AI agents that integrate with engineering workflows, Jira, and observability tools for automated decision support.",
  },
  {
    icon: Brain,
    title: "LLM Applications",
    desc: "Designing production-grade LLM pipelines with retrieval-augmented generation (RAG) and structured output for technical use cases.",
  },
  {
    icon: Server,
    title: "Project Intelligence Platforms",
    desc: "Engineering AI-powered platforms that analyze project health, surface risks, and generate executive-ready summaries automatically.",
  },
  {
    icon: Cpu,
    title: "Embedded Linux Automation",
    desc: "Extending Yocto-based embedded Linux build systems with automated OTA delivery, fleet telemetry, and remote diagnostics.",
  },
  {
    icon: Shield,
    title: "Zero Trust Security Systems",
    desc: "Evolving QZTNA and related ZTNA platforms — DPI performance, policy intelligence, and quantum-safe key management.",
  },
];

export default function CurrentFocus() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="focus" className="py-32 max-w-7xl mx-auto px-6" ref={ref}>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-xs font-mono text-primary tracking-widest uppercase mb-3"
      >
        Building Now
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
      >
        What I'm Building Now
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-muted-foreground mb-16 max-w-2xl"
      >
        Active areas of deep work — where systems engineering meets AI-powered automation.
      </motion.p>

      <div className="space-y-3">
        {focuses.map((focus, i) => {
          const Icon = focus.icon;
          return (
            <motion.div
              key={focus.title}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: "easeOut" }}
              data-testid={`focus-item-${focus.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="group flex items-start gap-5 border border-white/6 rounded-xl p-5 bg-card/30 hover:border-primary/30 hover:bg-card/60 transition-all duration-300"
            >
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0 group-hover:bg-primary/20 transition-colors">
                <Icon size={20} />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1.5">{focus.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{focus.desc}</p>
              </div>
              <div className="ml-auto shrink-0 pt-1">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
