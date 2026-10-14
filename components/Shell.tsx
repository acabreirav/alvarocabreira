import { Overpass, JetBrains_Mono } from "next/font/google";
import type { Locale } from "@/lib/content";
import "@/app/globals.css";

const overpass = Overpass({ subsets: ["latin"], weight: ["400", "600", "800"], variable: "--f-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["500"], variable: "--f-mono" });

export function Shell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <html lang={locale} className={`${overpass.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
