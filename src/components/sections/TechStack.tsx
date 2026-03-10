import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const techs = [
  { name: "React", desc: "Component-driven UIs" },
  { name: "Next.js", desc: "Full-stack framework" },
  { name: "Three.js", desc: "3D web experiences" },
  { name: "Figma", desc: "Design systems at scale" },
  { name: "GSAP", desc: "High-performance animation" },
  { name: "Framer Motion", desc: "Declarative motion" },
  { name: "TypeScript", desc: "Type-safe engineering" },
  { name: "Tailwind CSS", desc: "Utility-first styling" },
];

const TechStack = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-body mb-4">Our Arsenal</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">Tech Stack</h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {techs.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group border border-border rounded-lg p-6 hover:border-primary/50 hover:bg-card transition-all duration-500"
          >
            <h3 className="font-display font-bold text-lg group-hover:text-primary transition-colors">{t.name}</h3>
            <p className="text-xs text-muted-foreground font-body mt-2">{t.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
