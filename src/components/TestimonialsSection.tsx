import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote: "HydraWellnessLux changed how I approach recovery. The difference in my hydration, energy, and performance has been remarkable. It's now a non-negotiable part of my routine.",
    name: "Mia T.",
    role: "Professional Athlete",
  },
  {
    quote: "We switched to Kangen water in our café six months ago. Our coffee tastes smoother, our produce is cleaner, and our guests notice the quality. It's an upgrade across the board.",
    name: "Chef Ramon",
    role: "Café Owner & Executive Chef",
  },
  {
    quote: "As someone who's tried every wellness trend, this is the one that stuck. The water genuinely feels different — lighter, cleaner, more alive. I recommend it to everyone.",
    name: "Janelle F.",
    role: "Lifestyle Creator & Wellness Advocate",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding relative overflow-hidden" style={{ background: "linear-gradient(180deg, #0f1a24, #1A1410)" }}>
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-water/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <p className="eyebrow mb-4 text-center text-water">Stories</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-cream tracking-tight text-center text-balance mb-12 md:mb-16">
            Words from Those Who've <span className="text-water-light italic">Experienced It</span>
          </h2>
        </ScrollReveal>

        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              className="relative bg-ink-surface/40 border border-water/10 p-6 sm:p-8 md:p-10 group hover:border-water/25 transition-colors duration-500"
            >
              {/* Top shimmer line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-water/40 to-transparent group-hover:via-water/60 transition-all duration-500" />

              {/* Large quote mark */}
              <span className="font-display text-6xl text-water/10 leading-none select-none">"</span>

              <p className="font-display text-base md:text-lg italic text-cream/70 leading-relaxed mt-2 mb-8">
                {t.quote}
              </p>

              <p className="font-body text-xs tracking-[0.15em] uppercase text-water">
                {t.name}
              </p>
              <p className="font-body text-[10px] tracking-[0.1em] text-cream/40 mt-1">
                {t.role}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
