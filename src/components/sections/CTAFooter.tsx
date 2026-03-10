import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const MagneticButton = ({ children }: { children: React.ReactNode }) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const btnRef = useRef<HTMLAnchorElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setOffset({ x, y });
  };

  const handleLeave = () => setOffset({ x: 0, y: 0 });

  return (
    <motion.a
      ref={btnRef}
      href="#contact"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="inline-flex items-center justify-center w-48 h-48 md:w-56 md:h-56 rounded-full bg-primary text-primary-foreground font-display font-bold text-lg md:text-xl tracking-wider uppercase hover:glow-cyan transition-shadow duration-500"
    >
      {children}
    </motion.a>
  );
};

const CTAFooter = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref}>
      {/* CTA */}
      <div className="py-32 flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4">
            Let's Create<br />
            <span className="text-gradient-mixed">Something Bold</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-md mx-auto mb-12">
            Ready to push boundaries? We're always open to ambitious projects and forward-thinking partnerships.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <MagneticButton>Start a Project</MagneticButton>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="font-display text-xl font-bold">
            AXIOM<span className="text-primary">.</span>
          </div>
          <div className="flex gap-8">
            {["Twitter", "Instagram", "Dribbble", "LinkedIn"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors font-body uppercase tracking-wider"
              >
                {s}
              </a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground font-body">
            © 2026 AXIOM Studio. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default CTAFooter;
