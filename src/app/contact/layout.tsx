import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | 1 ON 1 INVESTMENT",
    description: "Get in touch with 1 ON 1 INVESTMENT for property inquiries, interior design consultations, or general questions.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
