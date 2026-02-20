"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Menu, X, Phone, User, Home, Info, Briefcase } from "lucide-react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/", icon: Home },
        { name: "Properties", href: "/properties", icon: Home }, // Or another icon
        { name: "Services", href: "/services", icon: Briefcase },
        { name: "About Us", href: "/about", icon: Info },
        { name: "Team", href: "/team", icon: User },
        { name: "Contact", href: "/contact", icon: Phone },
    ];

    const isHome = pathname === "/";
    const showSolidNav = !isHome || scrolled;

    return (
        <header
            className={`fixed top-0 w-full z-[100] transition-all duration-300 ${showSolidNav ? "bg-[#0f172a] shadow-md py-2" : "bg-transparent py-3 md:py-4"
                } text-white`}
        >
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-xl md:text-2xl font-bold tracking-wide">
                    <span className="text-white">1 ON 1</span>{" "}
                    <span className="text-[var(--secondary)]">INVESTMENT</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`font-medium transition-colors hover:text-[var(--secondary)] ${pathname === link.href ? "text-[var(--secondary)]" : "text-white"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/contact">
                        <Button size="sm" variant="secondary">
                            Get in Touch
                        </Button>
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 rounded-md focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <X className="text-white" size={28} />
                    ) : (
                        <Menu className="text-white" size={28} />
                    )}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full py-4 px-4 flex flex-col space-y-4 shadow-lg animate-in slide-in-from-top-5 bg-[var(--primary)] border-t border-slate-700">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`flex items-center space-x-2 text-lg font-medium p-2 rounded-md hover:bg-slate-800 ${pathname === link.href ? "text-[var(--secondary)]" : "text-white"
                                }`}
                            onClick={() => setIsOpen(false)}
                        >
                            <link.icon className="h-5 w-5" />
                            <span>{link.name}</span>
                        </Link>
                    ))}
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                        <Button className="w-full" variant="secondary">
                            Contact Us
                        </Button>
                    </Link>
                </div>
            )}
        </header>
    );
}
