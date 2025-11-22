import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap"
});

export const metadata: Metadata = {
  title: "OUBERG Athletics",
  description:
    "هوية بصرية متكاملة لعلامة الملابس الرياضية العصرية OUBERG المخصصة للأداء العالي."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={sora.variable}>
      <body>{children}</body>
    </html>
  );
}
