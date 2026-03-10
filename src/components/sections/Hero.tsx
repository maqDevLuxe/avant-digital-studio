import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0" data-cursor="PLAY">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-40"
          poster="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-a-design-team-at-work-2683/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-base font-body uppercase tracking-[0.3em] text-muted-foreground mb-6"
        >
          Award-Winning Digital Studio
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-display font-bold leading-[0.9] tracking-tight"
          >
            We Create
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-display font-bold leading-[0.9] tracking-tight text-gradient-cyan"
          >
            Digital Magic
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-body"
        >
          Strategy. Design. Technology. We fuse them to build brands that
          resonate and digital experiences that captivate.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#work"
            className="px-8 py-4 bg-primary text-primary-foreground font-display font-semibold text-sm tracking-wider uppercase rounded-full hover:glow-cyan transition-all duration-300"
          >
            Explore Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-border text-foreground font-display font-semibold text-sm tracking-wider uppercase rounded-full hover:border-primary hover:text-primary transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-muted-foreground flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
