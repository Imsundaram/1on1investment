"use client";

import Link from "next/link";
import { Phone, Mail, User } from "lucide-react";
import Image from "next/image";

import { TeamMember } from "@/types";

import { formatGoogleDriveUrl } from "@/lib/utils";

export function TeamCard({ member }: { member: TeamMember }) {
    return (
        <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            {/* Profile Image (Placeholder for now until images are provided) */}
            <div className="relative h-48 w-48 mx-auto mt-8 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gray-100">
                <img
                    src={formatGoogleDriveUrl(member.image)}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400"; // Fallback team image
                        e.currentTarget.onerror = null;
                    }}
                />
                {/* Fallback if image fails or is missing (handled by Next/Image partially but visual fallback is good) */}
                {!member.image && (
                    <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
                        <User size={64} />
                    </div>
                )}
            </div>

            <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1 text-[var(--primary)]">{member.name}</h3>
                <p className="text-[var(--secondary)] font-medium mb-4 uppercase tracking-wider text-sm">{member.role}</p>
                <p className="text-[var(--muted)] mb-6 text-sm flex-grow min-h-[60px]">{member.bio}</p>

                <div className="flex justify-center space-x-3">
                    <Link href={`tel:${member.phone}`} title="Call Now">
                        <div className="bg-[var(--primary)] text-white p-3 rounded-full hover:bg-[var(--secondary)] hover:text-[var(--primary)] transition-colors shadow-lg">
                            <Phone size={20} />
                        </div>
                    </Link>
                    <Link href={`https://wa.me/${member.phone.replace(/[^0-9]/g, "")}`} title="WhatsApp" target="_blank" rel="noopener noreferrer">
                        <div className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors shadow-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-message-circle"
                            >
                                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                            </svg>
                        </div>
                    </Link>
                    <Link href={`mailto:${member.email}`} title="Email">
                        <div className="bg-slate-200 text-[var(--primary)] p-3 rounded-full hover:bg-slate-300 transition-colors shadow-lg">
                            <Mail size={20} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
