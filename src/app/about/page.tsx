import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | 1 ON 1 INVESTMENT",
    description: "Learn about 1 ON 1 INVESTMENT - Your trusted partner for buying, selling, and renting properties in Greater Noida & Noida.",
};

export default function About() {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Header */}
            <div className="bg-[var(--primary)] text-white py-20 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
                <p className="text-xl text-gray-300">Your Trusted Partner in Real Estate & Home Transformation</p>
            </div>

            <div className="container mx-auto px-4 md:px-8 py-16">
                {/* Intro */}
                <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-[var(--primary)]">Who We Are</h2>
                        <p className="text-lg text-[var(--muted)] mb-6 leading-relaxed">
                            <span className="font-semibold text-[var(--secondary)]">1 ON 1 INVESTMENT</span> is a trusted real estate and home improvement company serving Greater Noida and Noida.
                            We specialize in buying, selling, and renting properties, along with transforming homes with expert interior painting and décor solutions.
                        </p>
                        <p className="text-lg text-[var(--muted)] mb-8 leading-relaxed">
                            Our mission is to make every property decision a smart move. Whether you are looking for your dream home, a profitable investment, or a beautiful renovation, our team is here to guide you every step of the way.
                        </p>
                        <Link href="/contact">
                            <Button size="lg">Get in Touch</Button>
                        </Link>
                    </div>
                    <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')"
                            }}
                        ></div>
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[var(--secondary)]">
                        <h3 className="text-2xl font-bold mb-4 text-[var(--primary)]">Our Mission</h3>
                        <p className="text-[var(--muted)]">To provide transparent, hassle-free, and profitable real estate solutions while delivering high-quality interior services that turn houses into dream homes.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[var(--primary)]">
                        <h3 className="text-2xl font-bold mb-4 text-[var(--primary)]">Our Vision</h3>
                        <p className="text-[var(--muted)]">To become the most trusted and preferred real estate agency in Greater Noida & Noida, known for integrity, customer satisfaction, and innovation.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[var(--secondary)]">
                        <h3 className="text-2xl font-bold mb-4 text-[var(--primary)]">Core Values</h3>
                        <ul className="text-[var(--muted)] space-y-2">
                            <li className="flex items-center"><CheckCircle2 size={16} className="text-[var(--secondary)] mr-2" /> Integrity & Trust</li>
                            <li className="flex items-center"><CheckCircle2 size={16} className="text-[var(--secondary)] mr-2" /> Customer Centricity</li>
                            <li className="flex items-center"><CheckCircle2 size={16} className="text-[var(--secondary)] mr-2" /> Excellence in Service</li>
                            <li className="flex items-center"><CheckCircle2 size={16} className="text-[var(--secondary)] mr-2" /> Detail Oriented</li>
                        </ul>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="bg-[var(--primary)] text-white p-8 md:p-12 text-center">
                        <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
                        <p className="text-gray-300 max-w-2xl mx-auto">We bring expertise, transparency, and comprehensive services under one roof.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8 md:p-12">
                        {[
                            { title: "Trusted Local Experts", desc: "In-depth knowledge of Greater Noida & Noida markets." },
                            { title: "Transparent Deals", desc: "No hidden charges, honest advice, and clear documentation." },
                            { title: "Best Market Prices", desc: "Whether selling or buying, we ensure you get the best value." },
                            { title: "Complete Solutions", desc: "From property search to interior design, we handle it all." },
                        ].map((item, idx) => (
                            <div key={idx} className="text-center">
                                <div className="bg-slate-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-[var(--primary)] font-bold text-xl border-2 border-[var(--secondary)]">
                                    {idx + 1}
                                </div>
                                <h4 className="font-bold text-lg mb-2 text-[var(--primary)]">{item.title}</h4>
                                <p className="text-[var(--muted)] text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
