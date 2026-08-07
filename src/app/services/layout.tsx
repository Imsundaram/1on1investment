import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Real Estate & Interior Services - Builder Sales, Buy, Rent & Home Décor | 1 ON 1 INVESTMENT",
    description: "End-to-end Real Estate & Home Improvement Services in Greater Noida & Noida. Property Sales, Builder Projects, Rental Management, Documentation Support & Premium Interior Décor.",
    keywords: [
        "Real estate services Greater Noida",
        "Property sale assistance Noida Extension",
        "Property purchase consultants Noida",
        "Rental management services Greater Noida",
        "Interior painting and home decor Noida Extension",
        "Builder collaboration Greater Noida"
    ],
    openGraph: {
        title: "Real Estate & Home Interior Services in Greater Noida & Noida",
        description: "Property Sales, Purchase, Rentals, Legal Documentation & Home Interior Transformation Services.",
        url: "https://1on1investment.com/services",
    }
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
