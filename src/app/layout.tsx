import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair-display' });

export const metadata: Metadata = {
  metadataBase: new URL('https://kanenus-portfolio.vercel.app'),
  title: "Kanenus Kasa Bayisa | Author, PR Manager & Cultural Leader",
  description: "Official website of Kanenus Kasa Bayisa — Professional Author, Public Relations Manager at the Oromia Writers Association, Director of Shanan Gadaa Band, and Digital Creator with 125K+ followers.",
  keywords: ["Kanenus Kasa Bayisa", "Oromo author", "African literature", "cultural promoter", "Oromia Writers Association", "Shanan Gadaa Band", "Ayyaantummaa", "Oromo literature", "Ethiopia author"],
  openGraph: {
    title: "Kanenus Kasa Bayisa | Author & Cultural Leader",
    description: "Professional Author, PR Strategist & Cultural Promoter from Oromia.",
    url: "https://kanenus-portfolio.vercel.app",
    siteName: "Kanenus Kasa Bayisa",
    images: [{ url: "/profile.jpg", width: 800, height: 600, alt: "Kanenus Kasa Bayisa" }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanenus Kasa Bayisa | Author & Cultural Leader",
    description: "Professional Author, PR Strategist & Cultural Promoter from Oromia.",
    images: ["/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://kanenus-portfolio.vercel.app',
  },
};

// JSON-LD Structured Data schemas for Google rich results
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Kanenus Kasa Bayisa",
  "url": "https://kanenus-portfolio.vercel.app",
  "image": "https://kanenus-portfolio.vercel.app/profile.jpg",
  "sameAs": [
    "https://web.facebook.com/kanenus.kasa.33",
    "https://www.tiktok.com/@kanenus_kasa_bayisa",
    "https://youtu.be/2iz2uTZde4s",
    "https://instagram.com",
    "https://t.me/kanenus"
  ],
  "jobTitle": "Author, PR Manager & Cultural Leader",
  "worksFor": {
    "@type": "Organization",
    "name": "Oromia Writers Association"
  },
  "nationality": "Ethiopian",
  "knowsLanguage": ["Afaan Oromoo", "Amharic", "English"],
  "description": "Kanenus Kasa Bayisa is a professional author, PR Manager at the Oromia Writers Association, Director of the Shanan Gadaa Band, and digital creator with 125K+ social media followers.",
};

const bookSchema = {
  "@context": "https://schema.org",
  "@type": "Book",
  "name": "Ayyaantummaa",
  "author": {
    "@type": "Person",
    "name": "Kanenus Kasa Bayisa"
  },
  "datePublished": "2026",
  "inLanguage": "om",
  "bookFormat": "Hardcover",
  "description": "A profound literary work exploring Oromo cultural identity, tradition, and modernity by Kanenus Kasa Bayisa.",
  "publisher": {
    "@type": "Organization",
    "name": "Oromia Writers Association"
  },
  "url": "https://kanenus-portfolio.vercel.app/books"
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Kanenus Kasa Bayisa",
  "url": "https://kanenus-portfolio.vercel.app",
  "description": "Official portfolio website of Kanenus Kasa Bayisa — Author, PR Manager & Cultural Leader from Oromia.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://kanenus-portfolio.vercel.app/?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

const musicGroupSchema = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  "name": "Shanan Gadaa Band",
  "url": "https://kanenus-portfolio.vercel.app/music",
  "genre": ["Cultural", "Traditional Oromo", "African Folk"],
  "member": {
    "@type": "Person",
    "name": "Kanenus Kasa Bayisa",
    "roleName": "Director & Cultural Narrator"
  },
  "description": "The Shanan Gadaa Band preserves and broadcasts Oromo cultural heritage through music, led by Director Kanenus Kasa Bayisa."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* PWA Meta Tags */}
        <meta name="application-name" content="KKB Portfolio" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="KKB" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#0b1a30" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(musicGroupSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-body text-text-dark bg-bg-light dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <NavBar />
        <main>{children}</main>
        <FloatingButtons />
        <Footer />
      </body>
    </html>
  );
}
