import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 5,   suffix: "+",      label: "Years Experience",      desc: "Building production systems" },
  { value: 17,  suffix: "",       label: "Cruise Ships Managed",  desc: "Embedded OTA fleet deployment" },
  { value: 879, suffix: " Mbps",  label: "DPI Throughput",        desc: "With only 6.6% overhead" },
  { value: 6,   suffix: "",       label: "Enterprise Platforms",  desc: "Delivered to production" },
  { value: 3,   suffix: "",       label: "Industries Served",     desc: "Telecom, Cybersecurity, AI" },
];

function Counter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2500; // Slower for Nordic minimalism
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function Impact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="py-40 max-w-7xl mx-auto px-6" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-serif text-white/90 mb-24"
      >
        Impact.
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-12 gap-y-16">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.2 + i * 0.15, ease: "easeOut" }}
            className="flex flex-col gap-4"
          >
            <p className="text-5xl md:text-6xl font-serif text-white/90 tracking-tight">
              <Counter value={stat.value} suffix={stat.suffix} inView={inView} />
            </p>
            <div>
              <p className="font-sans text-sm tracking-widest uppercase text-muted-foreground mb-2">
                {stat.label}
              </p>
              <p className="text-white/40 text-sm leading-relaxed">{stat.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
