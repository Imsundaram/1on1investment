"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Search } from "lucide-react";

import { formatGoogleDriveUrl } from "@/lib/utils";

export function Hero({ image }: { image?: string }) {
    const bgImage = image ? formatGoogleDriveUrl(image) : "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop";

    return (
        <section className="relative min-h-[90vh] md:h-[85vh] md:min-h-[600px] flex items-center justify-center bg-[var(--primary)] text-white overflow-hidden pt-20 md:pt-0">
            {/* Background Image Placeholder */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
                style={{
                    backgroundImage: `url('${bgImage}')`,
                    backgroundColor: "#0f172a" // Fallback color
                }}
            ></div>

            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[var(--primary)] z-0"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10 text-center py-10 md:py-0">
                <h1 className="text-3xl md:text-6xl font-extrabold mb-6 leading-tight animate-in fade-in zoom-in duration-700">
                    Find Your Dream Property in <br className="hidden md:block" />
                    <span className="text-[var(--secondary)]">Greater Noida & Noida</span>
                </h1>

                <p className="text-base md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                    Buy, Sell, Rent & Transform Your Space – A Smart Move Starts Here.
                </p>

                <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                    <Link href="/properties">
                        <Button size="lg" className="w-full md:w-auto transform hover:-translate-y-1 transition-transform">
                            View Properties
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button size="lg" variant="outline" className="w-full md:w-auto border-white text-white hover:bg-white hover:text-[var(--primary)] transform hover:-translate-y-1 transition-transform">
                            Contact Us
                        </Button>
                    </Link>
                </div>

                {/* Advanced Search Bar Mockup */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-2xl max-w-4xl mx-auto mt-12 md:mt-0 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
                    <form className="grid grid-cols-1 md:grid-cols-4 gap-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="col-span-1">
                            <select className="w-full p-3 rounded bg-white/90 text-gray-800 focus:outline-none">
                                <option>Buy</option>
                                <option>Rent</option>
                                <option>Sell</option>
                            </select>
                        </div>
                        <div className="col-span-1">
                            <input
                                type="text"
                                placeholder="Location (e.g. Sector 150)"
                                className="w-full p-3 rounded bg-white/90 text-gray-800 focus:outline-none placeholder-gray-500"
                            />
                        </div>
                        <div className="col-span-1">
                            <select className="w-full p-3 rounded bg-white/90 text-gray-800 focus:outline-none">
                                <option>Budget</option>
                                <option>Under 50 Lakh</option>
                                <option>50L - 1 Cr</option>
                                <option>1 Cr - 3 Cr</option>
                                <option>Above 3 Cr</option>
                            </select>
                        </div>
                        <div className="col-span-1">
                            <Button type="submit" className="w-full h-full text-lg" variant="secondary">
                                <Search className="mr-2 h-5 w-5" /> Search
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
