import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Properties for Sale & Rent - Duplex Villas, Flats, Plots & Commercial | 1 ON 1 INVESTMENT",
    description: "Browse 90 & 100 Gaj luxury duplex villas, 1/2/3 BHK flats, residential plots, commercial shops & rental properties in Greater Noida, Noida & Noida Extension.",
    keywords: [
        "Properties for sale Greater Noida",
        "Duplex villas Noida Extension",
        "Flats for sale Greater Noida West",
        "Residential plots Greater Noida",
        "Commercial shops Noida Expressway",
        "Rental flats Sector 16B Noida Extension",
        "Buy sell property Noida",
        "Happy Life duplex villas"
    ],
    openGraph: {
        title: "Properties for Sale & Rent - Duplex Villas, Flats & Plots in Greater Noida",
        description: "Browse luxury duplex villas, apartments, residential plots & commercial properties in Greater Noida & Noida.",
        url: "https://1on1investment.com/properties",
    }
};

export default function PropertiesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
