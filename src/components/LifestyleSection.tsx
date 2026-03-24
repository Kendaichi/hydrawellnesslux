import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const tabs = {
  "For You": [
    { label: "Morning Ritual", title: "Morning Kick-Start", body: "Begin each day with hydrogen-rich alkaline water to energize your body, support digestion, and set the tone for optimal performance." },
    { label: "Fitness", title: "Pre & Post Workout", body: "Fuel your training with superior hydration. Kangen water supports faster recovery, reduced oxidative stress, and sustained endurance." },
    { label: "Recovery", title: "Post Cold Plunge", body: "After cold exposure therapy, replenish with micro-clustered Kangen water for deeper cellular absorption and accelerated recovery." },
    { label: "Evening", title: "Nightly Cleanse", body: "Support your body's natural detoxification process with clean, alkaline water before rest — promoting deeper, more restorative sleep." },
  ],
  "For Restaurants & Cafés": [
    { label: "Beverages", title: "Coffee & Tea", body: "Kangen water enhances extraction and flavor profiles, producing smoother coffee and more aromatic tea with every brew." },
    { label: "Cuisine", title: "Cooking & Produce", body: "Use strong Kangen water to clean produce and enhance flavors. Chefs report brighter colors, cleaner tastes, and improved texture." },
    { label: "Service", title: "Bottled Water Alternative", body: "Offer guests a premium, sustainable water experience. Eliminate plastic waste while elevating your establishment's commitment to quality." },
    { label: "Operations", title: "Natural Kitchen Cleaning", body: "Strong acidic Kangen water serves as a powerful, chemical-free sanitizer for surfaces, equipment, and produce preparation." },
  ],
};

type TabKey = keyof typeof tabs;

const cardContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};
const cardItem = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function LifestyleSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("For You");

  return (
    <section id="lifestyle" className="section-padding bg-parchment relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-water/[0.06] blur-[130px] pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="eyebrow mb-4 text-center text-water">Lifestyle</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-ink tracking-tight text-center text-balance mb-10 sm:mb-12">
            Integrated Into Your World
          </h2>
        </ScrollReveal>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-10 sm:mb-12">
          {(Object.keys(tabs) as TabKey[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-body text-xs tracking-[0.15em] uppercase pb-2 border-b-2 transition-all duration-300 whitespace-nowrap ${
                activeTab === tab
                  ? "text-water border-water"
                  : "text-ink/40 border-transparent hover:text-ink/60"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={cardContainer}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: -8, transition: { duration: 0.2 } }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
          >
            {tabs[activeTab].map((card) => (
              <motion.div
                key={card.title}
                variants={cardItem}
                className="bg-surface rounded-2xl p-6 sm:p-8 shadow-sm border border-sand/20 dark:border-cream/10 hover:shadow-md hover:border-water/30 transition-all duration-300 group"
              >
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-water mb-5 sm:mb-6">
                  {card.label}
                </p>
                <h3 className="font-display text-xl md:text-2xl font-light text-ink tracking-tight mb-4">
                  {card.title}
                </h3>
                <p className="font-body text-xs text-ink/70 leading-relaxed">
                  {card.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
