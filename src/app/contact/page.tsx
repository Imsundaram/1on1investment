import { getSocials } from "@/app/actions";
import { ContactForm } from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Socials } from "@/types";
import { formatGoogleDriveUrl } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function Contact() {
    const socials: Socials = await getSocials();

    // Default map if not set
    const mapUrl = socials.googleMapUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112173.3828779634!2d77.26252906873528!3d28.527252738749595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x10524360e8612f0!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin";

    return (
        <div className="bg-slate-50 min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--primary)]">Contact Us</h1>
                    <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
                        Get in touch with us for any inquiries about buying, selling, renting properties or home interior services.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info Side */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[var(--primary)]">
                            <h2 className="text-2xl font-bold mb-6 text-[var(--primary)]">Contact Information</h2>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-[var(--accent)] p-3 rounded-full text-[var(--secondary)]">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-[var(--primary)]">Our Office</h3>
                                        {socials.officeImage && (
                                            <div className="mb-2 mt-1 w-full h-32 relative rounded-lg overflow-hidden">
                                                <img
                                                    src={formatGoogleDriveUrl(socials.officeImage)}
                                                    alt="Office"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        )}
                                        <p className="text-[var(--muted)] whitespace-pre-line">{socials.address || "Sector 18, Noida, Uttar Pradesh"}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="bg-[var(--accent)] p-3 rounded-full text-[var(--secondary)]">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-[var(--primary)]">Call Us</h3>
                                        <p className="text-[var(--muted)]">{socials.phone || "+91 98765 43210"}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="bg-[var(--accent)] p-3 rounded-full text-[var(--secondary)]">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-[var(--primary)]">Email Us</h3>
                                        <p className="text-[var(--muted)]">{socials.email || "info@1on1investment.com"}</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-[var(--accent)] p-3 rounded-full text-[var(--secondary)]">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-[var(--primary)]">Business Hours</h3>
                                        <p className="text-[var(--muted)] whitespace-pre-line">{socials.officeHours || "Mon - Sat: 10:00 AM - 7:00 PM\nSun: Closed"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-white p-4 rounded-xl shadow-lg h-64 w-full overflow-hidden relative">
                            <iframe
                                src={mapUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form Side */}
                    <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl border-t-4 border-[var(--secondary)]">
                        <h2 className="text-3xl font-bold mb-6 text-[var(--primary)]">Send Us a Message</h2>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
