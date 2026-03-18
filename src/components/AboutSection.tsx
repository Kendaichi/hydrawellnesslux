import ScrollReveal from "./ScrollReveal";

const values = ["Purity & Quality", "Wellness-Focused", "Premium Lifestyle", "Sustainability", "Integrity"];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-ink relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[350px] h-[350px] rounded-full bg-water/[0.02] blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-20 items-start">
        {/* Left: decorative */}
        <ScrollReveal>
          <div className="relative">
            {/* Nested gold frames */}
            <div className="border border-water/15 p-8 md:p-12">
              <div className="border border-water/10 p-8 md:p-12 relative min-h-[300px] flex items-center justify-center">
                {/* Giant faint monogram */}
                <span className="font-display text-[120px] md:text-[180px] font-light text-water/[0.06] select-none leading-none">
                  HWL
                </span>
              </div>
            </div>

            {/* Pull quote */}
            <div className="mt-10 border-l-2 border-gold/40 pl-6">
              <p className="font-display text-lg md:text-xl italic text-cream/80 leading-relaxed">
                "Elevating hydration, enhancing wellness, and creating a lifestyle that thrives."
              </p>
              <p className="mt-4 font-body text-xs tracking-[0.15em] uppercase text-gold">
                — Kiona, Founder
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Right: content */}
        <ScrollReveal delay={0.15}>
          <div>
            <p className="eyebrow mb-4">Our Story</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-cream tracking-tight text-balance mb-8">
              More Than Water.
              <br />A Way of Life.
            </h2>
            <p className="font-body text-sm font-light text-cream/60 leading-relaxed mb-6">
              HydraWellnessLux was born from a simple belief: that the water we drink should be as
              exceptional as the lives we lead. Through the advanced Kangen water ionization process,
              we deliver hydrogen-rich, alkaline water that supports your body, elevates your wellness
              routine, and complements a lifestyle of intention and refinement.
            </p>
            <p className="font-body text-sm font-light text-cream/60 leading-relaxed mb-10">
              From world-class athletes to Michelin-starred kitchens, our water has become the
              foundation of peak performance and culinary excellence. This is not just hydration —
              it is a commitment to living better, every single day.
            </p>

            {/* Value chips */}
            <div className="flex flex-wrap gap-3">
              {values.map((v) => (
                <span
                  key={v}
                  className="px-4 py-2 border border-cream/15 text-cream/50 font-body text-[10px] tracking-[0.15em] uppercase rounded-sm hover:border-water hover:text-water transition-all duration-300"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
