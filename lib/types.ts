export type LeadStatus = "new" | "contacted" | "won";
export type Lead = { id: string; createdAt: string; name: string; phone: string; service: string; message: string; slug: string; status: LeadStatus; };
export type CardConfig = {
  slug: string; businessName: string; headline: string; subheadline: string; phone: string; smsPhone: string; email: string;
  confirmationMessage: string; ctaPrimary: string; ctaSecondary: string; ctaTertiary?: string; shopUrl?: string;
  services: string[]; trustPoints: string[]; vcf: { fn: string; org: string; tel: string; email: string; url: string; };
};
