import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const scienceCards = [
  {
    num: "01",
    title: "What is Kangen Water?",
    body: "Kangen Water is ionized, hydrogen-rich, alkaline water produced through electrolysis. It restructures ordinary tap water into a powerful antioxidant hydration source.",
  },
  {
    num: "02",
    title: "The Process",
    body: "Advanced platinum-coated titanium plates ionize water through electrolysis, separating it into alkaline and acidic streams. The result: restructured, micro-clustered water.",
  },
  {
    num: "03",
    title: "Wellness Benefits",
    body: "Superior cellular hydration, potent antioxidant properties, pH balance support, and improved nutrient absorption — backed by decades of research.",
  },
  {
    num: "04",
    title: "Culinary Excellence",
    body: "Chefs worldwide use Kangen water to enhance flavors, improve food prep, and create cleaner cooking environments. Taste the difference in every dish.",
  },
];

export default function ScienceSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="the-water" className="section-padding bg-ink-light">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="eyebrow mb-4 text-center">The Science</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-cream tracking-tight text-center text-balance mb-16">
            The Science of Better Hydration
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 border border-gold/10">
          {scienceCards.map((card, i) => (
            <ScrollReveal key={card.num} delay={i * 0.1}>
              <div
                className={`relative p-8 md:p-10 group ${
                  i < scienceCards.length - 1 ? "lg:border-r border-gold/10" : ""
                } ${i < 2 ? "md:border-b lg:border-b-0 border-gold/10" : ""}`}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Top glow on hover */}
                <div
                  className={`absolute top-0 left-0 right-0 h-px transition-all duration-500 ${
                    hoveredIdx === i ? "bg-water shadow-[0_0_15px_rgba(123,184,204,0.3)]" : "bg-transparent"
                  }`}
                />

                {/* Large faint number */}
                <span className="font-display text-7xl font-light text-gold/[0.06] absolute top-4 right-4 select-none">
                  {card.num}
                </span>

                <h3 className="font-display text-xl md:text-2xl font-light text-cream mt-12 mb-4 tracking-tight">
                  {card.title}
                </h3>
                <p className="font-body text-xs font-light text-cream/50 leading-relaxed">
                  {card.body}
                </p>

                {/* Animated gold bar at bottom */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-gold"
                  initial={{ width: "0%" }}
                  animate={{ width: hoveredIdx === i ? "100%" : "0%" }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
