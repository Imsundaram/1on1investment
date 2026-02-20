"use client";

import { useState } from "react";
import { PropertyCard } from "@/components/PropertyCard";
import { Button } from "@/components/ui/Button";
import { Property } from "@/types";

export function PropertiesList({ initialProperties }: { initialProperties: Property[] }) {
    const [filter, setFilter] = useState("All");

    const categories = ["All", "Residential", "Commercial", "Rental"];

    const filteredProperties = filter === "All"
        ? initialProperties
        : initialProperties.filter((p: Property) => p.type === filter || p.category === filter);

    return (
        <div className="bg-slate-50 min-h-screen pt-28 pb-20">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4 text-[var(--primary)]">Our Properties</h1>
                    <p className="text-[var(--muted)] max-w-2xl mx-auto">
                        Browse our exclusive listings in Greater Noida & Noida to find your perfect match.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex justify-center flex-wrap gap-4 mb-12">
                    {categories.map((cat) => (
                        <Button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            variant={filter === cat ? "primary" : "outline"}
                            className={`${filter === cat ? "bg-[var(--primary)] text-white" : "text-[var(--primary)] bg-white hover:bg-slate-100"}`}
                        >
                            {cat}
                        </Button>
                    ))}
                </div>

                {/* Properties Grid */}
                {filteredProperties.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProperties.map((property) => (
                            <PropertyCard key={property.id} property={property} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <h3 className="text-2xl font-semibold text-[var(--muted)]">No properties found in this category.</h3>
                        <Button variant="outline" className="mt-4" onClick={() => setFilter("All")}>
                            View All Properties
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
