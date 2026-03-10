import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 42, suffix: "", label: "Awards Won" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 12, suffix: "", label: "Years of Craft" },
];

const Counter = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const StatCounters = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 border-y border-border" ref={ref}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-12 max-w-7xl mx-auto">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="text-center"
          >
            <div className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-gradient-cyan">
              <Counter target={s.value} suffix={s.suffix} inView={inView} />
            </div>
            <p className="text-xs md:text-sm text-muted-foreground font-body uppercase tracking-wider mt-3">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatCounters;
