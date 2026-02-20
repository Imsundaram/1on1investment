import { getTeam, getSocials } from "@/app/actions";
import { TeamCard } from "@/components/TeamCard";
import { Button } from "@/components/ui/Button";
import { Mail } from "lucide-react";
import Link from "next/link";
import { TeamMember, Socials } from "@/types";
import { formatGoogleDriveUrl } from "@/lib/utils";

import { DisplayImage } from "@/components/DisplayImage";

export const dynamic = "force-dynamic";

export default async function Team() {
    const team: TeamMember[] = await getTeam();
    const socials: Socials = await getSocials();

    return (
        <div className="bg-white min-h-screen pt-28 pb-20">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-6 text-[var(--primary)]">Meet Our Team</h1>
                    <p className="text-lg text-[var(--muted)] max-w-3xl mx-auto whitespace-pre-line">
                        {socials.teamDescription || (
                            <>
                                The dedicated professionals behind <span className="font-semibold text-[var(--secondary)]">1 ON 1 INVESTMENT</span> who make your real estate journey smooth and successful.
                            </>
                        )}
                    </p>
                </div>

                {socials.teamGroupPhoto && (
                    <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl relative h-[400px] md:h-[500px] bg-slate-100">
                        <DisplayImage
                            src={formatGoogleDriveUrl(socials.teamGroupPhoto)}
                            alt="Our Team"
                            className="w-full h-full object-cover"
                            fallbackSrc="https://plus.unsplash.com/premium_photo-1683309565422-77818a287060?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVhbCUyMGVzdGF0ZSUyMHRlYW18ZW58MHx8MHx8fDA%3D"
                        />
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {team.map((member) => (
                        <TeamCard key={member.id} member={member} />
                    ))}
                </div>

                {/* Join Us Section */}
                <div className="mt-24 text-center bg-slate-50 p-12 rounded-2xl">
                    <h2 className="text-3xl font-bold mb-4 text-[var(--primary)]">Join Our Team</h2>
                    <p className="text-[var(--muted)] mb-8 max-w-2xl mx-auto">
                        We are always looking for talented individuals to join our growing family. If you have a passion for real estate, we'd love to hear from you.
                    </p>
                    <Link href="mailto:careers@1on1investment.com">
                        <Button size="lg" variant="outline" className="border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white">
                            <Mail className="mr-2 h-5 w-5" /> Send Your Resume
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
