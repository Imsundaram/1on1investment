import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Properties for Sale & Rent | 1 ON 1 INVESTMENT",
    description: "Browse luxury villas, apartments, office spaces, and rental properties in Greater Noida & Noida.",
};

export default function PropertiesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
