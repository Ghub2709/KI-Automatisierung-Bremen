import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"]
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "KI-Automatisierung Bremen | Intelligente Automatisierungslösungen",
  description: "KI-Automatisierung für Bremer Unternehmen. Mehr Zeit für Ihr Kerngeschäft durch intelligente Automatisierung von Prozessen. Lokaler Service in Bremen.",
  keywords: ["KI-Automatisierung", "Bremen", "Prozessautomatisierung", "KI-Lösungen", "Effizienzsteigerung", "Automatisierung", "Künstliche Intelligenz"],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${montserrat.variable} ${openSans.variable}`} suppressHydrationWarning>
      <body className={`${montserrat.variable} ${openSans.variable} flex flex-col min-h-screen overflow-x-hidden`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
} 