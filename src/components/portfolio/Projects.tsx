import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, Calendar, Wrench, Code2, User } from "lucide-react";

type Project = {
  name: string;
  subtitle: string;
  description: string;
  tech: string[];
  metrics: { label: string; value: string }[];
  detail: {
    duration: string;
    tools: string;
    language: string;
    role: string;
    responsibilities: string[];
  };
};

const projects: Project[] = [
  {
    name: "QZTNA",
    subtitle: "Zero Trust Network Access",
    description: "Real-time Zero Trust Network Access solution integrating nProbe (IPS mode) with a quantum-safe VPN on RHEL 9.5. Enforces L7 protocol, hostname, and GeoIP-based per-user traffic policies.",
    tech: ["DPI", "ZeroMQ", "VPN", "Elasticsearch", "Kibana", "Policy Engine", "React", "Flask"],
    metrics: [
      { label: "Baseline Throughput", value: "941 Mbps" },
      { label: "With DPI Enabled", value: "879 Mbps" },
      { label: "Inspection Overhead", value: "6.6%" },
    ],
    detail: {
      duration: "Oct 2024 — Jul 2025",
      tools: "nProbe (IPS mode), ZeroMQ, iptables, NFQUEUE, Elasticsearch, Kibana, Wireshark, tcpdump, iperf, Flask, React (Maestro GUI)",
      language: "C/C++, Python",
      role: "Senior Software Engineer",
      responsibilities: [
        "Led end-to-end delivery of a DPI-based traffic inspection and policy enforcement solution, including requirements analysis, architecture design, development, testing, deployment, and production support.",
        "Designed a modular and scalable architecture comprising nProbe Manager, Policy Engine, Policy Reader, Policy Enforcer, REST Server, and Maestro GUI integration.",
        "Conducted PoCs and comparative evaluations of Suricata, custom nDPI-based implementations, and nProbe IPS to assess detection accuracy, performance, scalability, and integration feasibility.",
        "Designed multi-client test topologies to validate end-to-end traffic classification, policy enforcement, and VPN tunnel isolation.",
        "Visited customer sites to perform solution installation, deployment, configuration, troubleshooting, and production rollout support.",
      ],
    },
  },
  {
    name: "QConnect",
    subtitle: "Gateway Client Box",
    description: "Linux-based quantum-safe VPN gateway appliance with full network stack: real-time DPI on LAN/WAN via nProbe, Flask/MongoDB policy API, DNS/DHCP, PPPoE, WPA2-Enterprise Wi-Fi, and NAT.",
    tech: ["IPSec", "DHCP", "DNS", "PPPoE", "WPA2 Enterprise", "NAT", "nProbe", "FreeRADIUS"],
    metrics: [
      { label: "Protocol Stack", value: "Full L2–L7" },
      { label: "Security", value: "Quantum-Safe" },
    ],
    detail: {
      duration: "Jul 2025 — Oct 2025",
      tools: "nProbe, Dnsmasq, Hostapd, FreeRADIUS, rp-pppoe, iptables, pyroute2, Flask, MongoDB, systemd, QVPN RAC Client",
      language: "Python 3.10, Linux (Ubuntu), C/C++",
      role: "Senior Software Engineer",
      responsibilities: [
        "Designed and implemented the full network stack of the QBox gateway: DPI, DHCP/DNS, PPPoE, WPA2-Enterprise Wi-Fi, and NAT routing.",
        "Integrated the device with the Maestro control plane for centralized policy management and monitoring.",
        "Validated end-to-end connectivity, authentication flows, and policy enforcement across LAN and WAN interfaces.",
      ],
    },
  },
  {
    name: "SMOAD",
    subtitle: "IPsec VPN Gateway",
    description: "Deployed StrongSwan 6.0.3 from source on Ubuntu 22.04 with IKEv2/IPsec full-tunnel VPN. Built a custom C plugin for Quantum Dice entropy integration and Prometheus-compatible observability.",
    tech: ["StrongSwan", "C", "PKI", "Prometheus", "Quantum Entropy", "Django", "iptables"],
    metrics: [
      { label: "Monitoring", value: "Prometheus" },
      { label: "Entropy Source", value: "Quantum RNG" },
    ],
    detail: {
      duration: "Oct 2025 — Feb 2026",
      tools: "StrongSwan 6.0.3, swanctl, charon-systemd, iptables, nftables, Prometheus, Django, Gunicorn, Nginx, OpenSSL, Android StrongSwan Client",
      language: "C, Python, Linux (Ubuntu 22.04)",
      role: "Engineer",
      responsibilities: [
        "Designed and implemented the full IKEv2/IPsec VPN stack from source compilation to production deployment with 30+ build flags (EAP-TLS, EAP-RADIUS, DHCP, Curve25519/448, DRBG).",
        "Built and integrated a custom quantum entropy plugin (qdice_rng_plugin.c) with ring-buffer feeder to enhance VPN cryptographic key generation security.",
        "Set up monitoring and observability infrastructure (Prometheus exporter, StrongMan dashboard) for operations teams.",
        "Validated mutual certificate-based authentication and end-to-end VPN tunnel functionality on Android clients.",
      ],
    },
  },
  {
    name: "WSR AI Agent",
    subtitle: "Project Intelligence Platform",
    description: "AI agent for automated Jira project monitoring, sprint analysis, and stakeholder reporting. Bypassed Jira API limitations using a browser-extension and session-based data collection.",
    tech: ["Generative AI", "Jira API", "Browser Extension", "Risk Analysis", "Python", "JavaScript"],
    metrics: [
      { label: "Reports Automated", value: "100%" },
      { label: "Data Sources", value: "Jira + Browser" },
    ],
    detail: {
      duration: "Feb 2026 — Apr 2026",
      tools: "Python, Jira, Browser Extensions, AI/ML APIs, Analytics Dashboards",
      language: "Python, JavaScript",
      role: "Engineer",
      responsibilities: [
        "Developed AI agent for automated Jira monitoring and sprint analysis.",
        "Bypassed API limits via browser-extension and session-based data collection mechanism.",
        "Built analytics dashboard for project health, productivity, and risk metrics.",
        "Automated AI-powered email summaries highlighting progress, blockers, and actionable insights.",
      ],
    },
  },
  {
    name: "Princess Cruises",
    subtitle: "Fleet Embedded Deployment",
    description: "Production deployment and embedded systems engineering across a 17-ship cruise fleet. Managed OTA rollout of LokAgent, DP-Monitor, and DoorPanel packages fleet-wide.",
    tech: ["Yocto Linux", "OTA", "ARM", "CI/CD", "Jenkins", "TeamCity", "Docker", "MID SDK"],
    metrics: [
      { label: "Ships Deployed", value: "17" },
      { label: "Deployment Method", value: "OTA" },
    ],
    detail: {
      duration: "April 2026 — Present",
      tools: "Yocto Project, Docker, CI/CD Pipelines, MID SDK (Android/Web/Unity), systemd, XS Device Platform, OTA Deployment",
      language: "Python, Bash, Linux (Ubuntu 20.04), ARMv7",
      role: "Senior Software Engineer",
      responsibilities: [
        "Led OTA deployment and upgrade management across a 17-ship cruise fleet.",
        "Built a Yocto (ARMv7) embedded Linux environment from scratch for shipboard door panel hardware.",
        "Designed CI/CD pipelines for Panel-UI and Panel-App; built and validated the MID SDK across Android, Web, and Unity targets.",
        "Developed and automated startup package generation workflows for cruise deployments.",
        "Designed device rules and version-based configuration mechanisms to enable mass deployment, automated provisioning, and scalable software rollout.",
        "Diagnosed and resolved production defects via log analysis and targeted package upgrades.",
      ],
    },
  },
  {
    name: "5G Network Stack",
    subtitle: "Core Network Engineering",
    description: "R&D at Reliance Jio focused on 5G SMF development. Built SIP Application Server framework, ASN Encoder/Decoder, XRUM/O-RAN block, and PHY-layer emulation (FAPI/nFAPI).",
    tech: ["SMF", "SIP", "O-RAN", "XRUM", "PHY Emulator", "ASN Codec", "C++", "Linux"],
    metrics: [
      { label: "Architecture", value: "3GPP R15/R16" },
      { label: "Interface", value: "O-RAN xRUM" },
    ],
    detail: {
      duration: "Jul 2020 — Oct 2024",
      tools: "Visual Studio, Git, MobaXterm, Perforce, Jenkins, SCons, TeamCity, CppUTest, Code Collaborator, Intel Inspector, BoundsChecker, JIRA, Confluence",
      language: "C/C++, Python, Linux",
      role: "Engineer",
      responsibilities: [
        "Captured SMF requirements and drove end-to-end development: design, coding, unit testing, debugging, and load testing of 5G core application modules.",
        "Built and validated SIP Application Server back-to-back framework and ASN Encoder/Decoder in C/C++ on Linux.",
        "Developed XRUM (ORUM) block on Samsung 5G DU for xRAN/O-RAN Remote Unit management via Netconf/Libncc, handling RU configuration, alarms, and performance stats.",
        "Designed and implemented PHY-layer emulation (FAPI/nFAPI) supporting DL/UL message processing for up to 8 concurrent UEs.",
        "Maintained SFN/slot-based timing synchronization at every slot boundary for accurate DL_TTI.req/TX_DATA.req forwarding.",
        "Automated unit testing with CppUTest; debugged memory leaks with Intel Inspector and BoundsChecker.",
        "Managed documentation, release cycles, and hotfixes across 5G feature deliveries.",
      ],
    },
  },
];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />

        {/* Modal Panel */}
        <motion.div
          className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0e0e0e] border border-white/10 rounded-2xl shadow-2xl"
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Header */}
          <div className="flex items-start justify-between p-8 border-b border-white/5">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-white/90">{project.name}</h2>
              <p className="text-primary font-sans text-sm tracking-widest uppercase mt-2">{project.subtitle}</p>
            </div>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-white transition-colors mt-1 ml-4 flex-shrink-0 p-1"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="p-8 flex flex-col gap-8">
            {/* Description */}
            <p className="text-muted-foreground text-lg leading-relaxed">{project.description}</p>

            {/* Meta Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <Calendar size={16} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-1">Duration</p>
                  <p className="text-white/80 text-sm">{project.detail.duration}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <User size={16} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-1">Role</p>
                  <p className="text-white/80 text-sm">{project.detail.role}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Code2 size={16} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-1">Languages</p>
                  <p className="text-white/80 text-sm">{project.detail.language}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Wrench size={16} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-1">Tools</p>
                  <p className="text-white/80 text-sm">{project.detail.tools}</p>
                </div>
              </div>
            </div>

            {/* Metrics */}
            {project.metrics.length > 0 && (
              <div className="flex flex-wrap gap-6 border-t border-white/5 pt-6">
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="text-2xl font-serif text-white/90">{m.value}</p>
                    <p className="text-xs font-sans text-muted-foreground uppercase tracking-widest mt-1">{m.label}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Responsibilities */}
            <div className="border-t border-white/5 pt-6">
              <p className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-5">Key Responsibilities</p>
              <ul className="flex flex-col gap-4">
                {project.detail.responsibilities.map((r, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                    <span className="text-primary mt-1 flex-shrink-0">›</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="border-t border-white/5 pt-6">
              <p className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-4">Tech Stack</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-sm font-sans tracking-wider text-white/40 uppercase">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ProjectItem({ project, i }: { project: Project; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        className="flex flex-col md:flex-row gap-8 md:gap-16 border-b border-white/5 pb-24 pt-8 cursor-pointer group"
        onClick={() => setOpen(true)}
      >
        <div className="md:w-1/2 flex flex-col gap-6">
          <div>
            <h3 className="text-3xl md:text-5xl font-serif text-white/90 leading-tight mb-2 group-hover:text-primary transition-colors duration-500">
              {project.name}
            </h3>
            <p className="text-primary font-sans text-base tracking-widest uppercase">
              {project.subtitle}
            </p>
          </div>
          <p className="text-muted-foreground leading-relaxed text-xl md:text-2xl max-w-2xl">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4">
            {project.tech.slice(0, 5).map((t) => (
              <span key={t} className="text-sm font-sans tracking-wider text-white/40 uppercase">{t}</span>
            ))}
          </div>
          <p className="text-xs font-sans text-muted-foreground/50 uppercase tracking-widest mt-2 group-hover:text-primary transition-colors">
            Click to view full details →
          </p>
        </div>

        <div className="md:w-1/2 flex flex-col justify-end gap-8 md:pl-16">
          <div className="grid grid-cols-2 gap-8">
            {project.metrics.map((m) => (
              <div key={m.label} className="flex flex-col gap-2">
                <p className="text-3xl font-serif text-white/80">{m.value}</p>
                <p className="text-xs font-sans text-muted-foreground uppercase tracking-widest">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {open && <ProjectModal project={project} onClose={() => setOpen(false)} />}
    </>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-40 max-w-7xl mx-auto px-6" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-serif text-white/90 mb-24"
      >
        Selected Works.
      </motion.h2>

      <div className="flex flex-col">
        {projects.map((project, i) => (
          <ProjectItem key={project.name} project={project} i={i} />
        ))}
      </div>
    </section>
  );
}
