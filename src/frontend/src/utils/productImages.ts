/**
 * Maps product names to their corresponding image paths.
 * Images are referenced only in frontend code (never passed through backend).
 */
export function getProductImage(productName: string): string {
  const name = productName.toLowerCase();

  if (
    name.includes("eid") ||
    name.includes("combo") ||
    name.includes("card holder")
  ) {
    return "/assets/generated/product-eid-combo.dim_800x800.jpg";
  }
  if (name.includes("sunglass")) {
    return "/assets/generated/product-sunglasses.dim_800x800.jpg";
  }
  if (name.includes("money") || name.includes("bag")) {
    return "/assets/generated/product-moneybag.dim_800x800.jpg";
  }
  if (
    name.includes("diary") ||
    name.includes("journal") ||
    name.includes("notebook")
  ) {
    return "/assets/generated/product-diary.dim_800x800.jpg";
  }
  if (name.includes("pen") || name.includes("pencil")) {
    return "/assets/generated/product-pen.dim_800x800.jpg";
  }
  if (name.includes("watch") || name.includes("timepiece")) {
    return "/assets/generated/product-watch.dim_800x800.jpg";
  }

  // Fallback to hero image
  return "/assets/generated/hero-banner.dim_1400x700.jpg";
}

/**
 * Build WhatsApp order link with Bangla message
 */
export function buildWhatsAppOrderLink(
  productName: string,
  price?: bigint,
): string {
  const priceText = price ? ` (৳${Number(price).toLocaleString("en-BD")})` : "";
  const message = encodeURIComponent(
    `আসসালামু আলাইকুম! আমি "${productName}"${priceText} অর্ডার করতে চাই। অনুগ্রহ করে আমাকে বিস্তারিত জানান। ধন্যবাদ।`,
  );
  return `https://wa.me/8801924805015?text=${message}`;
}

export const WHATSAPP_BASE_LINK = `https://wa.me/8801924805015?text=${encodeURIComponent("আসসালামু আলাইকুম! Rein Dear-এ আপনাকে স্বাগতম। আমি কিছু জানতে চাই।")}`;

export function formatBDTPrice(price: bigint): string {
  const num = Number(price);
  return `৳${num.toLocaleString("en-BD")}`;
}

/**
 * Full product details enrichment — Daraz-style.
 * Keyed by product id (as number).
 */
export interface ProductDetails {
  brand: string;
  material: string;
  color: string;
  warranty: string;
  deliveryInfo: string;
  highlights: string[];
  extraImages?: string[];
  rating: number;
  reviewCount: number;
  soldCount: string;
}

export const productDetailsMap: Record<number, ProductDetails> = {
  1: {
    brand: "Rein Dear",
    material: "Metal Frame, Polycarbonate Lens",
    color: "Gold / Dark",
    warranty: "৬ মাসের ওয়ারেন্টি",
    deliveryInfo: "ঢাকায় ১–২ দিন · ঢাকার বাইরে ৩–৫ দিন",
    highlights: [
      "১০০% UV400 সুরক্ষা",
      "পোলারাইজড লেন্স — ড্রাইভিংয়ের জন্য আদর্শ",
      "লাইটওয়েট মেটাল ফ্রেম",
      "সফট কেস ও ক্লিনিং ক্লথ সহ",
      "Unisex ডিজাইন",
    ],
    rating: 4.7,
    reviewCount: 128,
    soldCount: "৫০০+",
  },
  2: {
    brand: "Rein Dear",
    material: "Genuine Leather",
    color: "Dark Brown / Black",
    warranty: "১ বছরের ওয়ারেন্টি",
    deliveryInfo: "ঢাকায় ১–২ দিন · ঢাকার বাইরে ৩–৫ দিন",
    highlights: [
      "খাঁটি লেদার উপাদান",
      "৮টি কার্ড স্লট",
      "জিপ কয়েন পকেট",
      "RFID ব্লকিং প্রযুক্তি",
      "পাতলা ও হালকা ডিজাইন",
    ],
    rating: 4.5,
    reviewCount: 87,
    soldCount: "৩০০+",
  },
  3: {
    brand: "Rein Dear",
    material: "PU Leather Cover, 80 GSM Paper",
    color: "Navy Blue / Gold",
    warranty: "কোনো ত্রুটি থাকলে বদলে দেওয়া হবে",
    deliveryInfo: "ঢাকায় ১–২ দিন · ঢাকার বাইরে ৩–৫ দিন",
    highlights: [
      "A5 সাইজ — ২১ × ১৫ সেমি",
      "১৯২ পেজ আনলাইনড সাদা পেপার",
      "গোল্ড এমবসড ডিজাইন",
      "রিবন বুকমার্ক সহ",
      "ইলাস্টিক ক্লোজার ব্যান্ড",
      "গিফট বক্সে প্যাকেজড",
    ],
    rating: 4.8,
    reviewCount: 64,
    soldCount: "২০০+",
  },
  4: {
    brand: "Rein Dear",
    material: "Metal Body",
    color: "Matte Black / Gold",
    warranty: "৩ মাসের ওয়ারেন্টি",
    deliveryInfo: "ঢাকায় ১–২ দিন · ঢাকার বাইরে ৩–৫ দিন",
    highlights: [
      "মেটাল বডি — টেকসই ও প্রিমিয়াম ফিল",
      "স্মুথ ব্লু ইঙ্ক",
      "রিফিলযোগ্য",
      "গিফট বক্স সহ",
      "অফিস ও গিফটিং এর জন্য আদর্শ",
    ],
    rating: 4.6,
    reviewCount: 43,
    soldCount: "১৫০+",
  },
  5: {
    brand: "Rein Dear",
    material: "Stainless Steel Case, Genuine Leather Strap",
    color: "Black / Silver-Gold / Brown",
    warranty: "১ বছরের ওয়ারেন্টি",
    deliveryInfo: "ঢাকায় ১–২ দিন · ঢাকার বাইরে ৩–৫ দিন",
    highlights: [
      "আরবি সংখ্যার ক্লাসিক ডায়াল",
      "জাপানি মুভমেন্ট",
      "স্টেইনলেস স্টিল কেস — ৩০ মিটার ওয়াটার রেজিস্ট্যান্ট",
      "জেনুইন লেদার স্ট্র্যাপ",
      "মিনারেল ক্রিস্টাল গ্লাস",
      "গিফট বক্স সহ",
    ],
    rating: 4.9,
    reviewCount: 212,
    soldCount: "৭০০+",
  },
};
