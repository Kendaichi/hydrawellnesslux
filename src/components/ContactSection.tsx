import { useState } from "react";
import { Mail, Phone, AtSign } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const contactInfo = [
  { icon: Mail, label: "Email", value: "kiona@hydraluxwellnesskbl.com" },
  { icon: Phone, label: "Phone", value: "+1 (800) HWL-PURE" },
  { icon: AtSign, label: "Social", value: "@hydrawellnesslux" },
];

const infoContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const infoItem = {
  hidden: { opacity: 0, x: 20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await fetch(import.meta.env.VITE_GOOGLE_SHEET_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        form_type: "contact",
        sheet_name: "hydrawellnesslux",
        ...formData,
      }),
    });
    setLoading(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden bg-section-e grain"
    >
      {/* Animated ambient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.05, 0.09, 0.05], x: [0, 25, 0], y: [0, -20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.08, 0.04], x: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 7 }}
          className="absolute top-[20%] right-[5%] w-[320px] h-[320px] rounded-full bg-water blur-[110px]"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 md:gap-20">
        {/* Left: form */}
        <ScrollReveal>
          <div>
            <p className="eyebrow mb-4 text-water">Connect</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-ink tracking-tight mb-10 sm:mb-12">
              Let's Begin Your
              <br />
              <span className="text-water italic">Wellness Journey</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {(["name", "email", "message"] as const).map((field) => (
                <motion.div key={field}>
                  {field === "message" ? (
                    <textarea
                      placeholder={
                        field.charAt(0).toUpperCase() + field.slice(1)
                      }
                      rows={3}
                      value={formData[field]}
                      onChange={(e) =>
                        setFormData({ ...formData, [field]: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-ink/20 py-4 font-body text-sm text-ink placeholder:text-ink/35 focus:border-water transition-colors duration-300 outline-none resize-none"
                    />
                  ) : (
                    <input
                      type={field === "email" ? "email" : "text"}
                      placeholder={
                        field.charAt(0).toUpperCase() + field.slice(1)
                      }
                      value={formData[field]}
                      onChange={(e) =>
                        setFormData({ ...formData, [field]: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-ink/20 py-4 font-body text-sm text-ink placeholder:text-ink/35 focus:border-water transition-colors duration-300 outline-none"
                    />
                  )}
                </motion.div>
              ))}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                disabled={loading || submitted}
                className="px-8 py-3 font-body text-xs tracking-[0.15em] uppercase rounded-lg transition-all duration-300 bg-gradient-to-r from-water to-gold text-white hover:shadow-[0_8px_30px_rgba(123,169,156,0.35)] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : submitted ? "Sent" : "Send"}
              </motion.button>
            </form>
          </div>
        </ScrollReveal>

        {/* Right: contact info */}
        <motion.div
          className="flex flex-col justify-center gap-6 sm:gap-8 md:pl-10"
          variants={infoContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          {contactInfo.map((item) => (
            <motion.div
              key={item.label}
              variants={infoItem}
              className="flex items-start gap-4"
            >
              <div className="w-10 h-10 border border-water/30 rounded-xl flex items-center justify-center flex-shrink-0 bg-surface shadow-sm">
                <item.icon size={16} className="text-water" />
              </div>
              <div>
                <p className="font-body text-xs tracking-[0.1em] uppercase text-ink/60 mb-1">
                  {item.label}
                </p>
                <p className="font-body text-sm text-ink/65">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
