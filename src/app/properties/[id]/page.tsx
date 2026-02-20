import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { getProperties } from "@/app/actions";
import { MapPin, Bed, Bath, Maximize2, ArrowLeft, Phone, Share2 } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Property } from "@/types";

export async function generateStaticParams() {
    const properties = await getProperties();
    return properties.map((property: Property) => ({
        id: property.id.toString(),
    }));
}

import { formatGoogleDriveUrl } from "@/lib/utils";
import { PropertyImage } from "@/components/PropertyImage";

export default async function PropertyDetails({ params }: { params: { id: string } }) {
    const properties = await getProperties();
    const property = properties.find((p: Property) => p.id === parseInt(params.id));

    if (!property) {
        notFound();
    }

    return (
        <div className="bg-slate-50 min-h-screen pt-24 pb-10">
            <div className="container mx-auto px-4 md:px-8">
                {/* Breadcrumb / Back */}
                <div className="mb-6">
                    <Link href="/properties">
                        <Button variant="ghost" size="sm" className="pl-0 hover:bg-transparent hover:text-[var(--secondary)]">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Properties
                        </Button>
                    </Link>
                </div>

                <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                    {/* Image Gallery (Placeholder for single image) */}
                    <div className="relative h-[400px] md:h-[500px] w-full bg-gray-100">
                        <PropertyImage
                            src={formatGoogleDriveUrl(property.image)}
                            alt={property.title}
                        />
                        <div className="absolute top-4 right-4 flex space-x-2">
                            <button className="bg-white p-2 rounded-full shadow hover:text-[var(--secondary)] transition-colors">
                                <Share2 size={20} />
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row">
                        {/* Main Content */}
                        <div className="w-full md:w-2/3 p-8">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h1 className="text-3xl font-bold text-[var(--primary)] mb-2">{property.title}</h1>
                                    <div className="flex items-center text-[var(--muted)]">
                                        <MapPin size={18} className="mr-1 text-[var(--secondary)]" />
                                        <span>{property.location}</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-[var(--primary)]">{property.price}</div>
                                    <div className="bg-[var(--secondary)] text-[var(--primary)] text-xs font-bold px-3 py-1 rounded inline-block mt-1">
                                        {property.category}
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4 border-y border-slate-100 py-6 mb-8">
                                <div className="text-center border-r border-slate-100 last:border-0">
                                    <div className="flex justify-center mb-2 text-[var(--secondary)]">
                                        <Bed size={24} />
                                    </div>
                                    <div className="font-bold text-[var(--primary)]">{property.beds || "-"}</div>
                                    <div className="text-xs text-[var(--muted)]">Bedroom</div>
                                </div>
                                <div className="text-center border-r border-slate-100 last:border-0">
                                    <div className="flex justify-center mb-2 text-[var(--secondary)]">
                                        <Bath size={24} />
                                    </div>
                                    <div className="font-bold text-[var(--primary)]">{property.baths || "-"}</div>
                                    <div className="text-xs text-[var(--muted)]">Bathroom</div>
                                </div>
                                <div className="text-center">
                                    <div className="flex justify-center mb-2 text-[var(--secondary)]">
                                        <Maximize2 size={24} />
                                    </div>
                                    <div className="font-bold text-[var(--primary)]">{property.area}</div>
                                    <div className="text-xs text-[var(--muted)]">Square Feet</div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h2 className="text-xl font-bold mb-4 text-[var(--primary)]">Description</h2>
                                <p className="text-[var(--muted)] leading-relaxed">
                                    Experience luxury living with this stunning {property.type.toLowerCase()} located in the heart of {property.location}.
                                    This property offers modern amenities, spacious interiors, and excellent connectivity to major landmarks.
                                    Perfect for families looking for a peaceful yet connected lifestyle.
                                    {/* Mock description content */}
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold mb-4 text-[var(--primary)]">Amenities (Highlights)</h2>
                                <ul className="grid grid-cols-2 gap-2 text-[var(--muted)]">
                                    <li className="flex items-center"><div className="w-2 h-2 bg-[var(--secondary)] rounded-full mr-2"></div>Power Backup</li>
                                    <li className="flex items-center"><div className="w-2 h-2 bg-[var(--secondary)] rounded-full mr-2"></div>Car Parking</li>
                                    <li className="flex items-center"><div className="w-2 h-2 bg-[var(--secondary)] rounded-full mr-2"></div>24/7 Security</li>
                                    <li className="flex items-center"><div className="w-2 h-2 bg-[var(--secondary)] rounded-full mr-2"></div>Gated Community</li>
                                </ul>
                            </div>
                        </div>

                        {/* Sidebar / Contact */}
                        <div className="w-full md:w-1/3 bg-slate-50 p-8 border-l border-slate-100">
                            <div className="sticky top-24">
                                <h3 className="text-xl font-bold mb-6 text-[var(--primary)]">Interested?</h3>

                                <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 mr-4">
                                            <span className="font-bold text-lg">AS</span>
                                        </div>
                                        <div>
                                            <div className="font-bold text-[var(--primary)]">Amit Sharma</div>
                                            <div className="text-xs text-[var(--muted)]">Property Expert</div>
                                        </div>
                                    </div>
                                    <Button className="w-full mb-3 flex items-center justify-center">
                                        <Phone size={16} className="mr-2" /> Make a Call
                                    </Button>
                                    <Button variant="outline" className="w-full flex items-center justify-center border-green-600 text-green-700 hover:bg-green-50">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="mr-2"
                                        >
                                            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                                        </svg>
                                        WhatsApp Inquiry
                                    </Button>
                                </div>

                                <div className="text-xs text-center text-gray-400">
                                    Ref ID: PROP-{property.id}-2026
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
