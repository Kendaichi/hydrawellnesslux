import { motion } from "framer-motion";

const items = [
  "Superior Hydration",
  "Antioxidant Rich",
  "Alkaline pH",
  "Eco Friendly",
  "Kangen Technology",
  "Wellness Elevated",
  "Premium Purity",
];

export default function MarqueeStrip() {
  const content = items.map((item, i) => (
    <span key={i} className="flex items-center gap-6 mx-6">
      <span className="font-body text-xs tracking-[0.15em] uppercase text-ink/60 whitespace-nowrap">
        {item}
      </span>
      <span className="w-1.5 h-1.5 rounded-full bg-water/50 flex-shrink-0" />
    </span>
  ));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative py-5 overflow-hidden border-y border-sand/20 bg-parchment-deep"
    >
      <div className="flex animate-marquee">
        <div className="flex">{content}</div>
        <div className="flex">{content}</div>
      </div>
    </motion.div>
  );
}
