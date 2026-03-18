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
    // placeholder
  };

  return (
    <section id="contact" className="section-padding bg-ink">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-20">
        {/* Left: form */}
        <ScrollReveal>
          <div>
            <p className="eyebrow mb-4">Connect</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-cream tracking-tight mb-12">
              Let's Begin Your
              <br />Wellness Journey
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
                      className="w-full bg-transparent border-b border-cream/20 py-4 font-body text-sm text-cream placeholder:text-cream/30 focus:border-gold transition-colors duration-300 outline-none resize-none"
                    />
                  ) : (
                    <input
                      type={field === "email" ? "email" : "text"}
                      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                      value={formData[field]}
                      onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                      className="w-full bg-transparent border-b border-cream/20 py-4 font-body text-sm text-cream placeholder:text-cream/30 focus:border-gold transition-colors duration-300 outline-none"
                    />
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="px-8 py-3 bg-gold text-ink font-body text-xs tracking-[0.15em] uppercase hover:bg-gold-bright transition-colors duration-300 rounded-sm"
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
                <div className="w-10 h-10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <item.icon size={16} className="text-gold" />
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
