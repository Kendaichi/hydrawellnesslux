const quickLinks = ["About", "The Water", "Lifestyle", "Testimonials", "Contact"];
const socialLinks = ["Instagram", "LinkedIn", "YouTube"];
const legalLinks = ["Privacy Policy", "Terms of Service", "Cookie Policy"];

export default function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <p className="font-display text-xl text-cream mb-2">HydraWellnessLux</p>
            <p className="font-display text-sm italic text-cream/40">Hydration, Elevated.</p>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-cream/30 mb-4">Navigate</p>
            <div className="flex flex-col gap-2">
              {quickLinks.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase().replace(/\s/g, "-")}`}
                  className="font-body text-xs text-cream/40 hover:text-gold transition-colors duration-300"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-cream/30 mb-4">Social</p>
            <div className="flex flex-col gap-2">
              {socialLinks.map((l) => (
                <a
                  key={l}
                  href="#"
                  className="font-body text-xs text-cream/40 hover:text-gold transition-colors duration-300"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-cream/30 mb-4">Legal</p>
            <div className="flex flex-col gap-2">
              {legalLinks.map((l) => (
                <a
                  key={l}
                  href="#"
                  className="font-body text-xs text-cream/40 hover:text-gold transition-colors duration-300"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gold/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-[10px] text-cream/30">
            © 2026 HydraWellnessLux. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-[10px] text-cream/30 hover:text-cream/50 transition-colors">
              Privacy
            </a>
            <a href="#" className="font-body text-[10px] text-cream/30 hover:text-cream/50 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
