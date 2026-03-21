import { useState } from "react";
import { motion } from "framer-motion";

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

const gridContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const gridItem = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

// Border classes for responsive grid dividers
const getCardBorder = (i: number) => {
  const last = scienceCards.length - 1;
  const isLast = i === last;
  const isTopRowMd = i < 2;
  const isLeftColMd = i % 2 === 0;
  return [
    "border-water/10",
    !isLast && "border-b",
    isLeftColMd && !isLast && "md:border-r",
    isTopRowMd && "md:border-b",
    !isTopRowMd && !isLast && "md:border-b-0",
    !isLast && "lg:border-r",
    !isLast && "lg:border-b-0",
  ]
    .filter(Boolean)
    .join(" ");
};

export default function ScienceSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="the-water" className="section-padding relative overflow-hidden" style={{ background: "linear-gradient(180deg, #0f1a24 0%, #1A1410 50%, #0f1a24 100%)" }}>
      {/* Ambient blue glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-water/[0.04] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow mb-4 text-center text-water">The Science</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-cream tracking-tight text-center text-balance mb-12 md:mb-16">
            The Science of <span className="text-water-light">Better Hydration</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 border border-water/10"
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {scienceCards.map((card, i) => (
            <motion.div
              key={card.num}
              variants={gridItem}
              className={`relative p-6 sm:p-8 md:p-10 group transition-colors duration-500 ${
                hoveredIdx === i ? "bg-water/[0.03]" : ""
              } ${getCardBorder(i)}`}
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
              <span className={`font-display text-6xl sm:text-7xl font-light absolute top-4 right-4 select-none transition-colors duration-500 ${
                hoveredIdx === i ? "text-water/10" : "text-water/[0.04]"
              }`}>
                {card.num}
              </span>

              <h3 className="font-display text-xl md:text-2xl font-light text-cream mt-10 sm:mt-12 mb-4 tracking-tight">
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
