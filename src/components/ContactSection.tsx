import { useState } from "react";
import { Mail, Phone, AtSign } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@hydrawellnesslux.com" },
  { icon: Phone, label: "Phone", value: "+1 (800) HWL-PURE" },
  { icon: AtSign, label: "Social", value: "@hydrawellnesslux" },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-ink">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-water/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-16 md:gap-20">
        {/* Left: form */}
        <ScrollReveal>
          <div>
            <p className="eyebrow mb-4 text-water">Connect</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-cream tracking-tight mb-12">
              Let's Begin Your
              <br /><span className="text-water-light italic">Wellness Journey</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8">
              {(["name", "email", "message"] as const).map((field) => (
                <div key={field}>
                  {field === "message" ? (
                    <textarea
                      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                      rows={3}
                      value={formData[field]}
                      onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                      className="w-full bg-transparent border-b border-cream/20 py-4 font-body text-sm text-cream placeholder:text-cream/30 focus:border-water transition-colors duration-300 outline-none resize-none"
                    />
                  ) : (
                    <input
                      type={field === "email" ? "email" : "text"}
                      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                      value={formData[field]}
                      onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                      className="w-full bg-transparent border-b border-cream/20 py-4 font-body text-sm text-cream placeholder:text-cream/30 focus:border-water transition-colors duration-300 outline-none"
                    />
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="px-8 py-3 font-body text-xs tracking-[0.15em] uppercase rounded-sm transition-all duration-300 bg-gradient-to-r from-water to-gold text-ink hover:shadow-[0_0_25px_rgba(123,184,204,0.3)]"
              >
                Send
              </button>
            </form>
          </div>
        </ScrollReveal>

        {/* Right: contact info */}
        <ScrollReveal delay={0.15}>
          <div className="flex flex-col justify-center gap-8 md:pl-10">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 border border-water/25 flex items-center justify-center flex-shrink-0">
                  <item.icon size={16} className="text-water" />
                </div>
                <div>
                  <p className="font-body text-[10px] tracking-[0.15em] uppercase text-cream/40 mb-1">
                    {item.label}
                  </p>
                  <p className="font-body text-sm text-cream/70">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
