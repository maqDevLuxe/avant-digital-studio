import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hoverType, setHoverType] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const media = target.closest("[data-cursor]");
      if (media) {
        setHoverType(media.getAttribute("data-cursor"));
      }
    };
    const handleOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("[data-cursor]")) {
        setHoverType(null);
      }
    };
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mouseout", handleOut);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleOut);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [visible]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: pos.x - (hoverType ? 40 : 8),
          y: pos.y - (hoverType ? 40 : 8),
          width: hoverType ? 80 : 16,
          height: hoverType ? 80 : 16,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <div className="w-full h-full rounded-full bg-foreground flex items-center justify-center">
          {hoverType && (
            <span className="text-background text-xs font-display font-semibold tracking-wider uppercase">
              {hoverType}
            </span>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default CustomCursor;
