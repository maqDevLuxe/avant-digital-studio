import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Manifesto = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const words = "We don't follow trends. We set them. Every pixel, every interaction, every line of code is a deliberate act of defiance against the ordinary.".split(" ");

  return (
    <section className="py-32 px-6 md:px-12 max-w-6xl mx-auto" ref={ref}>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="text-xs uppercase tracking-[0.3em] text-accent font-body mb-12"
      >
        Our Manifesto
      </motion.p>
      <p className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
            <motion.span
              className="inline-block"
              initial={{ y: "100%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </p>
    </section>
  );
};

export default Manifesto;
