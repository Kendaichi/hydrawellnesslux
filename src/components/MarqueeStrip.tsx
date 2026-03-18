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
      <span className="w-1 h-1 rounded-full bg-gold/60 flex-shrink-0" />
    </span>
  ));

  return (
    <div className="relative bg-brown py-5 overflow-hidden border-y border-gold/15">
      <div className="flex animate-marquee">
        <div className="flex">{content}</div>
        <div className="flex">{content}</div>
      </div>
    </div>
  );
}
