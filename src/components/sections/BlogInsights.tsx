import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const posts = [
  {
    title: "The Future of Spatial Design in 2026",
    tag: "Design",
    date: "Mar 5, 2026",
    img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80",
  },
  {
    title: "Why Motion Design is the New Branding",
    tag: "Motion",
    date: "Feb 20, 2026",
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80",
  },
  {
    title: "Building for the Next Billion Users",
    tag: "Engineering",
    date: "Feb 10, 2026",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
  },
];

const BlogInsights = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="insights" className="py-32 px-6 md:px-12 max-w-7xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-body mb-4">Insights</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">Design Journal</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            className="group cursor-none"
            data-cursor="VIEW"
          >
            <div className="overflow-hidden rounded-lg mb-4">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <span className="text-xs text-primary font-body uppercase tracking-wider">{p.tag}</span>
            <h3 className="text-lg font-display font-bold mt-2 group-hover:text-primary transition-colors duration-300">
              {p.title}
            </h3>
            <p className="text-xs text-muted-foreground font-body mt-2">{p.date}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default BlogInsights;
