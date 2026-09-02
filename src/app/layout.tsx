import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import NewsletterForm from "@/components/NewsletterForm";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair-display' });

export const metadata: Metadata = {
  title: "Kanenus Kasa Bayisa | Author, PR Manager & Cultural Leader",
  description: "Official website of Kanenus Kasa Bayisa — Professional Author, Public Relations Manager at the Oromia Writers Association, Director of Shanan Gadaa Band, and Digital Creator with 125K+ followers.",
  keywords: ["Kanenus Kasa Bayisa", "Oromo author", "African literature", "cultural promoter", "Oromia Writers Association", "Shanan Gadaa Band", "Ayyaantummaa"],
  openGraph: {
    title: "Kanenus Kasa Bayisa | Author & Cultural Leader",
    description: "Professional Author, PR Strategist & Cultural Promoter from Oromia.",
    url: "https://kanenusskasabayisa.com",
    siteName: "Kanenus Kasa Bayisa",
    images: [{ url: "/profile.jpg", width: 800, height: 600, alt: "Kanenus Kasa Bayisa" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanenus Kasa Bayisa | Author & Cultural Leader",
    description: "Professional Author, PR Strategist & Cultural Promoter from Oromia.",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-body text-text-dark bg-bg-light dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <NavBar />
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
