import { WHATSAPP_BASE_LINK } from "@/utils/productImages";
import { Link } from "@tanstack/react-router";
import { Heart, MessageCircle } from "lucide-react";
import { SiFacebook, SiInstagram } from "react-icons/si";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const caffeineHost =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-foreground text-background/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="space-y-5">
            <img
              src="/assets/generated/logo-transparent.dim_600x200.png"
              alt="Rein Dear"
              className="h-10 w-auto object-contain brightness-0 invert opacity-90"
            />
            <p className="font-display text-base italic text-background/60 leading-relaxed">
              "Crafted for the Discerning Few"
            </p>
            <div className="flex items-center gap-4 pt-2">
              <span
                aria-label="Instagram"
                className="text-background/50 hover:text-gold transition-colors duration-200 cursor-pointer"
              >
                <SiInstagram size={18} />
              </span>
              <span
                aria-label="Facebook"
                className="text-background/50 hover:text-gold transition-colors duration-200 cursor-pointer"
              >
                <SiFacebook size={18} />
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-5">
            <h4 className="font-body text-xs tracking-luxury uppercase text-background/40 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body text-sm text-background/70 hover:text-gold transition-colors duration-200 link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h4 className="font-body text-xs tracking-luxury uppercase text-background/40 font-semibold">
              Order via WhatsApp
            </h4>
            <a
              href={WHATSAPP_BASE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#25D366] hover:text-[#4ADE80] transition-colors duration-200 group"
            >
              <div className="p-2 border border-[#25D366]/30 group-hover:border-[#4ADE80]/50 transition-colors">
                <MessageCircle size={18} />
              </div>
              <div>
                <p className="font-body text-sm font-medium">
                  +880 1924 805015
                </p>
                <p className="font-body text-xs text-background/40 mt-0.5">
                  Click to chat
                </p>
              </div>
            </a>
            <div className="pt-4 border-t border-background/10">
              <p className="font-body text-xs text-background/30 leading-relaxed">
                We deliver across Bangladesh. <br />
                Delivery in 2–5 business days.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-background/30 tracking-wide">
            © {currentYear} Rein Dear. All rights reserved.
          </p>
          <p className="font-body text-xs text-background/30">
            Built with <Heart size={10} className="inline text-red-400" /> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(caffeineHost)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors duration-200"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
