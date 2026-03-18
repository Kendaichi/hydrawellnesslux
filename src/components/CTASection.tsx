import { useRippleCanvas } from "@/hooks/useRippleCanvas";
import ScrollReveal from "./ScrollReveal";

export default function CTASection() {
  const canvasRef = useRippleCanvas("cta");

  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: "linear-gradient(135deg, #0f1a24 0%, #493423 50%, #0f1a24 100%)" }}
      />
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-water/[0.05] blur-[150px]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink/40 pointer-events-none" />

      <div className="relative z-10 text-center px-6">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-light text-cream tracking-tight text-balance mb-6">
            Experience <span className="bg-gradient-to-r from-water to-gold bg-clip-text text-transparent">HydraWellnessLux</span> Today
          </h2>
          <p className="font-body text-sm font-light text-cream/50 mb-10">
            Book a consultation · Request a demo · Begin your journey
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-3 font-body text-xs tracking-[0.15em] uppercase transition-all duration-300 rounded-sm bg-gradient-to-r from-water to-gold text-ink hover:shadow-[0_0_30px_rgba(123,184,204,0.3)]"
            >
              Book a Consultation
            </a>
            <a
              href="#lifestyle"
              className="px-8 py-3 border border-water/25 text-water/80 font-body text-xs tracking-[0.15em] uppercase hover:border-water hover:text-water hover:shadow-[0_0_20px_rgba(123,184,204,0.15)] transition-all duration-300 rounded-sm"
            >
              For Restaurants & Cafés
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
