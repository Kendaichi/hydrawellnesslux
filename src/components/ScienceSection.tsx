import { motion } from "framer-motion";

const sourceCards = [
  {
    title: "What is Kangen Water?",
    body: "Kangen Water is ionized, hydrogen-rich, alkaline water produced through electrolysis. It restructures ordinary tap water into a powerful antioxidant hydration source.",
  },
  {
    title: "The Process",
    body: "Advanced platinum-coated titanium plates ionize water through electrolysis, separating it into alkaline and acidic streams. The result: restructured, micro-clustered water.",
  },
  {
    title: "Wellness Benefits",
    body: "Superior cellular hydration, potent antioxidant properties, pH balance support, and improved nutrient absorption — backed by decades of research.",
  },
  {
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

export default function ScienceSection() {
  return (
    <section id="the-water" className="section-padding relative overflow-hidden bg-parchment-deep">
      {/* Warm ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/[0.06] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow mb-4 text-center text-water">Your Water, Reimagined</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-ink tracking-tight text-center text-balance mb-12 md:mb-16">
            The Source of <span className="text-water italic">Better Hydration</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-5 sm:gap-6"
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {sourceCards.map((card) => (
            <motion.div
              key={card.title}
              variants={gridItem}
              className="group bg-surface rounded-2xl p-8 sm:p-10 shadow-sm border border-sand/20 dark:border-cream/10 hover:shadow-md hover:border-water/30 transition-all duration-500"
            >
              {/* Sage accent line */}
              <div className="w-8 h-0.5 rounded-full mb-6 transition-all duration-500 group-hover:w-14"
                style={{ background: "linear-gradient(90deg, #7BA99C, #C9A84C)" }}
              />

              <h3 className="font-display text-xl md:text-2xl font-light text-ink tracking-tight mb-4">
                {card.title}
              </h3>
              <p className="font-body text-sm text-ink/70 leading-relaxed">
                {card.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
