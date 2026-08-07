"use client";

import { useState } from "react";
import { Sparkles, FileText, Download, CheckCircle2, Phone, X, ShieldCheck, MapPin, Building2, Eye } from "lucide-react";
import Link from "next/link";

interface SpecialProjectSlideProps {
    mainImage?: string;
    brochurePdf?: string;
    layout90GajPdf?: string;
    layout100GajPdf?: string;
}

export function SpecialProjectSlide({
    mainImage = "/images/happy-life-hero.jpeg",
    brochurePdf = "/downloads/BROCHURE5.pdf",
    layout90GajPdf = "/downloads/Happy life villa.pdf",
    layout100GajPdf = "/downloads/Happy life villa 100 gaj.pdf"
}: SpecialProjectSlideProps) {
    const [pdfModalUrl, setPdfModalUrl] = useState<string | null>(null);
    const [modalTitle, setModalTitle] = useState<string>("");

    const openPdfViewer = (url: string, title: string) => {
        setPdfModalUrl(url);
        setModalTitle(title);
    };

    return (
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white overflow-hidden border-y-4 border-[var(--secondary)]">
            {/* Ambient Background Accents */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/15 via-transparent to-transparent pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[var(--secondary)]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                
                {/* Header Badge & Title */}
                <div className="max-w-4xl mx-auto text-center space-y-4 mb-10 md:mb-12 px-2">
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-400/20 via-yellow-500/20 to-amber-500/20 border border-amber-400/40 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-amber-300 text-xs md:text-sm font-semibold tracking-wider uppercase backdrop-blur-md shadow-xl max-w-full">
                        <Sparkles className="h-4 w-4 text-amber-400 animate-pulse flex-shrink-0" />
                        <span className="truncate">Featured Project • ₹85 Lakh Starting</span>
                    </div>

                    <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight text-balance">
                        Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-200">Happy Life</span>
                    </h2>
                    
                    <p className="text-base sm:text-xl md:text-2xl font-medium text-amber-200/90 italic text-balance">
                        by Rudra Infrastructure – &ldquo;Where Dreams Find a Home&rdquo;
                    </p>

                    <div className="inline-block bg-slate-800/80 border border-slate-700/80 backdrop-blur-md px-4 sm:px-6 py-2 rounded-2xl text-slate-200 text-xs sm:text-sm md:text-base font-medium shadow-md max-w-full leading-relaxed">
                        <MapPin className="inline-block h-4 w-4 text-amber-400 mr-1.5 flex-shrink-0" />
                        Premium Semi-Furnished Duplex Villas | Sector 16/B, Sadullapur, Greater Noida
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
                    
                    {/* Left Column: Visual Banner Card with Non-Overlapping Price Tag */}
                    <div className="lg:col-span-6">
                        <div className="relative group rounded-3xl overflow-hidden border-2 border-amber-400/40 shadow-2xl bg-slate-900">
                            
                            {/* Main Image */}
                            <div className="relative h-80 sm:h-96 md:h-[450px] w-full overflow-hidden">
                                <img
                                    src={mainImage}
                                    alt="Happy Life by Rudra Infrastructure"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20" />
                                
                                {/* Top Badges Row (Non-overlapping Flex Container) */}
                                <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between gap-2 z-10">
                                    <div className="bg-slate-950/90 backdrop-blur-md border border-amber-400/40 text-amber-300 text-[11px] sm:text-xs md:text-sm font-bold px-2.5 sm:px-3 py-1.5 rounded-xl shadow-lg flex items-center space-x-1.5">
                                        <Building2 className="h-3.5 w-3.5 text-amber-400 flex-shrink-0" />
                                        <span className="truncate max-w-[140px] sm:max-w-none">Freesias Infratech</span>
                                    </div>

                                    <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-extrabold text-xs sm:text-sm md:text-base px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl shadow-xl border border-yellow-200 flex-shrink-0 whitespace-nowrap">
                                        Starting ₹85 Lakh
                                    </div>
                                </div>

                                {/* Bottom Info Overlay */}
                                <div className="absolute bottom-6 left-6 right-6 space-y-2">
                                    <h3 className="text-2xl font-bold text-white drop-shadow-md">Happy Life Duplex Villas</h3>
                                    <p className="text-sm text-slate-300">Available in 90 Gaj &amp; 100 Gaj Independent Luxury Villas</p>

                                    {/* Action Quick Bar */}
                                    <div className="grid grid-cols-2 gap-3 pt-2">
                                        <button
                                            onClick={() => openPdfViewer(layout90GajPdf, "Happy Life - 90 Gaj Floor Plan Layout")}
                                            className="py-2.5 px-3 bg-slate-900/90 hover:bg-slate-800 border border-amber-400/40 rounded-xl text-amber-300 text-xs md:text-sm font-semibold flex items-center justify-center space-x-2 transition-colors"
                                        >
                                            <FileText className="h-4 w-4 text-amber-400" />
                                            <span>90 Gaj Layout</span>
                                        </button>

                                        <button
                                            onClick={() => openPdfViewer(layout100GajPdf, "Happy Life - 100 Gaj Floor Plan Layout")}
                                            className="py-2.5 px-3 bg-slate-900/90 hover:bg-slate-800 border border-amber-400/40 rounded-xl text-amber-300 text-xs md:text-sm font-semibold flex items-center justify-center space-x-2 transition-colors"
                                        >
                                            <FileText className="h-4 w-4 text-amber-400" />
                                            <span>100 Gaj Layout</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Key Details & Amenities */}
                    <div className="lg:col-span-6 space-y-6">
                        
                        {/* Highlights Specs Box */}
                        <div className="grid grid-cols-2 gap-4 bg-slate-900/80 border border-slate-800 p-5 rounded-2xl backdrop-blur-md shadow-lg">
                            <div className="space-y-1">
                                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Starting Price</span>
                                <p className="text-xl md:text-2xl font-extrabold text-amber-400">₹85 Lakh</p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Configurations</span>
                                <p className="text-sm md:text-base font-bold text-white">3 Bedrooms | 4 Washrooms</p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Plot Sizes</span>
                                <p className="text-sm md:text-base font-bold text-white">90 Gaj &amp; 100 Gaj Villas</p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Developer</span>
                                <p className="text-sm md:text-base font-bold text-amber-300">Freesias Infratech Pvt. Ltd.</p>
                            </div>
                        </div>

                        {/* Project Highlights & Amenities */}
                        <div className="space-y-3">
                            <h4 className="text-lg font-bold text-white flex items-center space-x-2">
                                <ShieldCheck className="h-5 w-5 text-amber-400" />
                                <span>Project Highlights &amp; Amenities</span>
                            </h4>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    "Fully developed gated community with secure environment",
                                    "22 FT wide main road & 20 FT wide internal road",
                                    "24×7 CCTV Security & underground electricity",
                                    "Landscaped gardens, green zones & Dedicated kids' play area",
                                    "Essential utilities: Water supply & Rainwater harvesting",
                                    "Ample visitor parking available"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start space-x-2.5 bg-white/5 border border-white/10 p-3 rounded-xl backdrop-blur-sm">
                                        <CheckCircle2 className="h-5 w-5 text-[var(--secondary)] flex-shrink-0 mt-0.5" />
                                        <span className="text-xs md:text-sm font-medium text-slate-200 leading-snug">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            
                            {/* Download Brochure Button */}
                            <a
                                href={brochurePdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-yellow-400 hover:to-amber-500 text-slate-950 font-extrabold py-3.5 px-4 rounded-xl shadow-xl hover:shadow-amber-500/20 transform hover:-translate-y-0.5 transition-all text-sm"
                            >
                                <Download className="h-4 w-4" />
                                <span>Download Full Brochure</span>
                            </a>

                            {/* Book a Site Visit Button */}
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center space-x-2 bg-[var(--secondary)] text-[var(--primary)] hover:bg-opacity-90 font-extrabold py-3.5 px-4 rounded-xl shadow-xl transform hover:-translate-y-0.5 transition-all text-sm"
                            >
                                <Phone className="h-4 w-4" />
                                <span>Book a Site Visit</span>
                            </Link>

                            {/* View 90 Gaj Layout Button */}
                            <button
                                onClick={() => openPdfViewer(layout90GajPdf, "Happy Life - 90 Gaj Floor Plan Layout")}
                                className="inline-flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-semibold py-3 px-4 rounded-xl shadow transition-all text-xs md:text-sm"
                            >
                                <Eye className="h-4 w-4 text-amber-400" />
                                <span>View 90 Gaj Floor Plan</span>
                            </button>

                            {/* View 100 Gaj Layout Button */}
                            <button
                                onClick={() => openPdfViewer(layout100GajPdf, "Happy Life - 100 Gaj Floor Plan Layout")}
                                className="inline-flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-semibold py-3 px-4 rounded-xl shadow transition-all text-xs md:text-sm"
                            >
                                <Eye className="h-4 w-4 text-amber-400" />
                                <span>View 100 Gaj Floor Plan</span>
                            </button>

                        </div>

                    </div>

                </div>
            </div>

            {/* Document / Layout PDF Viewer Modal */}
            {pdfModalUrl && (
                <div className="fixed inset-0 z-[250] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8 animate-in fade-in duration-300">
                    <div className="relative bg-slate-900 border border-slate-700 w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[90vh]">
                        
                        {/* Modal Header */}
                        <div className="flex justify-between items-center px-6 py-4 border-b border-slate-800 bg-slate-950">
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-white">{modalTitle}</h3>
                                <p className="text-xs text-amber-400">Happy Life by Rudra Infrastructure (Freesias Infratech Pvt. Ltd.)</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <a
                                    href={pdfModalUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs flex items-center space-x-1 hover:bg-yellow-300 transition-colors"
                                >
                                    <Download className="h-4 w-4" />
                                    <span className="hidden sm:inline">Download</span>
                                </a>
                                <button
                                    onClick={() => setPdfModalUrl(null)}
                                    className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                                >
                                    <X className="h-6 w-6" />
                                </button>
                            </div>
                        </div>

                        {/* Modal Document Frame */}
                        <div className="flex-grow bg-slate-950 relative">
                            <iframe
                                src={pdfModalUrl}
                                className="w-full h-full border-0"
                                title={modalTitle}
                            />
                        </div>

                        {/* Modal Footer */}
                        <div className="flex flex-col sm:flex-row justify-between items-center px-6 py-3.5 border-t border-slate-800 bg-slate-950 gap-2">
                            <p className="text-xs text-slate-400">
                                📍 Sector 16/B, Sadullapur, Greater Noida | Developed by Freesias Infratech Pvt. Ltd.
                            </p>
                            <Link
                                href="/contact"
                                onClick={() => setPdfModalUrl(null)}
                                className="bg-[var(--secondary)] text-[var(--primary)] font-bold px-5 py-2 rounded-lg text-xs md:text-sm hover:bg-opacity-90 transition-colors"
                            >
                                Book a Site Visit
                            </Link>
                        </div>

                    </div>
                </div>
            )}
        </section>
    );
}
