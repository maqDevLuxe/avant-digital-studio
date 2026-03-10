import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    num: "01",
    title: "Brand Strategy",
    desc: "Defining the DNA of your brand through research, positioning, and narrative architecture.",
    img: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&q=80",
  },
  {
    num: "02",
    title: "Digital Design",
    desc: "Crafting pixel-perfect interfaces and immersive visual systems that captivate and convert.",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
  },
  {
    num: "03",
    title: "Web Development",
    desc: "Engineering performant, scalable web platforms with cutting-edge technologies.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
  {
    num: "04",
    title: "Motion & Film",
    desc: "Bringing stories to life through cinematic motion design and showreels.",
    img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80",
  },
];

const CreativeServices = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 px-6 md:px-12 max-w-7xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-body mb-4">What We Do</p>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-20">
          Creative<br />Services
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 80 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            className={`group relative overflow-hidden rounded-lg bg-card border border-border p-8 ${
              i === 0 ? "md:row-span-2 md:min-h-[500px]" : ""
            }`}
            data-cursor="VIEW"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
              <img src={s.img} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="relative z-10">
              <span className="text-primary font-display text-sm font-semibold">{s.num}</span>
              <h3 className="text-2xl md:text-3xl font-display font-bold mt-4 mb-4 group-hover:text-primary transition-colors duration-300">
                {s.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-md">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CreativeServices;
