import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", title: "Discovery", desc: "Deep-dive into your brand, audience, and vision through workshops and audits." },
  { num: "02", title: "Strategy", desc: "Craft a blueprint that aligns business goals with creative ambition." },
  { num: "03", title: "Design", desc: "Iterate rapidly on concepts, prototypes, and high-fidelity designs." },
  { num: "04", title: "Build", desc: "Engineer the experience with precision, performance, and scalability." },
  { num: "05", title: "Launch & Evolve", desc: "Deploy, measure, and continuously optimize for maximum impact." },
];

const CollaborationProcess = () => {
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
        <p className="text-xs uppercase tracking-[0.3em] text-accent font-body mb-4">How We Work</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
          Collaboration<br />Process
        </h2>
      </motion.div>

      <div className="space-y-0">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="group flex items-start gap-6 md:gap-10 py-8 border-b border-border hover:border-primary/30 transition-colors duration-500"
          >
            <span className="text-primary font-display font-bold text-sm md:text-base min-w-[2rem]">{s.num}</span>
            <div>
              <h3 className="text-xl md:text-2xl font-display font-bold group-hover:text-primary transition-colors duration-300">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground font-body mt-2 max-w-lg">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CollaborationProcess;
