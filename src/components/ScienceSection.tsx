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
    <section id="the-water" className="section-padding relative overflow-hidden" style={{ background: "linear-gradient(180deg, #0f1a24 0%, #1A1410 50%, #0f1a24 100%)" }}>
      {/* Ambient blue glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-water/[0.04] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <p className="eyebrow mb-4 text-center text-water">The Science</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-cream tracking-tight text-center text-balance mb-16">
            The Science of <span className="text-water-light">Better Hydration</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 border border-water/10">
          {scienceCards.map((card, i) => (
            <ScrollReveal key={card.num} delay={i * 0.1}>
              <div
                className={`relative p-8 md:p-10 group transition-colors duration-500 ${
                  hoveredIdx === i ? "bg-water/[0.03]" : ""
                } ${
                  i < scienceCards.length - 1 ? "lg:border-r border-water/10" : ""
                } ${i < 2 ? "md:border-b lg:border-b-0 border-water/10" : ""}`}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Top glow on hover */}
                <div
                  className={`absolute top-0 left-0 right-0 h-px transition-all duration-500 ${
                    hoveredIdx === i ? "bg-water shadow-[0_0_20px_rgba(123,184,204,0.4)]" : "bg-transparent"
                  }`}
                />

                {/* Large faint number */}
                <span className={`font-display text-7xl font-light absolute top-4 right-4 select-none transition-colors duration-500 ${
                  hoveredIdx === i ? "text-water/10" : "text-water/[0.04]"
                }`}>
                  {card.num}
                </span>

                <h3 className="font-display text-xl md:text-2xl font-light text-cream mt-12 mb-4 tracking-tight">
                  {card.title}
                </h3>
                <p className="font-body text-xs font-light text-cream/50 leading-relaxed">
                  {card.body}
                </p>

                {/* Animated water-blue bar at bottom */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px]"
                  style={{ background: "linear-gradient(90deg, #7BB8CC, #C9A84C)" }}
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
