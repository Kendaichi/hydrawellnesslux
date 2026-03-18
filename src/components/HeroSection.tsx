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
        style={{ background: "radial-gradient(ellipse at 30% 50%, #0f1a24 0%, #0D0A07 50%, #0D0A07 100%)" }}
      />

      {/* Blue ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-water/[0.03] blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/5 w-[400px] h-[400px] rounded-full bg-water-light/[0.02] blur-[100px]" />
      </div>

      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow mb-8 text-water-light"
        >
          — Premium Kangen Water —
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-light text-6xl md:text-8xl lg:text-9xl tracking-tight text-cream text-balance"
        >
          Hydration,
          <br />
          <span className="italic bg-gradient-to-r from-water via-gold to-water-light bg-clip-text text-transparent">
            Elevated.
          </span>
        </motion.h1>

        {/* Thin vertical rule */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="w-px h-12 mx-auto my-8 origin-top"
          style={{ background: "linear-gradient(to bottom, #7BB8CC, #C9A84C)" }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="font-body text-[10px] tracking-[0.2em] uppercase text-water/60 mb-10"
        >
          Wellness in Every Drop
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group relative px-8 py-3 font-body text-xs tracking-[0.15em] uppercase overflow-hidden rounded-sm transition-all duration-300 bg-gradient-to-r from-water to-gold text-ink hover:shadow-[0_0_30px_rgba(123,184,204,0.3)]"
          >
            <span className="relative z-10">Experience HydraWellnessLux</span>
          </a>
          <a
            href="#the-water"
            className="px-8 py-3 border border-water/30 text-water/80 font-body text-xs tracking-[0.15em] uppercase hover:border-water hover:text-water hover:shadow-[0_0_20px_rgba(123,184,204,0.15)] transition-all duration-300 rounded-sm"
          >
            Discover the Science
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="font-body text-[9px] tracking-[0.3em] uppercase text-water/30">Scroll</span>
        <div className="w-px animate-scroll-line" style={{ background: "linear-gradient(to bottom, #7BB8CC, transparent)" }} />
      </div>
    </section>
  );
}
