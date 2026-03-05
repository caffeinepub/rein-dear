import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const values = [
  {
    title: "Craftsmanship",
    desc: "We believe that the objects you carry every day should be made to last. Each piece in our collection is selected for its superior construction, fine materials, and attention to detail that stands the test of time.",
  },
  {
    title: "Authenticity",
    desc: "Every product is sourced directly, verified for quality, and stands behind our promise of 100% authenticity. No imitations, no compromises — only the genuine article.",
  },
  {
    title: "Elegance",
    desc: "Elegance is not excess — it is the quiet confidence of owning something truly refined. Our curation reflects that philosophy: understated, purposeful, and enduring.",
  },
];

export default function AboutPage() {
  return (
    <main className="pt-16 min-h-screen">
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative h-[50vh] min-h-[380px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-banner.dim_1400x700.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-foreground/75" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center"
        >
          <p className="font-body text-xs tracking-luxury uppercase text-gold mb-4">
            Est. 2024
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-medium text-background">
            Our Story
          </h1>
          <div className="divider-gold mx-auto mt-5" />
        </motion.div>
      </section>

      {/* ── Story ─────────────────────────────────────────── */}
      <section className="py-20 max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <p className="font-display text-xl md:text-2xl italic text-muted-foreground leading-relaxed text-center">
            "We started Rein Dear with a single conviction: that the objects we
            carry every day deserve the same care and consideration we give to
            our most prized possessions."
          </p>
          <div className="divider-gold mx-auto" />
          <div className="space-y-6 font-body text-base text-muted-foreground leading-loose">
            <p>
              Rein Dear was born from a love of beautiful, purposeful things.
              Based in Bangladesh, we curate a hand-selected range of luxury
              accessories — sunglasses with precision lenses, bags crafted from
              the finest leather, diaries bound to inspire, pens that write with
              intention, and watches that mark every meaningful moment.
            </p>
            <p>
              In a world of fast fashion and disposable goods, we stand for the
              opposite: quality that endures, design that transcends trends, and
              a shopping experience that feels personal. That's why we operate
              through WhatsApp — because every order deserves a human touch.
            </p>
            <p>
              When you choose Rein Dear, you're not just buying a product.
              You're choosing to invest in something that will accompany you
              through life's most important moments. We take that responsibility
              seriously, and we're honoured by your trust.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── Values ────────────────────────────────────────── */}
      <section className="py-20 bg-secondary/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground">
              Our Values
            </h2>
            <div className="divider-gold mx-auto mt-5" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="space-y-4 p-8 bg-background border border-border"
              >
                <span className="font-display text-4xl font-bold text-gold/20 select-none">
                  0{i + 1}
                </span>
                <h3 className="font-display text-2xl font-medium text-foreground">
                  {val.title}
                </h3>
                <div className="divider-gold" />
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brand Ethos ───────────────────────────────────── */}
      <section className="py-20 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground leading-relaxed">
            "Crafted for the Discerning Few — <br className="hidden md:block" />
            those who know that quality speaks without words."
          </h2>
          <div className="divider-gold mx-auto" />
          <p className="font-body text-sm tracking-luxury uppercase text-muted-foreground">
            — The Rein Dear Team
          </p>
        </motion.div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-16 bg-foreground">
        <div className="max-w-2xl mx-auto px-6 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <p className="font-body text-xs tracking-luxury uppercase text-background/40">
              Ready to Explore?
            </p>
            <h3 className="font-display text-3xl font-medium text-background">
              Discover the Collection
            </h3>
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 bg-gold text-foreground font-body text-sm font-semibold tracking-wider uppercase px-8 py-4 hover:bg-gold/90 transition-all duration-300 mt-2"
            >
              Shop Now
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
