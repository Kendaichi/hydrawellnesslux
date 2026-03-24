import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const values = ["Purity & Quality", "Wellness-Focused", "Premium Lifestyle", "Sustainability", "Integrity"];

const chipContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const chipItem = {
  hidden: { opacity: 0, scale: 0.88, y: 6 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-parchment relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[350px] h-[350px] rounded-full bg-gold/[0.06] blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* Left: decorative */}
        <ScrollReveal>
          <div className="relative">
            {/* Soft nested frames */}
            <div className="border border-sand/30 dark:border-cream/10 p-6 sm:p-8 md:p-12 rounded-2xl">
              <div className="border border-sand/20 dark:border-cream/[0.07] p-6 sm:p-8 md:p-12 relative min-h-[220px] sm:min-h-[300px] flex items-center justify-center rounded-xl">
                {/* Giant faint monogram */}
                <motion.span
                  animate={{ opacity: [0.06, 0.1, 0.06] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="font-display text-[80px] sm:text-[120px] md:text-[160px] font-light text-water select-none leading-none"
                >
                  HWL
                </motion.span>
              </div>
            </div>

            {/* Pull quote */}
            <div className="mt-8 sm:mt-10 border-l-2 border-water/40 pl-5 sm:pl-6">
              <p className="font-display text-base sm:text-lg md:text-xl italic text-ink/70 leading-relaxed">
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
            <p className="eyebrow mb-4 text-water">Our Story</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-ink tracking-tight text-balance mb-8">
              More Than <span className="text-water">Water.</span>
              <br />A Way of Life.
            </h2>
            <p className="font-body text-sm text-ink/70 leading-relaxed mb-6">
              HydraWellnessLux was born from a simple belief: that the water we drink should be as
              exceptional as the lives we lead. Through the advanced Kangen water ionization process,
              we deliver hydrogen-rich, alkaline water that supports your body, elevates your wellness
              routine, and complements a lifestyle of intention and refinement.
            </p>
            <p className="font-body text-sm text-ink/70 leading-relaxed mb-10">
              From world-class athletes to Michelin-starred kitchens, our water has become the
              foundation of peak performance and culinary excellence. This is not just hydration —
              it is a commitment to living better, every single day.
            </p>

            {/* Value chips */}
            <motion.div
              className="flex flex-wrap gap-2 sm:gap-3"
              variants={chipContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
            >
              {values.map((v) => (
                <motion.span
                  key={v}
                  variants={chipItem}
                  className="px-3 sm:px-4 py-2 border border-ink/20 text-ink/65 font-body text-xs tracking-[0.1em] uppercase rounded-lg hover:border-water hover:text-water transition-all duration-300 cursor-default"
                >
                  {v}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
