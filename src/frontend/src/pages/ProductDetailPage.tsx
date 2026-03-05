import { useGetProductById } from "@/hooks/useQueries";
import {
  buildWhatsAppOrderLink,
  formatBDTPrice,
  getProductImage,
  productDetailsMap,
} from "@/utils/productImages";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  MessageCircle,
  Package,
  Shield,
  Star,
  Truck,
} from "lucide-react";
import { motion } from "motion/react";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={14}
          className={
            star <= Math.round(rating)
              ? "fill-gold text-gold"
              : "fill-muted text-muted"
          }
        />
      ))}
    </div>
  );
}

export default function ProductDetailPage() {
  const { id } = useParams({ from: "/product/$id" });
  const productId = BigInt(id);
  const { data: product, isLoading, isError } = useGetProductById(productId);

  if (isLoading) {
    return (
      <main className="pt-24 min-h-screen">
        <div
          data-ocid="product.detail.loading_state"
          className="max-w-7xl mx-auto px-6 lg:px-8 py-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="aspect-square bg-muted animate-pulse" />
            <div className="space-y-6 pt-4">
              <div className="h-3 bg-muted animate-pulse w-1/4" />
              <div className="h-8 bg-muted animate-pulse w-3/4" />
              <div className="h-6 bg-muted animate-pulse w-1/4" />
              <div className="space-y-2">
                <div className="h-3 bg-muted animate-pulse w-full" />
                <div className="h-3 bg-muted animate-pulse w-full" />
                <div className="h-3 bg-muted animate-pulse w-2/3" />
              </div>
              <div className="h-14 bg-muted animate-pulse w-full mt-8" />
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (isError || !product) {
    return (
      <main className="pt-24 min-h-screen flex items-center justify-center">
        <div
          data-ocid="product.detail.error_state"
          className="text-center space-y-4 px-6"
        >
          <h1 className="font-display text-3xl text-foreground">
            পণ্য পাওয়া যায়নি
          </h1>
          <p className="font-body text-muted-foreground">
            এই পণ্যটি আর পাওয়া যাচ্ছে না।
          </p>
          <Link
            to="/shop"
            data-ocid="product.detail.back_link"
            className="inline-flex items-center gap-2 font-body text-sm tracking-wider uppercase text-foreground border-b border-gold pb-1 hover:text-gold transition-colors"
          >
            <ArrowLeft size={14} />
            শপে ফিরে যান
          </Link>
        </div>
      </main>
    );
  }

  const imageUrl = getProductImage(product.name);
  const whatsappLink = buildWhatsAppOrderLink(product.name, product.price);
  const details = productDetailsMap[Number(product.id)];

  return (
    <main className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <Link
            to="/shop"
            data-ocid="product.detail.back_link"
            className="inline-flex items-center gap-2 font-body text-sm tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors duration-200 group"
          >
            <ArrowLeft
              size={14}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />
            সব পণ্য দেখুন
          </Link>
        </motion.div>

        {/* Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden border border-border aspect-square"
          >
            <img
              src={imageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.isFeatured && (
              <span className="absolute top-4 left-4 bg-gold text-foreground font-body text-[10px] font-semibold tracking-luxury uppercase px-3 py-1.5">
                Featured
              </span>
            )}
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col justify-start space-y-5"
          >
            {/* Brand + Category */}
            <div>
              <p className="font-body text-[10px] tracking-luxury uppercase text-muted-foreground mb-1">
                {details?.brand ?? "Rein Dear"} · {product.category}
              </p>
              <h1 className="font-display text-3xl md:text-4xl font-medium text-foreground leading-tight">
                {product.name}
              </h1>
            </div>

            {/* Rating */}
            {details && (
              <div className="flex items-center gap-3">
                <StarRating rating={details.rating} />
                <span className="font-body text-sm text-foreground font-medium">
                  {details.rating}
                </span>
                <span className="font-body text-xs text-muted-foreground">
                  ({details.reviewCount} রিভিউ)
                </span>
                <span className="font-body text-xs text-muted-foreground">
                  · {details.soldCount} বিক্রি
                </span>
              </div>
            )}

            <div className="divider-gold" />

            {/* Price */}
            <p className="font-display text-4xl font-bold text-foreground">
              {formatBDTPrice(product.price)}
            </p>

            {/* Description */}
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Highlights */}
            {details && details.highlights.length > 0 && (
              <div className="space-y-2">
                <p className="font-body text-xs tracking-luxury uppercase text-muted-foreground">
                  পণ্যের বৈশিষ্ট্য
                </p>
                <ul className="space-y-1.5">
                  {details.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 font-body text-sm text-foreground"
                    >
                      <CheckCircle2
                        size={14}
                        className="text-gold mt-0.5 flex-shrink-0"
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* WhatsApp Order Button */}
            <div className="pt-2 space-y-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="product.detail.primary_button"
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-body text-sm font-semibold tracking-wider uppercase px-8 py-4 w-full transition-all duration-300 hover:bg-[#20BA5A] hover:shadow-luxury"
              >
                <MessageCircle size={18} />
                WhatsApp-এ অর্ডার করুন
              </a>

              <p className="font-body text-xs text-muted-foreground text-center leading-relaxed">
                বাটনে ক্লিক করলে আপনার অর্ডার মেসেজ সহ WhatsApp খুলবে।
              </p>
            </div>

            {/* Specs Table */}
            {details && (
              <div className="border-t border-border pt-5 space-y-3">
                <p className="font-body text-xs tracking-luxury uppercase text-muted-foreground mb-3">
                  পণ্যের তথ্য
                </p>
                {[
                  { label: "ব্র্যান্ড", value: details.brand },
                  { label: "উপাদান", value: details.material },
                  { label: "রঙ", value: details.color },
                  {
                    label: "স্টক",
                    value: "পাওয়া যাচ্ছে",
                    valueClass: "text-[#25D366] font-medium",
                  },
                  { label: "ওয়ারেন্টি", value: details.warranty },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex justify-between font-body text-sm border-b border-border/50 pb-2"
                  >
                    <span className="text-muted-foreground text-xs uppercase tracking-wide">
                      {row.label}
                    </span>
                    <span
                      className={`text-foreground text-right max-w-[60%] ${row.valueClass ?? ""}`}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Delivery + Trust Badges */}
            {details && (
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="flex flex-col items-center gap-1.5 p-3 border border-border text-center">
                  <Truck size={18} className="text-gold" />
                  <p className="font-body text-[10px] text-muted-foreground leading-tight">
                    {details.deliveryInfo}
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1.5 p-3 border border-border text-center">
                  <Shield size={18} className="text-gold" />
                  <p className="font-body text-[10px] text-muted-foreground leading-tight">
                    {details.warranty}
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1.5 p-3 border border-border text-center">
                  <Package size={18} className="text-gold" />
                  <p className="font-body text-[10px] text-muted-foreground leading-tight">
                    গিফট প্যাকেজিং উপলব্ধ
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
