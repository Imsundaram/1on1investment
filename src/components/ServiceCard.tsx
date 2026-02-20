import Link from "next/link";

import { ArrowRight, Home, Key, Building2, Paintbrush } from "lucide-react";
import { Button } from "@/components/ui/Button";

const icons = {
    HomeIcon: Home,
    KeyIcon: Key,
    BuildingOfficeIcon: Building2,
    PaintBrushIcon: Paintbrush,
};

interface Service {
    id: number;
    title: string;
    description: string;
    icon: string;
    link: string;
}

export function ServiceCard({ service }: { service: Service }) {
    const Icon = icons[service.icon as keyof typeof icons] || Home;

    return (
        <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-[var(--accent)] w-16 h-16 rounded-full flex items-center justify-center mb-6 text-[var(--secondary)]">
                <Icon size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[var(--primary)]">{service.title}</h3>
            <p className="text-[var(--muted)] mb-6 leading-relaxed">{service.description}</p>
            <Link href={service.link} className="inline-flex items-center text-[var(--secondary)] font-semibold hover:text-[var(--primary)] transition-colors">
                Learn More <ArrowRight size={16} className="ml-2" />
            </Link>
        </div>
    );
}
