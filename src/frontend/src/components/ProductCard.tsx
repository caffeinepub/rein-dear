import {
  buildWhatsAppOrderLink,
  formatBDTPrice,
  getProductImage,
} from "@/utils/productImages";
import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import type { Product } from "../backend.d";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const imageUrl = getProductImage(product.name);
  const whatsappLink = buildWhatsAppOrderLink(product.name, product.price);

  return (
    <motion.article
      data-ocid={`product.item.${index}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: "easeOut" }}
      className="group bg-card border border-border overflow-hidden flex flex-col"
    >
      {/* Image */}
      <Link
        to="/product/$id"
        params={{ id: product.id.toString() }}
        className="block overflow-hidden aspect-square relative"
      >
        <img
          src={imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.isFeatured && (
          <span className="absolute top-3 left-3 bg-gold text-foreground font-body text-[10px] font-semibold tracking-luxury uppercase px-2 py-1">
            Featured
          </span>
        )}
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <p className="font-body text-[10px] tracking-luxury uppercase text-muted-foreground mb-1">
              {product.category}
            </p>
            <Link
              to="/product/$id"
              params={{ id: product.id.toString() }}
              className="font-display text-base font-medium text-foreground hover:text-gold transition-colors duration-200 leading-snug"
            >
              {product.name}
            </Link>
          </div>
          <p className="font-display text-base font-medium text-foreground whitespace-nowrap">
            {formatBDTPrice(product.price)}
          </p>
        </div>

        <p className="font-body text-sm text-muted-foreground line-clamp-2 leading-relaxed flex-1">
          {product.description}
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          data-ocid={`product.whatsapp_button.${index}`}
          className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-body text-xs font-semibold tracking-wider uppercase py-3 px-4 mt-auto transition-all duration-200 hover:bg-[#20BA5A] hover:shadow-md"
        >
          <MessageCircle size={14} />
          WhatsApp-এ অর্ডার করুন
        </a>
      </div>
    </motion.article>
  );
}
