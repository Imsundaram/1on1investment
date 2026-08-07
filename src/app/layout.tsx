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
    default: "1 ON 1 INVESTMENT - Real Estate, Duplex Villas, Flats, Plots & Builders in Greater Noida & Noida",
    template: "%s | 1 ON 1 INVESTMENT Real Estate"
  },
  description: "Top Real Estate Agency in Greater Noida & Noida. Buy, Sell & Rent Duplex Villas, 1/2/3 BHK Flats, Residential & Commercial Plots, Office Spaces & New Builder Projects.",
  keywords: [
    // Real Estate Categories
    "Real Estate Greater Noida",
    "Real Estate Agency Noida Extension",
    "Top Property Consultants Greater Noida",
    "Builders & Developers Greater Noida",
    // Villas & Duplex
    "Duplex Villas Noida Extension",
    "90 Gaj Duplex Villa Greater Noida",
    "100 Gaj Luxury Villa Sector 16B",
    "Happy Life Duplex Villas",
    "Freesias Infratech Pvt Ltd",
    // Flats & Apartments
    "1BHK 2BHK 3BHK Flats Greater Noida",
    "Luxury Apartments Noida Expressway",
    "Ready to Move Flats Noida Extension",
    "Studio Apartments Greater Noida",
    // Plots & Land
    "Residential Plots Greater Noida",
    "Commercial Plots Noida Extension",
    "Freehold Plots Sadullapur Greater Noida",
    "Authority Approved Plots Noida",
    // Commercial & Rental
    "Commercial Shops for Sale Greater Noida",
    "Office Space for Rent Noida Expressway",
    "Flats for Rent Greater Noida West",
    // Company & Location
    "1 ON 1 INVESTMENT",
    "Roja Jalapur Maripat Sector 16B Noida Extension",
    "Sadullapur Greater Noida UP 203207"
  ],
  authors: [{ name: "1 ON 1 INVESTMENT" }],
  creator: "1 ON 1 INVESTMENT",
  openGraph: {
    title: "1 ON 1 INVESTMENT - Buy, Sell & Rent Flats, Duplex Villas, Plots & Commercial Real Estate",
    description: "Explore luxury 90 & 100 Gaj duplex villas, 1/2/3 BHK flats, residential plots & commercial properties in Greater Noida & Noida Extension.",
    url: "https://1on1investment.com",
    siteName: "1 ON 1 INVESTMENT",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "1 ON 1 INVESTMENT - Real Estate & Property Consultants",
    description: "Explore luxury duplex villas, flats, plots & commercial projects in Greater Noida & Noida.",
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

  // Master Schema.org RealEstateAgent & Business Offerings JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "@id": "https://1on1investment.com/#organization",
        "name": "1 ON 1 INVESTMENT",
        "url": "https://1on1investment.com",
        "logo": "https://1on1investment.com/icon.png",
        "image": "https://1on1investment.com/images/happy-life-hero.jpeg",
        "telephone": "+919953493074",
        "email": "1on1investment1@gmail.com",
        "priceRange": "₹25 Lakhs - ₹5 Crores",
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
        "areaServed": [
          "Greater Noida",
          "Noida Extension",
          "Sadullapur",
          "Sector 16B Noida Extension",
          "Noida Expressway",
          "Greater Noida West",
          "Yamuna Expressway"
        ],
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "10:00",
          "closes": "18:00"
        },
        "sameAs": [
          "https://www.facebook.com/share/16yAMoTKq8/",
          "https://www.instagram.com/1on1investment.official/"
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Real Estate Services & Properties Catalog",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Independent Duplex Villas (90 Gaj & 100 Gaj)",
              "description": "Happy Life Duplex Villas by Freesias Infratech Pvt. Ltd. - Premium 3 BHK Duplex Villas in Sector 16B Noida Extension."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Residential Flats & Apartments (1BHK, 2BHK, 3BHK)",
              "description": "Ready to move and under-construction luxury apartments in Greater Noida & Noida."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Residential & Commercial Land / Plots",
              "description": "Freehold and authority approved plots for investment and construction."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Commercial Office Spaces & Shops",
              "description": "High ROI commercial shops, retail spaces, and corporate office units."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Rental & Property Management Services",
              "description": "Residential and commercial property leasing, tenant management, and rent agreement assistance."
            }
          }
        ]
      }
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
