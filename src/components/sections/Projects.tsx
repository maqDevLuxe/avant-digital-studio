import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Nebula Brand System",
    category: "Branding / Identity",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    year: "2025",
  },
  {
    title: "Prism E-Commerce",
    category: "Web Design / Development",
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    year: "2025",
  },
  {
    title: "Flux Motion Reel",
    category: "Motion / Film",
    img: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80",
    year: "2024",
  },
  {
    title: "Vertex App Platform",
    category: "Product Design / UX",
    img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
    year: "2024",
  },
  {
    title: "Onyx Campaign",
    category: "Digital Marketing",
    img: "https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?w=800&q=80",
    year: "2024",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-32" ref={ref}>
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-xs uppercase tracking-[0.3em] text-primary font-body mb-4"
        >
          Selected Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold"
        >
          Award-Winning<br />Projects
        </motion.h2>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex gap-6 px-6 md:px-12 pb-4"
          style={{ width: "max-content" }}
        >
          {projects.map((p, i) => (
            <div
              key={i}
              className="group relative w-[340px] md:w-[450px] flex-shrink-0 rounded-lg overflow-hidden"
              data-cursor="VIEW"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs text-primary font-body uppercase tracking-wider">{p.category}</span>
                <h3 className="text-xl md:text-2xl font-display font-bold mt-2">{p.title}</h3>
                <span className="text-xs text-muted-foreground font-body mt-1 block">{p.year}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
