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
      <span className="font-body text-xs tracking-[0.2em] uppercase text-cream/60 whitespace-nowrap">
        {item}
      </span>
      <span className="w-1.5 h-1.5 rounded-full bg-water/50 flex-shrink-0 shadow-[0_0_6px_rgba(123,184,204,0.4)]" />
    </span>
  ));

  return (
    <div className="relative py-5 overflow-hidden border-y border-water/10" style={{ background: "linear-gradient(90deg, #0f1a24, #1a1410, #0f1a24)" }}>
      <div className="flex animate-marquee">
        <div className="flex">{content}</div>
        <div className="flex">{content}</div>
      </div>
    </div>
  );
}
