/*
 * DYNAMIC SERVICE PAGE
 * Renders any service from the SERVICES data array based on the URL slug.
 * Design: dark charcoal hero, gold accents, premium typography.
 */
import { useParams, Link } from "wouter";
import { CheckCircle2, Phone, ArrowRight, ChevronRight } from "lucide-react";
import { SERVICES, COMPANY, TESTIMONIALS } from "@/data/siteData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Star } from "lucide-react";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/hero-premium-JsBEiiMW52Q9AUAikDNAEt.webp";

export default function ServicePage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#F5F3EF" }}>
          <div className="text-center">
            <h1 className="text-3xl font-semibold mb-4" style={{ fontFamily: "Cormorant Garamond, serif", color: "#0F1923" }}>
              Service Not Found
            </h1>
            <Link href="/services">
              <span className="btn-gold px-6 py-3 cursor-pointer">View All Services</span>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const relatedServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);
  const reviews = TESTIMONIALS.slice(0, 3);

  return (
    <>
      <Navbar />
      <div className="min-h-screen" style={{ backgroundColor: "#F5F3EF" }}>

        {/* Hero */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_IMG})` }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(105deg, rgba(10,15,25,0.93) 0%, rgba(10,15,25,0.82) 55%, rgba(10,15,25,0.6) 100%)" }}
          />
          <div className="container relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-6 text-xs" style={{ color: "rgba(245,243,239,0.55)", fontFamily: "DM Sans, sans-serif" }}>
              <Link href="/"><span className="hover:text-[#B8960C] cursor-pointer transition-colors">Home</span></Link>
              <ChevronRight size={12} />
              <Link href="/services"><span className="hover:text-[#B8960C] cursor-pointer transition-colors">Services</span></Link>
              <ChevronRight size={12} />
              <span style={{ color: "#B8960C" }}>{service.title}</span>
            </div>

            <div className="max-w-3xl">
              <div className="inline-block px-3 py-1 mb-5 text-xs font-bold tracking-widest uppercase"
                style={{ backgroundColor: "rgba(184,150,12,0.15)", color: "#B8960C", border: "1px solid rgba(184,150,12,0.3)", fontFamily: "DM Sans, sans-serif" }}>
                {service.category === "commercial" ? "Commercial Service" : service.category === "specialised" ? "Specialised Service" : "Residential Service"}
              </div>
              <h1
                className="text-4xl lg:text-6xl font-semibold leading-tight mb-6"
                style={{ fontFamily: "Cormorant Garamond, serif", color: "#F5F3EF" }}
              >
                {service.title}
              </h1>
              <p className="text-lg leading-relaxed mb-8 max-w-2xl"
                style={{ color: "rgba(245,243,239,0.75)", fontFamily: "DM Sans, sans-serif" }}>
                {service.excerpt}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/get-quote">
                  <span className="btn-gold px-7 py-4 cursor-pointer">Get Free Quote</span>
                </Link>
                <a href={`tel:${COMPANY.phone}`} className="btn-ghost-gold px-7 py-4 flex items-center gap-2">
                  <Phone size={14} />
                  {COMPANY.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: "#F5F3EF" }}>
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-12">

              {/* Main content */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl lg:text-4xl font-semibold mb-6"
                  style={{ fontFamily: "Cormorant Garamond, serif", color: "#0F1923" }}>
                  About This Service
                </h2>
                <p className="text-base leading-relaxed mb-8"
                  style={{ color: "#4a5a6a", fontFamily: "DM Sans, sans-serif", fontSize: "1.05rem" }}>
                  {service.description}
                </p>

                <h3 className="text-2xl font-semibold mb-5"
                  style={{ fontFamily: "Cormorant Garamond, serif", color: "#0F1923" }}>
                  What's Included
                </h3>
                <div className="grid sm:grid-cols-2 gap-3 mb-10">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 p-4"
                      style={{ backgroundColor: "#fff", border: "1px solid #e8e4dc" }}>
                      <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: "#B8960C" }} />
                      <span className="text-sm" style={{ color: "#3a4a5a", fontFamily: "DM Sans, sans-serif" }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Why Choose Octagon */}
                <div className="p-8 mb-8" style={{ backgroundColor: "#0F1923", border: "1px solid rgba(184,150,12,0.2)" }}>
                  <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: "Cormorant Garamond, serif", color: "#F5F3EF" }}>
                    Why Choose Octagon Removals?
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { title: "Fixed-Price Guarantee", desc: "No hidden charges. The price we quote is the price you pay." },
                      { title: "Fully Insured", desc: "Comprehensive goods-in-transit insurance on every move." },
                      { title: "10+ Years Experience", desc: "Over a decade serving London families and businesses." },
                      { title: "4.9★ Trustpilot Rating", desc: "171 verified reviews from real customers." },
                    ].map((item) => (
                      <div key={item.title}>
                        <div className="text-sm font-semibold mb-1" style={{ color: "#B8960C", fontFamily: "DM Sans, sans-serif" }}>
                          {item.title}
                        </div>
                        <div className="text-sm" style={{ color: "rgba(245,243,239,0.7)", fontFamily: "DM Sans, sans-serif" }}>
                          {item.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quote CTA */}
                <div className="p-6" style={{ backgroundColor: "#fff", border: "1px solid rgba(184,150,12,0.25)" }}>
                  <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "Cormorant Garamond, serif", color: "#0F1923" }}>
                    Get a Free Quote
                  </h3>
                  <p className="text-sm mb-4" style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}>
                    We'll call you within 1 hour to discuss your requirements.
                  </p>
                  <Link href="/get-quote">
                    <span className="btn-gold w-full text-center py-3 text-sm block cursor-pointer">
                      Request Free Quote
                    </span>
                  </Link>
                  <a href={`tel:${COMPANY.phone}`}
                    className="flex items-center justify-center gap-2 mt-3 py-3 text-sm font-semibold transition-colors hover:text-[#B8960C]"
                    style={{ color: "#0F1923", border: "1px solid rgba(184,150,12,0.3)", fontFamily: "DM Sans, sans-serif" }}>
                    <Phone size={13} />
                    {COMPANY.phoneDisplay}
                  </a>
                </div>

                {/* Trust signals */}
                <div className="p-6" style={{ backgroundColor: "#0F1923" }}>
                  <div className="flex items-center gap-2 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#B8960C] text-[#B8960C]" />
                    ))}
                  </div>
                  <div className="text-2xl font-semibold mb-1" style={{ fontFamily: "Cormorant Garamond, serif", color: "#B8960C" }}>
                    4.9/5
                  </div>
                  <div className="text-sm" style={{ color: "rgba(245,243,239,0.7)", fontFamily: "DM Sans, sans-serif" }}>
                    From 171 Trustpilot reviews
                  </div>
                  <div className="mt-3 pt-3 border-t" style={{ borderColor: "rgba(184,150,12,0.2)" }}>
                    <div className="text-sm" style={{ color: "rgba(245,243,239,0.7)", fontFamily: "DM Sans, sans-serif" }}>
                      323 Google Reviews · 10+ Years Experience · Fully Insured
                    </div>
                  </div>
                </div>

                {/* Other services */}
                <div className="p-6" style={{ backgroundColor: "#fff", border: "1px solid #e8e4dc" }}>
                  <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: "Cormorant Garamond, serif", color: "#0F1923" }}>
                    Other Services
                  </h3>
                  <div className="space-y-2">
                    {relatedServices.map((s) => (
                      <Link key={s.slug} href={`/services/${s.slug}`}>
                        <div className="flex items-center justify-between py-2 border-b cursor-pointer hover:text-[#B8960C] transition-colors"
                          style={{ borderColor: "#f0ece4", color: "#3a4a5a", fontFamily: "DM Sans, sans-serif", fontSize: "0.875rem" }}>
                          {s.title}
                          <ArrowRight size={13} style={{ color: "#B8960C" }} />
                        </div>
                      </Link>
                    ))}
                    <Link href="/services">
                      <div className="pt-2 text-xs font-bold tracking-widest uppercase cursor-pointer hover:underline"
                        style={{ color: "#B8960C", fontFamily: "DM Sans, sans-serif" }}>
                        View All Services →
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-16" style={{ backgroundColor: "#0F1923" }}>
          <div className="container">
            <h2 className="text-3xl font-semibold text-center mb-10"
              style={{ fontFamily: "Cormorant Garamond, serif", color: "#F5F3EF" }}>
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              {reviews.map((review) => (
                <div key={review.name} className="p-6"
                  style={{ backgroundColor: "#1A2535", border: "1px solid rgba(184,150,12,0.15)" }}>
                  <div className="flex mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={12} className="fill-[#B8960C] text-[#B8960C]" />
                    ))}
                  </div>
                  <blockquote className="text-sm leading-relaxed mb-4 italic"
                    style={{ color: "rgba(245,243,239,0.8)", fontFamily: "Cormorant Garamond, serif", fontSize: "1rem" }}>
                    "{review.text}"
                  </blockquote>
                  <div className="text-sm font-semibold" style={{ color: "#B8960C", fontFamily: "DM Sans, sans-serif" }}>
                    {review.name}
                    {review.location && <span className="font-normal text-xs ml-2" style={{ color: "#8A9BB0" }}>{review.location}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16" style={{ backgroundColor: "#F5F3EF" }}>
          <div className="container text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4"
              style={{ fontFamily: "Cormorant Garamond, serif", color: "#0F1923" }}>
              Ready to Book Your {service.title}?
            </h2>
            <p className="text-base mb-8 max-w-lg mx-auto"
              style={{ color: "#5a6a7a", fontFamily: "DM Sans, sans-serif" }}>
              Get your free, no-obligation fixed-price quote today. We'll call you within 1 hour.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/get-quote">
                <span className="btn-gold px-10 py-4 cursor-pointer">Get Free Quote</span>
              </Link>
              <a href={`tel:${COMPANY.phone}`} className="btn-ghost-gold px-10 py-4 flex items-center gap-2">
                <Phone size={14} />
                {COMPANY.phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
