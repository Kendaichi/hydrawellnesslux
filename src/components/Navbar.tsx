import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = ["About", "The Water", "Lifestyle", "Testimonials", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-md bg-parchment/90 shadow-sm" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-5">
        <a href="#" className="font-display text-xl md:text-2xl font-light text-ink tracking-tight">
          Hydra<span className="text-water">Wellness</span>Lux
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
              className="font-body text-xs tracking-[0.15em] uppercase text-ink/65 hover:text-water transition-colors duration-300"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-5 py-2 border border-water/50 text-water text-xs tracking-[0.15em] uppercase hover:bg-water hover:text-white transition-all duration-300 rounded-lg"
          >
            Discover Kangen
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-ink">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-water/15 to-transparent" />

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-parchment/97 backdrop-blur-md overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                  onClick={() => setMobileOpen(false)}
                  className="font-body text-xs tracking-[0.15em] uppercase text-ink/65 hover:text-water transition-colors"
                >
                  {link}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-5 py-2 border border-water/50 text-water text-xs tracking-[0.15em] uppercase text-center hover:bg-water hover:text-white transition-all duration-300 rounded-lg"
              >
                Discover Kangen
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
