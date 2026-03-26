import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SLTapCard | Lucio powers your business",
  description: "Smart tap cards for business with NFC, QR, lead capture, contact save, Twilio alerts, and Lucio AI."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
