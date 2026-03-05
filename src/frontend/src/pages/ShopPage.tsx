import ProductCard from "@/components/ProductCard";
import {
  useGetAllProducts,
  useGetProductsByCategory,
} from "@/hooks/useQueries";
import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const categories = ["All", "Accessories", "Bags", "Stationery"];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const { data: allProducts, isLoading: isLoadingAll } = useGetAllProducts();
  const { data: categoryProducts, isLoading: isLoadingCategory } =
    useGetProductsByCategory(activeCategory);

  const isLoading = activeCategory === "All" ? isLoadingAll : isLoadingCategory;
  const products = activeCategory === "All" ? allProducts : categoryProducts;

  return (
    <main className="pt-24 min-h-screen">
      {/* ── Header ──────────────────────────────────────── */}
      <section className="py-16 px-6 max-w-7xl mx-auto text-center border-b border-border">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <p className="font-body text-xs tracking-luxury uppercase text-muted-foreground">
            All Products
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-medium text-foreground">
            The Collection
          </h1>
          <div className="divider-gold mx-auto" />
          <p className="font-body text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
            Luxury accessories chosen for those who appreciate the finest in
            craftsmanship and design.
          </p>
        </motion.div>
      </section>

      {/* ── Category Filter ──────────────────────────────── */}
      <section className="py-8 px-6 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center gap-1 justify-center md:justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              data-ocid="shop.filter.tab"
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "font-body text-xs tracking-luxury uppercase px-5 py-2.5 transition-all duration-200 border",
                activeCategory === cat
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground",
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── Eid Special Banner ───────────────────────────── */}
      <section className="pb-6 px-6 max-w-7xl mx-auto">
        <motion.div
          data-ocid="eid.combo.card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gold/10 border border-gold overflow-hidden"
        >
          <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] md:grid-cols-[260px_1fr]">
            {/* Image */}
            <div className="relative overflow-hidden aspect-square sm:aspect-auto">
              <img
                src="/assets/generated/product-eid-combo.dim_800x800.jpg"
                alt="Eid Special Combo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center p-6 md:p-8 gap-4">
              <div className="space-y-1.5">
                <span className="inline-block font-body text-[10px] tracking-luxury uppercase text-gold border border-gold px-2.5 py-0.5 font-semibold">
                  ✨ Limited Eid Offer
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                  Eid Special Combo
                </h3>
              </div>

              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Sunglasses · Card Holder · Arabic Watch
              </p>

              <div className="flex flex-wrap items-baseline gap-3">
                <span className="font-display text-3xl font-bold text-foreground">
                  ৳890
                </span>
                <span className="font-body text-sm text-muted-foreground line-through">
                  ৳1,500
                </span>
                <span className="font-body text-xs font-semibold text-[#25D366]">
                  Save ৳610
                </span>
              </div>

              <a
                href={`https://wa.me/8801924805015?text=${encodeURIComponent("আসসালামু আলাইকুম! আমি ঈদ স্পেশাল কম্বো (সানগ্লাস + কার্ড হোল্ডার + আরবি ওয়াচ) ৳৮৯০ তে অর্ডার করতে চাই। অনুগ্রহ করে বিস্তারিত জানান। ধন্যবাদ।")}`}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="eid.combo.whatsapp_button"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-body text-xs font-semibold tracking-wider uppercase px-5 py-3 self-start transition-all duration-300 hover:bg-[#20BA5A] hover:shadow-md"
              >
                <MessageCircle size={14} />
                WhatsApp-এ অর্ডার করুন
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Products Grid ────────────────────────────────── */}
      <section className="pb-24 px-6 max-w-7xl mx-auto">
        {isLoading ? (
          <div
            data-ocid="shop.loading_state"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="border border-border overflow-hidden">
                <div className="aspect-square bg-muted animate-pulse" />
                <div className="p-5 space-y-3">
                  <div className="h-3 bg-muted animate-pulse w-1/3" />
                  <div className="h-4 bg-muted animate-pulse w-2/3" />
                  <div className="h-3 bg-muted animate-pulse w-full" />
                  <div className="h-10 bg-muted animate-pulse w-full mt-4" />
                </div>
              </div>
            ))}
          </div>
        ) : products && products.length > 0 ? (
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {products.map((product, idx) => (
              <ProductCard
                key={product.id.toString()}
                product={product}
                index={idx + 1}
              />
            ))}
          </motion.div>
        ) : (
          <div
            data-ocid="shop.empty_state"
            className="py-24 text-center space-y-4"
          >
            <p className="font-display text-2xl text-muted-foreground italic">
              No products in this category yet.
            </p>
            <button
              type="button"
              onClick={() => setActiveCategory("All")}
              className="font-body text-sm tracking-wider uppercase text-foreground border-b border-gold pb-1 hover:text-gold transition-colors"
            >
              View All Products
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
