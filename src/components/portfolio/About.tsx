import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, delay: i * 0.2, ease: "easeOut" },
    }),
  };

  return (
    <section id="about" className="py-40 max-w-7xl mx-auto px-6" ref={ref}>
      <div className="flex flex-col md:flex-row gap-16 md:gap-32">
        <div className="md:w-1/3">
          <motion.h2
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-4xl md:text-5xl font-serif text-white/90 sticky top-32"
          >
            About.
          </motion.h2>
        </div>

        <div className="md:w-2/3 flex flex-col gap-12 pt-2">
          <motion.h3
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-3xl md:text-5xl font-serif text-white/90 leading-tight mb-4"
          >
            Systems Engineer.<br />Not a web developer.
          </motion.h3>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-muted-foreground text-xl md:text-2xl leading-relaxed"
          >
            I am a Senior Software Engineer with nearly 6 years of experience designing and building
            networking, telecom, cybersecurity, cloud, and embedded systems. My work spans 5G
            infrastructure, Zero Trust platforms, VPN technologies, distributed systems, AI-powered
            automation, and large-scale production deployments.
          </motion.p>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-muted-foreground text-xl md:text-2xl leading-relaxed"
          >
            I specialize at the intersection of hardware and software — from writing bare-metal C for
            ARM processors to architecting carrier-grade 5G core network functions. Every system I
            build prioritizes correctness, performance, and operational reliability.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
