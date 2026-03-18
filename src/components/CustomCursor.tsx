import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-gold rounded-full pointer-events-none z-[9999]"
        style={{ transform: `translate(${pos.x - 4}px, ${pos.y - 4}px)`, mixBlendMode: "difference" }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-gold/50 rounded-full pointer-events-none z-[9999]"
        animate={{ x: pos.x - 16, y: pos.y - 16 }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
        style={{ mixBlendMode: "difference" }}
      />
    </>
  );
}
