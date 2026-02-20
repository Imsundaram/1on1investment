import { Star, User } from "lucide-react";

interface Testimonial {
    id: number;
    name: string;
    review: string;
    rating: number;
    location: string;
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        size={18}
                        className={`${i < testimonial.rating ? "text-[var(--secondary)] fill-current" : "text-gray-300"}`}
                    />
                ))}
            </div>
            <p className="text-[var(--primary)] text-lg italic mb-6 leading-relaxed">"{testimonial.review}"</p>
            <div className="flex items-center mt-auto">
                <div className="bg-slate-200 rounded-full h-12 w-12 flex items-center justify-center text-slate-500 mr-4">
                    <User size={24} />
                </div>
                <div>
                    <h4 className="font-bold text-[var(--primary)]">{testimonial.name}</h4>
                    <span className="text-sm text-[var(--muted)]">{testimonial.location}</span>
                </div>
            </div>
        </div>
    );
}
