import { CardConfig } from "@/lib/types";
export function buildVCard(card: CardConfig) {
  return ["BEGIN:VCARD","VERSION:3.0",`FN:${card.vcf.fn}`,`ORG:${card.vcf.org}`,`TEL;TYPE=WORK,VOICE:${card.vcf.tel}`,`EMAIL:${card.vcf.email}`,`URL:${card.vcf.url}`,"END:VCARD"].join("\n");
}
