import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { getSocials } from "@/app/actions";

export async function Footer() {
    const socials = await getSocials();

    return (
        <footer className="bg-[var(--primary)] text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">
                            1 ON 1 <span className="text-[var(--secondary)]">INVESTMENT</span>
                        </h3>
                        <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                            We are a trusted real estate and home improvement company serving Greater Noida and Noida.
                        </p>
                        <div className="flex space-x-4">
                            {socials.facebook && (
                                <Link href={socials.facebook} target="_blank" className="hover:text-[var(--secondary)] transition-colors">
                                    <Facebook size={20} />
                                </Link>
                            )}
                            {socials.twitter && (
                                <Link href={socials.twitter} target="_blank" className="hover:text-[var(--secondary)] transition-colors">
                                    <Twitter size={20} />
                                </Link>
                            )}
                            {socials.instagram && (
                                <Link href={socials.instagram} target="_blank" className="hover:text-[var(--secondary)] transition-colors">
                                    <Instagram size={20} />
                                </Link>
                            )}
                            {socials.linkedin && (
                                <Link href={socials.linkedin} target="_blank" className="hover:text-[var(--secondary)] transition-colors">
                                    <Linkedin size={20} />
                                </Link>
                            )}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-[var(--secondary)]">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="hover:text-[var(--secondary)] transition-colors">About Us</Link></li>
                            <li><Link href="/properties" className="hover:text-[var(--secondary)] transition-colors">Properties</Link></li>
                            <li><Link href="/services" className="hover:text-[var(--secondary)] transition-colors">Services</Link></li>
                            <li><Link href="/team" className="hover:text-[var(--secondary)] transition-colors">Our Team</Link></li>
                            <li><Link href="/contact" className="hover:text-[var(--secondary)] transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-[var(--secondary)]">Contact Us</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start space-x-3">
                                <MapPin className="mt-1 h-5 w-5 text-[var(--secondary)] flex-shrink-0" />
                                <span>{socials.address || "Greater Noida & Noida, Uttar Pradesh, India"}</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-[var(--secondary)] flex-shrink-0" />
                                <span>{socials.phone || "+91 98765 43210"}</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-[var(--secondary)] flex-shrink-0" />
                                <span>{socials.email || "info@1on1investment.com"}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-[var(--secondary)]">Newsletter</h4>
                        <p className="text-sm text-gray-300 mb-4">Subscribe to our newsletter for the latest property updates.</p>
                        <form className="flex flex-col space-y-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-slate-800 border border-slate-700 rounded px-4 py-2 text-white focus:outline-none focus:border-[var(--secondary)]"
                            />
                            <button
                                type="submit"
                                className="bg-[var(--secondary)] text-[var(--primary)] font-semibold py-2 rounded hover:bg-opacity-90 transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-slate-700 mt-12 pt-8 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} 1 ON 1 INVESTMENT. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
