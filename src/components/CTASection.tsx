import { useRippleCanvas } from "@/hooks/useRippleCanvas";
import ScrollReveal from "./ScrollReveal";

export default function CTASection() {
  const canvasRef = useRippleCanvas("rgba(201, 168, 76, 0.08)");

  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: "#493423" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brown/60 via-transparent to-brown/60 pointer-events-none" />

      <div className="relative z-10 text-center px-6">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-light text-cream tracking-tight text-balance mb-6">
            Experience HydraWellnessLux Today
          </h2>
          <p className="font-body text-sm font-light text-cream/50 mb-10">
            Book a consultation · Request a demo · Begin your journey
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-gold text-ink font-body text-xs tracking-[0.15em] uppercase hover:bg-gold-bright transition-colors duration-300 rounded-sm"
            >
              Book a Consultation
            </a>
            <a
              href="#lifestyle"
              className="px-8 py-3 border border-cream/20 text-cream/70 font-body text-xs tracking-[0.15em] uppercase hover:border-gold hover:text-gold transition-all duration-300 rounded-sm"
            >
              For Restaurants & Cafés
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
