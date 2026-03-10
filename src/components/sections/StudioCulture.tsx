import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const StudioCulture = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const images = [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
  ];

  return (
    <section id="culture" className="py-32 px-6 md:px-12 max-w-7xl mx-auto" ref={ref}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-body mb-4">Behind the Scenes</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Studio<br />Culture
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-6 max-w-md">
            We're a collective of designers, developers, and dreamers united by an obsession
            with craft. Our studio thrives on collaboration, late-night breakthroughs, and
            the relentless pursuit of the extraordinary.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed max-w-md">
            From our open-plan workshop in the heart of the city, we shape the future of digital—one
            pixel at a time.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className={`overflow-hidden rounded-lg ${i === 0 ? "col-span-2" : ""}`}
              data-cursor="VIEW"
            >
              <img
                src={img}
                alt="Studio culture"
                className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudioCulture;
