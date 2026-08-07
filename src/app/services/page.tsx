import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Home, Key, Building2, Paintbrush, Phone } from "lucide-react";

// Icons mapping
const icons = {
    HomeIcon: Home,
    KeyIcon: Key,
    BuildingOfficeIcon: Building2,
    PaintBrushIcon: Paintbrush,
};

// Detailed service data
const servicesDetailed = [
    {
        id: "sale-purchase",
        title: "Property Sale & Purchase",
        description: "Whether you are looking to sell your property at the best market price or buy your dream home, we provide end-to-end assistance. Our team evaluates your property, finds the right buyers/sellers, and handles all documentation for a hassle-free transaction.",
        icon: Home,
        features: ["Market Valuation", "Buyer/Seller Connect", "Legal Documentation", "Negotiation Support"]
    },
    {
        id: "rental",
        title: "Rental & Leasing Services",
        description: "We connect tenants with the perfect rental properties and help landlords find reliable tenants. From residential apartments to commercial office spaces, we manage the entire leasing process efficiently.",
        icon: Building2,
        features: ["Tenant Screening", "Rental Agreement", "Property Management", "Commercial Leasing"]
    },
    {
        id: "painting",
        title: "Interior Painting Services",
        description: "Give your home a fresh look with our professional interior painting services. We use premium paints and modern techniques to deliver a flawless finish that reflects your style.",
        icon: Paintbrush,
        features: ["Color Consultation", "Texture Painting", "Wall Stencil Art", "Waterproofing"]
    },
    {
        id: "decor",
        title: "Home Décor & Styling",
        description: "Transform your living space with our expert home décor and styling services. We help you choose the right furniture, lighting, and accessories to create a space that is both functional and beautiful.",
        icon: Key, // Placeholder icon
        features: ["Space Planning", "Furniture Selection", "Lighting Design", "Art & Accessories"]
    }
];

export default function Services() {
    return (
        <div className="bg-white min-h-screen py-20">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--primary)]">Our Services</h1>
                    <p className="text-lg text-[var(--muted)] max-w-3xl mx-auto">
                        At <span className="font-semibold text-[var(--secondary)]">1 ON 1 INVESTMENT</span>, we offer a complete range of real estate and home improvement services under one roof.
                    </p>
                </div>

                <div className="space-y-16">
                    {servicesDetailed.map((service, index) => (
                        <div
                            key={service.id}
                            id={service.id}
                            className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Icon/Image Side */}
                            <div className="w-full md:w-1/3 flex justify-center">
                                <div className="bg-[var(--accent)] p-12 rounded-full shadow-lg text-[var(--secondary)]">
                                    <service.icon size={80} strokeWidth={1.5} />
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full md:w-2/3">
                                <h2 className="text-3xl font-bold mb-4 text-[var(--primary)] text-center md:text-left">{service.title}</h2>
                                <div className="h-1 w-20 bg-[var(--secondary)] mb-6 mx-auto md:mx-0"></div>
                                <p className="text-[var(--muted)] text-lg mb-6 leading-relaxed text-center md:text-left">
                                    {service.description}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center space-x-2 text-[var(--primary)] font-medium">
                                            <div className="w-2 h-2 bg-[var(--secondary)] rounded-full"></div>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="text-center md:text-left">
                                    <Link href="/contact">
                                        <Button size="lg" className="inline-flex items-center">
                                            <Phone className="mr-2 h-5 w-5" /> Call Now
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
