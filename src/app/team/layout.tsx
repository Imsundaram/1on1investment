import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Team | 1 ON 1 INVESTMENT",
    description: "Meet the experts at 1 ON 1 INVESTMENT - Real Estate Consultants, Interior Designers, and Property Specialists.",
};

export default function TeamLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
