import { CardConfig } from "@/lib/types";
export const cards: CardConfig[] = [{
  slug: "jrtools",
  businessName: "JR Tools USA",
  headline: "Tools, inventory, and fast response",
  subheadline: "Tap to call, text, save contact, shop products, or request availability instantly.",
  phone: "+14049825807",
  smsPhone: "+14049825807",
  email: "sales@jrtoolsusa.com",
  confirmationMessage: "Thanks for contacting JR Tools USA. We received your request and will reply shortly.",
  ctaPrimary: "Call Now",
  ctaSecondary: "Text Now",
  ctaTertiary: "Save Contact",
  shopUrl: "https://www.jrtoolsusa.com/products",
  services: ["Power Tools", "Inventory Requests", "Local Pickup", "Shipping Support"],
  trustPoints: ["Fast Response", "Inventory Available", "Local Pickup"],
  vcf: { fn: "JR Tools USA", org: "JR Tools USA", tel: "+14049825807", email: "sales@jrtoolsusa.com", url: "https://card.jrtoolsusa.com/jrtools" }
}];
export function getCardBySlug(slug: string) { return cards.find((card) => card.slug === slug); }
