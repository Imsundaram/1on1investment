"use client";

import Image from "next/image";
import Link from "next/link";
import { Bed, Bath, MapPin, Maximize2, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

import { Property } from "@/types";

import { formatGoogleDriveUrl } from "@/lib/utils";

export function PropertyCard({ property }: { property: Property }) {
    return (
        <div className="group bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            {/* Listing Image */}
            <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                    src={formatGoogleDriveUrl(property.image)}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"; // Fallback property image
                        e.currentTarget.onerror = null; // Prevent infinite loop
                    }}
                />
                {/* Status Badge */}
                <div className="absolute top-4 left-4 bg-[var(--secondary)] text-[var(--primary)] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {property.category}
                </div>

                {/* Price Badge */}
                <div className="absolute bottom-4 right-4 bg-[var(--primary)] text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-md">
                    {property.price}
                </div>
            </div>

            {/* Property Details */}
            <div className="p-6">
                <h3 className="text-xl font-bold truncate mb-2 text-[var(--foreground)] group-hover:text-[var(--secondary)] transition-colors">
                    <Link href={`/properties/${property.id}`} className="hover:underline">
                        {property.title}
                    </Link> {/* TODO: Create individual property page if needed */}
                </h3>

                <div className="flex items-center text-sm text-[var(--muted)] mb-4">
                    <MapPin size={16} className="mr-1 text-[var(--secondary)]" />
                    <span className="truncate">{property.location}</span>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-y-2 mb-6 border-t border-b border-slate-100 py-4 text-sm font-medium text-[var(--muted)]">
                    {property.beds && (
                        <div className="flex items-center">
                            <Bed size={18} className="mr-2 text-slate-400" />
                            <span>{property.beds} Beds</span>
                        </div>
                    )}
                    {property.baths && (
                        <div className="flex items-center">
                            <Bath size={18} className="mr-2 text-slate-400" />
                            <span>{property.baths} Baths</span>
                        </div>
                    )}
                    <div className="flex items-center">
                        <Maximize2 size={18} className="mr-2 text-slate-400" />
                        <span>{property.area}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="bg-slate-100 text-[var(--primary)] text-xs px-2 py-1 rounded capitalize">{property.type}</span>
                    </div>
                </div>

                {/* CTA */}
                <div className="flex justify-between items-center">
                    <Link href="/contact" className="w-full">
                        <Button size="sm" variant="outline" className="w-full justify-center group-hover:bg-[var(--primary)] group-hover:text-white group-hover:border-[var(--primary)] transition-colors">
                            <Phone size={16} className="mr-2" /> Contact Agent
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
