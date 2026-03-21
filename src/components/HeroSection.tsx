import { useRippleCanvas } from "@/hooks/useRippleCanvas";
import { motion } from "framer-motion";

export default function HeroSection() {
  const canvasRef = useRippleCanvas("hero");

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, #0f1a24 0%, #0D0A07 50%, #0D0A07 100%)",
        }}
      />

      {/* Animated ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.055, 0.03] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-water blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.02, 0.04, 0.02] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-1/3 left-1/5 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full bg-water-light blur-[100px]"
        />
      </div>

      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow mb-6 sm:mb-8 text-water-light"
        >
          — Premium Kangen Water —
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-light text-5xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tight text-cream text-balance"
        >
          Feel Better, Live Lighter,
          <br />
          <span className="italic bg-gradient-to-r from-water via-gold to-water-light bg-clip-text text-transparent">
            Hydrate Differently.
          </span>
        </motion.h1>

        {/* Thin vertical rule */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="w-px h-10 sm:h-12 mx-auto my-6 sm:my-8 origin-top"
          style={{ background: "linear-gradient(to bottom, #7BB8CC, #C9A84C)" }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="font-body text-[10px] tracking-[0.2em] uppercase text-water/60 mb-8 sm:mb-10"
        >
          This isn't just water - it's a daily wellness upgrade designed to
          support your energy, lifestyle, and overall well-being.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="#contact"
            className="group relative w-full sm:w-auto px-8 py-3.5 sm:py-3 font-body text-xs tracking-[0.15em] uppercase overflow-hidden rounded-sm transition-all duration-300 bg-gradient-to-r from-water to-gold text-ink hover:shadow-[0_0_30px_rgba(123,184,204,0.3)] text-center"
          >
            <span className="relative z-10">Start Your Wellness Journey</span>
          </a>
          <a
            href="#the-water"
            className="w-full sm:w-auto px-8 py-3.5 sm:py-3 border border-water/30 text-water/80 font-body text-xs tracking-[0.15em] uppercase hover:border-water hover:text-water hover:shadow-[0_0_20px_rgba(123,184,204,0.15)] transition-all duration-300 rounded-sm text-center"
          >
            Discover the Science
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="font-body text-[9px] tracking-[0.3em] uppercase text-water/30">
          Scroll
        </span>
        <div
          className="w-px animate-scroll-line"
          style={{
            background: "linear-gradient(to bottom, #7BB8CC, transparent)",
          }}
        />
      </div>
    </section>
  );
}
