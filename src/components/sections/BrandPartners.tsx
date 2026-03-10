import { motion } from "framer-motion";

const brands = [
  "Google", "Apple", "Nike", "Spotify", "Tesla", "Netflix", "Adobe", "Meta",
  "Google", "Apple", "Nike", "Spotify", "Tesla", "Netflix", "Adobe", "Meta",
];

const BrandPartners = () => {
  return (
    <section className="py-20 border-y border-border overflow-hidden">
      <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-12 font-body">
        Trusted by Global Brands
      </p>
      <div className="flex animate-marquee whitespace-nowrap">
        {brands.map((brand, i) => (
          <span
            key={i}
            className="mx-12 text-2xl md:text-3xl font-display font-bold text-muted-foreground/30 hover:text-muted-foreground transition-colors duration-500 select-none"
          >
            {brand}
          </span>
        ))}
      </div>
    </section>
  );
};

export default BrandPartners;
