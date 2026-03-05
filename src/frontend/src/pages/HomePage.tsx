import ProductCard from "@/components/ProductCard";
import { useGetFeaturedProducts } from "@/hooks/useQueries";
import { WHATSAPP_BASE_LINK } from "@/utils/productImages";
import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Shield, Star } from "lucide-react";
import { motion } from "motion/react";

const brandPromises = [
  {
    icon: <Shield size={24} className="text-gold" />,
    title: "Authentic Quality",
    desc: "Every piece in our collection is handpicked for exceptional craftsmanship and enduring quality.",
  },
  {
    icon: <Star size={24} className="text-gold" />,
    title: "Curated Selection",
    desc: "We source only the finest accessories — each item chosen to complement a life well-lived.",
  },
  {
    icon: <MessageCircle size={24} className="text-gold" />,
    title: "Order via WhatsApp",
    desc: "A seamless, personal ordering experience — just send us a message and we handle the rest.",
  },
];

const orderSteps = [
  {
    num: "01",
    label: "Browse",
    desc: "Explore our curated collection of luxury accessories.",
  },
  {
    num: "02",
    label: "Choose",
    desc: "Select the piece that speaks to your refined taste.",
  },
  {
    num: "03",
    label: "Message Us",
    desc: "Click the WhatsApp button and send us your order.",
  },
  {
    num: "04",
    label: "Receive",
    desc: "We confirm, pack with care, and deliver to your door.",
  },
];

export default function HomePage() {
  const { data: featuredProducts, isLoading } = useGetFeaturedProducts();

  return (
    <main>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-banner.dim_1400x700.jpg')",
          }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/60 to-foreground/80" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-xs tracking-luxury uppercase text-gold mb-6"
          >
            Premium Lifestyle Accessories
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-display text-6xl md:text-8xl lg:text-9xl font-semibold text-background tracking-wide leading-none mb-6"
          >
            REIN DEAR
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "3rem" }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="h-px bg-gold mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="font-display text-xl md:text-2xl italic text-background/70 mb-10"
          >
            Where Elegance Meets Everyday
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/shop"
              data-ocid="hero.primary_button"
              className="flex items-center gap-3 bg-gold text-foreground font-body text-sm font-semibold tracking-wider uppercase px-8 py-4 hover:bg-gold/90 transition-all duration-300 hover:shadow-luxury"
            >
              Explore Collection
              <ArrowRight size={16} />
            </Link>
            <a
              href={WHATSAPP_BASE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-background/40 text-background/80 hover:text-background font-body text-sm font-medium tracking-wider uppercase px-8 py-4 transition-all duration-300 hover:border-background"
            >
              <MessageCircle size={16} />
              Chat with Us
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-body text-[10px] tracking-luxury uppercase text-background/40">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-background/40 to-transparent" />
        </motion.div>
      </section>

      {/* ── Featured Products ─────────────────────────────── */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-luxury uppercase text-muted-foreground mb-3">
            Hand-Picked for You
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground">
            Featured Pieces
          </h2>
          <div className="divider-gold mx-auto mt-5" />
        </motion.div>

        {isLoading ? (
          <div
            data-ocid="featured.loading_state"
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-square bg-muted animate-pulse" />
            ))}
          </div>
        ) : (
          <div
            data-ocid="featured.list"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {featuredProducts?.map((product, idx) => (
              <ProductCard
                key={product.id.toString()}
                product={product}
                index={idx + 1}
              />
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 font-body text-sm tracking-wider uppercase text-foreground border-b border-gold pb-1 hover:text-gold transition-colors duration-200"
          >
            View Full Collection
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </section>

      {/* ── Eid Special Offer ────────────────────────────── */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <motion.div
          data-ocid="home.eid_combo.card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gold/10 border border-gold overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image */}
            <div className="relative overflow-hidden aspect-square md:aspect-auto md:min-h-[380px]">
              <img
                src="/assets/generated/product-eid-combo.dim_800x800.jpg"
                alt="Eid Special Combo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gold/10 hidden md:block" />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center p-8 md:p-12 space-y-5">
              <div className="space-y-2">
                <span className="inline-block font-body text-[10px] tracking-luxury uppercase text-gold border border-gold px-3 py-1 font-semibold">
                  ✨ Eid Mubarak — Limited Offer
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground leading-tight">
                  Eid Special Combo
                </h2>
              </div>

              <div className="divider-gold" />

              <ul className="space-y-1.5">
                {["Sunglasses", "Card Holder", "Arabic Watch"].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 font-body text-sm text-muted-foreground"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex items-baseline gap-3 pt-1">
                <span className="font-display text-4xl font-bold text-foreground">
                  ৳890
                </span>
                <span className="font-body text-base text-muted-foreground line-through">
                  ৳1,500
                </span>
                <span className="font-body text-xs font-semibold text-[#25D366] tracking-wide">
                  Save ৳610
                </span>
              </div>

              <a
                href={`https://wa.me/8801924805015?text=${encodeURIComponent("আসসালামু আলাইকুম! আমি ঈদ স্পেশাল কম্বো (সানগ্লাস + কার্ড হোল্ডার + আরবি ওয়াচ) ৳৮৯০ তে অর্ডার করতে চাই। অনুগ্রহ করে বিস্তারিত জানান। ধন্যবাদ।")}`}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="home.eid_combo.primary_button"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-body text-sm font-semibold tracking-wider uppercase px-6 py-4 transition-all duration-300 hover:bg-[#20BA5A] hover:shadow-luxury"
              >
                <MessageCircle size={16} />
                WhatsApp-এ অর্ডার করুন
              </a>

              <p className="font-body text-xs text-muted-foreground">
                Limited stock available. Order now to secure your Eid gift.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Brand Promise ─────────────────────────────────── */}
      <section className="py-24 bg-secondary/50 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground">
              The Rein Dear Promise
            </h2>
            <div className="divider-gold mx-auto mt-5" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {brandPromises.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center space-y-4 p-8 border border-border bg-background"
              >
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="font-display text-xl font-medium">
                  {item.title}
                </h3>
                <div className="divider-gold mx-auto" />
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Order Process ─────────────────────────────────── */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-luxury uppercase text-muted-foreground mb-3">
            Simple & Seamless
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground">
            How to Order
          </h2>
          <div className="divider-gold mx-auto mt-5" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {orderSteps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative"
            >
              <div className="space-y-4">
                <span className="font-display text-5xl font-bold text-gold/25 select-none leading-none">
                  {step.num}
                </span>
                <h3 className="font-display text-xl font-medium text-foreground">
                  {step.label}
                </h3>
                <div className="divider-gold" />
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-14"
        >
          <a
            href={WHATSAPP_BASE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white font-body text-sm font-semibold tracking-wider uppercase px-10 py-4 hover:bg-[#20BA5A] transition-all duration-300 hover:shadow-luxury"
          >
            <MessageCircle size={18} />
            WhatsApp-এ অর্ডার শুরু করুন
          </a>
        </motion.div>
      </section>

      {/* ── Instagram Teaser ──────────────────────────────── */}
      <section className="py-24 bg-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="font-body text-xs tracking-luxury uppercase text-background/30">
              Follow the Aesthetic
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-background">
              @reindear
            </h2>
            <div className="divider-gold mx-auto" />
            <p className="font-display text-lg italic text-background/50">
              Discover more on Instagram
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
