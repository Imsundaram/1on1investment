import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getSocials } from "@/app/actions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://1on1investment.com"),
  title: {
    default: "1 ON 1 INVESTMENT - Duplex Villas & Real Estate in Greater Noida & Noida",
    template: "%s | 1 ON 1 INVESTMENT"
  },
  description: "Find your dream property in Greater Noida, Noida & Noida Extension. Duplex Villas, Commercial Spaces, Buy, Sell & Rent. Happy Life by Rudra Infrastructure.",
  keywords: [
    "Real Estate Greater Noida",
    "Duplex Villas Noida Extension",
    "Happy Life Rudra Infrastructure",
    "Buy Sell Rent Property Noida",
    "1 ON 1 INVESTMENT",
    "Sadullapur Greater Noida",
    "Sector 16B Noida Extension",
    "Freesias Infratech",
    "Real estate agency Greater Noida"
  ],
  authors: [{ name: "1 ON 1 INVESTMENT" }],
  creator: "1 ON 1 INVESTMENT",
  openGraph: {
    title: "1 ON 1 INVESTMENT - Premium Real Estate in Greater Noida & Noida",
    description: "Explore luxury duplex villas, residential flats & commercial spaces in Greater Noida and Noida Extension.",
    url: "https://1on1investment.com",
    siteName: "1 ON 1 INVESTMENT",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "1 ON 1 INVESTMENT - Real Estate Greater Noida",
    description: "Explore luxury duplex villas, residential flats & commercial spaces in Greater Noida and Noida Extension.",
  },
  verification: {
    google: "sM8pVPg480YuvXOyq5eLN3RCAsFIgN2dK9jVeHf_tXo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const socials = await getSocials();

  // Schema.org RealEstateAgent / LocalBusiness JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "1 ON 1 INVESTMENT",
    "image": "https://1on1investment.com/icon.png",
    "@id": "https://1on1investment.com/#organization",
    "url": "https://1on1investment.com",
    "telephone": "+919953493074",
    "email": "1on1investment1@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Roja Jalapur maripat sector 16B Noida extension",
      "addressLocality": "Greater Noida",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "203207",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.601552,
      "longitude": 77.458925
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "10:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/share/16yAMoTKq8/",
      "https://www.instagram.com/1on1investment.official/"
    ]
  };

  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="sM8pVPg480YuvXOyq5eLN3RCAsFIgN2dK9jVeHf_tXo" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar socials={socials} />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919953493074"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
          title="Chat on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="white"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-message-circle"
          >
            <path
              d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
              stroke="none"
            />
          </svg>
        </a>
      </body>
    </html>
  );
}
