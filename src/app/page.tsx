import Link from "next/link";
import { Hero } from "@/components/Hero";
import { PropertyCard } from "@/components/PropertyCard";
import { ServiceCard } from "@/components/ServiceCard";
import { TeamCard } from "@/components/TeamCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Button } from "@/components/ui/Button";
import { services, testimonials } from "@/lib/data";
import { getProperties, getTeam, getSocials } from "@/app/actions";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Property, TeamMember, Socials } from "@/types";
import { formatGoogleDriveUrl } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function Home() {
  const properties = await getProperties() as Property[];
  const team = await getTeam() as TeamMember[];
  const socials = await getSocials() as Socials;

  const featuredProperties = properties.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      <Hero image={socials.heroImage} />

      {/* Featured Properties */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--primary)]">Featured Properties</h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              Explore our handpicked selection of premium properties in Greater Noida & Noida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/properties">
              <Button size="lg" variant="primary">
                View All Properties <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--primary)]">Our Services</h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              Comprehensive real estate solutions tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[var(--primary)] text-white">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose <span className="text-[var(--secondary)]">1 ON 1 INVESTMENT</span>?</h2>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              We separate ourselves with transparent dealings, local expertise, and a commitment to finding you the best value in the market.
            </p>

            <div className="space-y-4">
              {[
                "Trusted Local Experts in Greater Noida & Noida",
                "Transparent & Humble Dealings",
                "Best Market Prices Guaranteed",
                "Complete Documentation Support",
                "One-Stop Solution: Buy, Sell, Rent, Décor"
              ].map((reason, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-[var(--secondary)] flex-shrink-0" />
                  <span className="font-medium text-lg">{reason}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-[var(--secondary)]">
            {/* Placeholder for "Why Us" image - e.g. a handshake or team meeting */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${socials.whyUsImage ? formatGoogleDriveUrl(socials.whyUsImage) : 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'}')`,
                backgroundColor: "#1e293b"
              }}
            ></div>
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--primary)]">What Our Clients Say</h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              Real stories from satisfied homeowners and investors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--primary)]">Meet Our Experts</h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              Dedicated professionals ready to assist you in your property journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.slice(0, 3).map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--secondary)]">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[var(--primary)] text-balance">
            Ready to Make a Smart Move?
          </h2>
          <p className="text-xl text-[var(--primary)] mb-10 max-w-2xl mx-auto font-medium">
            Whether you're buying, selling, or renovating, let's discuss how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto bg-[var(--primary)] text-white hover:bg-slate-800 border-2 border-transparent hover:border-transparent transform hover:-translate-y-1 transition-all shadow-xl">
                Contact Us Today
              </Button>
            </Link>
            <Link href="https://wa.me/919876543210" target="_blank">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transform hover:-translate-y-1 transition-all shadow-xl font-bold">
                WhatsApp Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
