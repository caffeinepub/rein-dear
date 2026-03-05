import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitInquiry } from "@/hooks/useQueries";
import { WHATSAPP_BASE_LINK } from "@/utils/productImages";
import { CheckCircle, Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const PRODUCTS = [
  "Sunglasses",
  "Money Bag",
  "Luxury Diary",
  "Pen",
  "Watch",
  "Other",
];

const FAQ_ITEMS = [
  {
    q: "How do I place an order?",
    a: "Simply browse our collection, click the WhatsApp button on any product, and send us a message. We'll confirm availability and delivery details promptly.",
  },
  {
    q: "What areas do you deliver to?",
    a: "We deliver across Bangladesh. Delivery details including address, timing, and charges will be discussed over WhatsApp.",
  },
  {
    q: "Are the products authentic?",
    a: "Yes, all Rein Dear products are 100% authentic and carefully curated for quality. We take pride in the integrity of everything we offer.",
  },
  {
    q: "How long does delivery take?",
    a: "Usually 2–5 business days depending on your location in Bangladesh. We'll keep you updated every step of the way.",
  },
  {
    q: "Can I return a product?",
    a: "Please contact us within 24 hours of receiving your order if there's an issue. We handle each case with care and want you to be completely satisfied.",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    productName: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { mutateAsync: submitInquiry, isPending } = useSubmitInquiry();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message || !form.productName) return;

    try {
      await submitInquiry({
        name: form.name,
        phone: form.phone,
        message: form.message,
        productName: form.productName,
      });
      setSubmitted(true);
      setForm({ name: "", phone: "", productName: "", message: "" });
    } catch (err) {
      console.error("Inquiry submission error:", err);
    }
  };

  return (
    <main className="pt-24 min-h-screen">
      {/* ── Header ─────────────────────────────────────────── */}
      <section className="py-16 px-6 max-w-7xl mx-auto text-center border-b border-border">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <p className="font-body text-xs tracking-luxury uppercase text-muted-foreground">
            Get in Touch
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-medium text-foreground">
            Contact Us
          </h1>
          <div className="divider-gold mx-auto" />
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
          {/* ── Left: WhatsApp + Info ──────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            {/* WhatsApp CTA Card */}
            <div className="bg-foreground p-8 space-y-5">
              <p className="font-body text-xs tracking-luxury uppercase text-background/40">
                Fastest Way to Order
              </p>
              <h2 className="font-display text-3xl font-medium text-background">
                Chat on WhatsApp
              </h2>
              <div className="divider-gold" />
              <p className="font-body text-sm text-background/60 leading-relaxed">
                Send us a message and we'll get back to you instantly. Browse,
                ask questions, and place your order — all through WhatsApp.
              </p>
              <a
                href={WHATSAPP_BASE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.whatsapp_button"
                className="flex items-center gap-3 bg-[#25D366] text-white font-body text-sm font-semibold tracking-wider uppercase px-6 py-4 w-full justify-center hover:bg-[#20BA5A] transition-all duration-300"
              >
                <MessageCircle size={18} />
                +880 1924 805015
              </a>
            </div>

            {/* Info Items */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 border-b border-border pb-6">
                <div className="p-2 border border-border mt-0.5">
                  <Phone size={14} className="text-gold" />
                </div>
                <div>
                  <p className="font-body text-xs tracking-luxury uppercase text-muted-foreground mb-1">
                    WhatsApp
                  </p>
                  <p className="font-body text-sm text-foreground">
                    +880 1924 805015
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 border-b border-border pb-6">
                <div className="p-2 border border-border mt-0.5">
                  <MapPin size={14} className="text-gold" />
                </div>
                <div>
                  <p className="font-body text-xs tracking-luxury uppercase text-muted-foreground mb-1">
                    Delivery
                  </p>
                  <p className="font-body text-sm text-foreground">
                    Across Bangladesh
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 border border-border mt-0.5">
                  <Clock size={14} className="text-gold" />
                </div>
                <div>
                  <p className="font-body text-xs tracking-luxury uppercase text-muted-foreground mb-1">
                    Response Time
                  </p>
                  <p className="font-body text-sm text-foreground">
                    Within a few hours
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Inquiry Form ────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground">
                Send an Inquiry
              </h2>
              <p className="font-body text-sm text-muted-foreground">
                Fill out the form below and we'll follow up via WhatsApp.
              </p>
            </div>

            {submitted ? (
              <motion.div
                data-ocid="contact.success_state"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center gap-4 py-16 border border-border bg-background text-center px-8"
              >
                <CheckCircle size={40} className="text-[#25D366]" />
                <h3 className="font-display text-2xl font-medium text-foreground">
                  Inquiry Received!
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-sm">
                  Thank you for reaching out. We'll contact you on WhatsApp
                  shortly to assist with your order.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="font-body text-xs tracking-luxury uppercase text-foreground border-b border-gold pb-0.5 hover:text-gold transition-colors mt-2"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="name"
                    className="font-body text-xs tracking-wider uppercase text-muted-foreground"
                  >
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    required
                    data-ocid="contact.name.input"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    placeholder="Your full name"
                    className="font-body rounded-none border-border focus-visible:ring-gold bg-background h-11"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="phone"
                    className="font-body text-xs tracking-wider uppercase text-muted-foreground"
                  >
                    Phone / WhatsApp *
                  </Label>
                  <Input
                    id="phone"
                    required
                    type="tel"
                    data-ocid="contact.phone.input"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                    placeholder="+880 1XXX XXX XXX"
                    className="font-body rounded-none border-border focus-visible:ring-gold bg-background h-11"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label className="font-body text-xs tracking-wider uppercase text-muted-foreground">
                    Product Interested In *
                  </Label>
                  <Select
                    required
                    value={form.productName}
                    onValueChange={(val) =>
                      setForm((f) => ({ ...f, productName: val }))
                    }
                  >
                    <SelectTrigger
                      data-ocid="contact.product.select"
                      className="font-body rounded-none border-border focus:ring-gold bg-background h-11"
                    >
                      <SelectValue placeholder="Select a product" />
                    </SelectTrigger>
                    <SelectContent className="font-body rounded-none">
                      {PRODUCTS.map((p) => (
                        <SelectItem key={p} value={p} className="font-body">
                          {p}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="message"
                    className="font-body text-xs tracking-wider uppercase text-muted-foreground"
                  >
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    required
                    rows={4}
                    data-ocid="contact.message.textarea"
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    placeholder="Tell us what you're looking for, any specific requirements..."
                    className="font-body rounded-none border-border focus-visible:ring-gold bg-background resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={
                    isPending ||
                    !form.name ||
                    !form.phone ||
                    !form.message ||
                    !form.productName
                  }
                  data-ocid="contact.submit_button"
                  className="w-full h-12 font-body text-sm font-semibold tracking-wider uppercase rounded-none bg-foreground text-background hover:bg-foreground/90 transition-all duration-200"
                >
                  {isPending ? "Sending..." : "Send Inquiry"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>

        {/* ── FAQ ─────────────────────────────────────────── */}
        <section className="mt-20 pt-16 border-t border-border">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="font-body text-xs tracking-luxury uppercase text-muted-foreground mb-3">
              Common Questions
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground">
              FAQ
            </h2>
            <div className="divider-gold mx-auto mt-5" />
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-2">
              {FAQ_ITEMS.map((item, i) => (
                <AccordionItem
                  key={item.q}
                  value={`faq-${i}`}
                  data-ocid="faq.panel"
                  className="border border-border px-0 rounded-none"
                >
                  <AccordionTrigger className="font-body text-sm font-medium text-foreground px-6 py-4 hover:text-gold hover:no-underline transition-colors duration-200 text-left">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-sm text-muted-foreground px-6 pb-5 leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </div>
    </main>
  );
}
