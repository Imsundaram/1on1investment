"use client";

import { useState } from "react";
import { Sparkles, FileText, LayoutGrid, Phone, Download, CheckCircle, X, ChevronRight } from "lucide-react";
import Link from "next/link";

interface SpecialProjectSlideProps {
    brochureUrl?: string;
    layoutImages?: string[];
}

export function SpecialProjectSlide({
    brochureUrl = "#",
    layoutImages = [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop"
    ]
}: SpecialProjectSlideProps) {
    const [isLayoutModalOpen, setIsLayoutModalOpen] = useState(false);
    const [activeLayoutIndex, setActiveLayoutIndex] = useState(0);

    return (
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white overflow-hidden border-y-4 border-[var(--secondary)]">
            {/* Ambient Lighting & Patterns */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[var(--secondary)]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Left Column: Information & Details */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-400/20 to-yellow-500/20 border border-amber-400/30 px-4 py-1.5 rounded-full text-amber-300 text-xs md:text-sm font-semibold tracking-wider uppercase backdrop-blur-md shadow-lg">
                            <Sparkles className="h-4 w-4 text-amber-400 animate-pulse" />
                            <span>Exclusive New Launch</span>
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                                Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-200">Happy Life</span>
                            </h2>
                            <p className="text-xl md:text-2xl font-medium text-amber-200/90 italic">
                                by Rudra Infrastructure
                            </p>
                            <p className="text-lg md:text-xl text-slate-300 font-serif tracking-wide border-l-2 border-[var(--secondary)] pl-3 my-2">
                                &ldquo;Where Dreams Find a Home&rdquo;
                            </p>
                        </div>

                        <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl">
                            Discover thoughtfully engineered living spaces designed for modern comfort, lush surrounding landscapes, and state-of-the-art infrastructure tailored for your family&apos;s happiness.
                        </p>

                        {/* Highlights Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
                            {[
                                "Prime Location Connectivity",
                                "Vastu Compliant Layouts",
                                "24/7 Gated Security & Amenities",
                                "Eco-friendly Green Environment"
                            ].map((feature, idx) => (
                                <div key={idx} className="flex items-center space-x-3 bg-white/5 border border-white/10 p-3 rounded-lg backdrop-blur-sm">
                                    <CheckCircle className="h-5 w-5 text-[var(--secondary)] flex-shrink-0" />
                                    <span className="text-sm font-medium text-slate-200">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* Interactive Buttons */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                            
                            {/* Download Brochure Button */}
                            <a
                                href={brochureUrl !== "#" ? brochureUrl : "/contact"}
                                target={brochureUrl !== "#" ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-yellow-400 hover:to-amber-500 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-xl hover:shadow-amber-500/20 transform hover:-translate-y-0.5 transition-all text-base"
                            >
                                <Download className="h-5 w-5" />
                                <span>Download Brochure</span>
                            </a>

                            {/* View Layouts Button */}
                            <button
                                onClick={() => setIsLayoutModalOpen(true)}
                                className="inline-flex items-center justify-center space-x-2 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600 text-white font-semibold px-6 py-3.5 rounded-xl backdrop-blur-md shadow-lg transform hover:-translate-y-0.5 transition-all text-base"
                            >
                                <LayoutGrid className="h-5 w-5 text-amber-400" />
                                <span>View Floor Plans &amp; Layouts</span>
                            </button>

                            {/* Contact Agent Button */}
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center space-x-2 border border-amber-400/40 text-amber-300 hover:bg-amber-400/10 px-6 py-3.5 rounded-xl transition-all text-base font-medium"
                            >
                                <Phone className="h-4 w-4" />
                                <span>Inquire Now</span>
                            </Link>

                        </div>
                    </div>

                    {/* Right Column: Visual Showcase Preview Card */}
                    <div className="lg:col-span-5">
                        <div className="relative group rounded-2xl overflow-hidden border-2 border-amber-400/30 shadow-2xl bg-slate-900">
                            <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                                    alt="Happy Life by Rudra Infrastructure"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                                
                                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-lg shadow-md flex items-center space-x-1.5">
                                    <span>Rudra Infrastructure</span>
                                </div>

                                <div className="absolute bottom-6 left-6 right-6">
                                    <h3 className="text-xl font-bold text-white mb-1">Happy Life</h3>
                                    <p className="text-sm text-slate-300 mb-3">Modern Luxury Apartments &amp; Villas</p>

                                    <button
                                        onClick={() => setIsLayoutModalOpen(true)}
                                        className="w-full py-2.5 bg-amber-400/20 hover:bg-amber-400/30 border border-amber-400/50 rounded-lg text-amber-200 text-sm font-semibold flex items-center justify-center space-x-2 transition-colors"
                                    >
                                        <FileText className="h-4 w-4" />
                                        <span>Explore Project Layouts</span>
                                        <ChevronRight className="h-4 w-4 ml-1" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Layouts & Floor Plans Modal */}
            {isLayoutModalOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 md:p-8 animate-in fade-in duration-300">
                    <div className="relative bg-slate-900 border border-slate-700 w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
                        
                        {/* Modal Header */}
                        <div className="flex justify-between items-center px-6 py-4 border-b border-slate-800 bg-slate-950">
                            <div>
                                <h3 className="text-xl font-bold text-white">Happy Life Layouts &amp; Floor Plans</h3>
                                <p className="text-xs text-amber-400">Rudra Infrastructure – Where Dreams Find a Home</p>
                            </div>
                            <button
                                onClick={() => setIsLayoutModalOpen(false)}
                                className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 overflow-y-auto flex-grow space-y-6">
                            
                            {/* Main Active Image */}
                            <div className="relative h-72 sm:h-96 w-full bg-slate-950 rounded-xl overflow-hidden border border-slate-800 flex items-center justify-center">
                                <img
                                    src={layoutImages[activeLayoutIndex]}
                                    alt={`Layout ${activeLayoutIndex + 1}`}
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>

                            {/* Layout Thumbnails */}
                            <div>
                                <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wider">Select Layout View</h4>
                                <div className="grid grid-cols-3 gap-3">
                                    {layoutImages.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setActiveLayoutIndex(idx)}
                                            className={`relative h-20 rounded-lg overflow-hidden border-2 transition-all ${
                                                activeLayoutIndex === idx ? "border-amber-400 ring-2 ring-amber-400/30 scale-105" : "border-slate-800 opacity-60 hover:opacity-100"
                                            }`}
                                        >
                                            <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                                            <span className="absolute bottom-1 right-1 bg-black/70 text-[10px] font-bold px-1.5 py-0.5 rounded text-white">
                                                Plan #{idx + 1}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Modal Footer */}
                        <div className="flex flex-col sm:flex-row justify-between items-center px-6 py-4 border-t border-slate-800 bg-slate-950 gap-3">
                            <p className="text-xs text-slate-400">
                                Contact 1 ON 1 INVESTMENT for exact pricing, site visits, and customized booking options.
                            </p>
                            <Link
                                href="/contact"
                                onClick={() => setIsLayoutModalOpen(false)}
                                className="w-full sm:w-auto bg-[var(--secondary)] text-[var(--primary)] font-bold px-6 py-2.5 rounded-lg text-sm text-center hover:bg-opacity-90 transition-colors"
                            >
                                Book Site Visit / Contact Us
                            </Link>
                        </div>

                    </div>
                </div>
            )}
        </section>
    );
}
