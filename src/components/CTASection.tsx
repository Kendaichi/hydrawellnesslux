import { useRippleCanvas } from "@/hooks/useRippleCanvas";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function CTASection() {
  const canvasRef = useRippleCanvas("cta");

  return (
    <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: "linear-gradient(135deg, #0f1a24 0%, #493423 50%, #0f1a24 100%)" }}
      />
      {/* Animated ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.08, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] rounded-full bg-water blur-[150px]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink/40 pointer-events-none" />

      <div className="relative z-10 text-center px-4 sm:px-6">
        <ScrollReveal>
          <motion.h2
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light text-cream tracking-tight text-balance mb-6"
          >
            Experience <span className="bg-gradient-to-r from-water to-gold bg-clip-text text-transparent">HydraWellnessLux</span> Today
          </motion.h2>
          <p className="font-body text-sm font-light text-cream/50 mb-8 sm:mb-10">
            Book a consultation · Request a demo · Begin your journey
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 sm:py-3 font-body text-xs tracking-[0.15em] uppercase transition-all duration-300 rounded-sm bg-gradient-to-r from-water to-gold text-ink hover:shadow-[0_0_30px_rgba(123,184,204,0.3)] text-center"
            >
              Book a Consultation
            </a>
            <a
              href="#lifestyle"
              className="w-full sm:w-auto px-8 py-3.5 sm:py-3 border border-water/25 text-water/80 font-body text-xs tracking-[0.15em] uppercase hover:border-water hover:text-water hover:shadow-[0_0_20px_rgba(123,184,204,0.15)] transition-all duration-300 rounded-sm text-center"
            >
              For Restaurants & Cafés
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
