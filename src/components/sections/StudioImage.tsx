import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const StudioImage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 px-6 md:px-0" ref={ref}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-[100vw] overflow-hidden rounded-none md:rounded-lg md:mx-auto md:max-w-7xl"
        data-cursor="VIEW"
      >
        <img
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80"
          alt="AXIOM Studio workspace"
          className="w-full h-[50vh] md:h-[70vh] object-cover"
          loading="lazy"
        />
      </motion.div>
    </section>
  );
};

export default StudioImage;
