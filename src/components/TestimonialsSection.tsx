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
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding relative overflow-hidden bg-section-d grain">
      {/* Animated ambient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.05, 0.09, 0.05], x: [0, -40, 0], y: [0, 20, 0] }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-gold blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.08, 0.04], x: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute top-[10%] left-[5%] w-[300px] h-[300px] rounded-full bg-water blur-[110px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.06, 0.03], y: [0, -30, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 8 }}
          className="absolute bottom-[10%] left-1/2 w-[250px] h-[250px] rounded-full bg-gold blur-[100px]"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <p className="eyebrow mb-4 text-center text-water">Stories</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-ink tracking-tight text-center text-balance mb-12 md:mb-16">
            Words from Those Who've <span className="text-water italic">Experienced It</span>
          </h2>
        </ScrollReveal>

        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              className="relative bg-surface rounded-2xl border border-sand/20 dark:border-cream/10 p-6 sm:p-8 md:p-10 group hover:border-water/30 hover:shadow-md transition-all duration-500"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl bg-gradient-to-r from-transparent via-water/30 to-transparent group-hover:via-water/50 transition-all duration-500" />

              {/* Large quote mark */}
              <span className="font-display text-6xl text-gold/20 leading-none select-none">"</span>

              <p className="font-display text-base md:text-lg italic text-ink/90 leading-relaxed mt-2 mb-8">
                {t.quote}
              </p>

              <p className="font-body text-xs tracking-[0.15em] uppercase text-water">
                {t.name}
              </p>
              <p className="font-body text-xs text-ink/85 mt-1">
                {t.role}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
