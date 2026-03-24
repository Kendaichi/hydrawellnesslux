import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.15 }}
      aria-label="Toggle dark mode"
      className="w-8 h-8 flex items-center justify-center text-ink/60 hover:text-water transition-colors duration-300"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </motion.button>
  );
}
