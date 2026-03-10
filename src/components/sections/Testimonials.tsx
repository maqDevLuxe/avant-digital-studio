import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "AXIOM redefined what we thought was possible for our brand. They didn't just deliver a website—they crafted a universe.",
    name: "Sarah Chen",
    role: "CMO, TechCorp Global",
  },
  {
    quote: "Working with them felt like having a creative partner who truly understood our DNA. The results speak for themselves.",
    name: "Marcus Rivera",
    role: "Founder, Vertex Labs",
  },
  {
    quote: "The attention to detail and strategic thinking behind every decision made AXIOM the obvious choice. Best investment we've made.",
    name: "Elena Volkov",
    role: "VP Design, NovaBrand",
  },
];

const Testimonials = () => {
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
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-body mb-4">Testimonials</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
          What Leaders<br />Say
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            className="border border-border rounded-lg p-8 hover:border-primary/30 transition-all duration-500"
          >
            <p className="text-foreground font-body leading-relaxed text-sm mb-8 italic">"{t.quote}"</p>
            <div>
              <p className="font-display font-bold text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground font-body mt-1">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
