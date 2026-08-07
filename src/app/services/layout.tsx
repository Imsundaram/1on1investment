import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services | 1 ON 1 INVESTMENT",
    description: "Real Estate Property Sales, Rentals, Interior Painting, and Home Décor Services in Noida & Greater Noida.",
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
