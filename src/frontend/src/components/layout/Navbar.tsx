import { cn } from "@/lib/utils";
import { WHATSAPP_BASE_LINK } from "@/utils/productImages";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, MessageCircle, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-xs"
          : "bg-background/80 backdrop-blur-sm",
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0" aria-label="Rein Dear Home">
          <img
            src="/assets/Rein Dear BD profile.png"
            alt="Rein Dear"
            className="h-10 w-auto object-contain rounded-sm"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid="nav.link"
              className={cn(
                "font-body text-sm tracking-wide-xl uppercase link-underline transition-colors duration-200",
                location.pathname === link.to
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={WHATSAPP_BASE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="nav.whatsapp_button"
            className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 text-xs font-body font-semibold tracking-wider uppercase transition-all duration-200 hover:bg-[#20BA5A] hover:shadow-md"
          >
            <MessageCircle size={14} />
            অর্ডার করুন
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-foreground hover:text-gold transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  data-ocid="nav.link"
                  className={cn(
                    "font-body text-sm tracking-wide-xl uppercase transition-colors duration-200",
                    location.pathname === link.to
                      ? "text-foreground font-medium"
                      : "text-muted-foreground",
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={WHATSAPP_BASE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="nav.whatsapp_button"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3 text-sm font-body font-semibold tracking-wider uppercase mt-2"
              >
                <MessageCircle size={16} />
                WhatsApp-এ অর্ডার করুন
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
