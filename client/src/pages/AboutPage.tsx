/*
 * ABOUT PAGES — Our Story, Core Values, Mission, Our Team
 * Rendered dynamically based on /about/:section URL param.
 */
import { useParams, Link } from "wouter";
import { TEAM, COMPANY } from "@/data/siteData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, ChevronRight } from "lucide-react";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/packing-premium-MXhcty4EFXNRpPTY6MCqyW.webp";

function OurStory() {
  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
        <div>
          <span className="eyebrow block mb-3">Our Story</span>
          <h2 className="text-4xl lg:text-5xl font-semibold mb-6 leading-tight"
            style={{ fontFamily: "Cormorant Garamond, serif", color: "#0F1923" }}>
            Artists of Removals
          </h2>
          <p className="text-base leading-relaxed mb-5"
            style={{ color: "#4a5a6a", fontFamily: "DM Sans, sans-serif" }}>
            Octagon Removals was born from the determination of a father who, at 50, used decades of logistics experience to start a moving company with a single Luton van. His son joined after the first year, and together they built something extraordinary over three transformative years.
          </p>
          <p className="text-base leading-relaxed mb-5"
            style={{ color: "#4a5a6a", fontFamily: "DM Sans, sans-serif" }}>
            In 2017, Octagon Removals Ltd was formally established — a modern enterprise rooted in unshakeable work ethics. The name itself was inspired by the M25 motorway, whose octagonal shape on the map defines the territory we serve and the community we are proud to be part of.
          </p>
          <p className="text-base leading-relaxed"
            style={{ color: "#4a5a6a", fontFamily: "DM Sans, sans-serif" }}>
            Today, we serve many dozens of clients every week across London, the M25 and Europe. We believe that removals, when executed at the pinnacle of performance, is an art form. That is why we call ourselves the <em>"Artists of Removals"</em> — a commitment to surpassing expectations on every single move.
          </p>
        </div>
        <div>
          <img
            src={HERO_IMG}
            alt="Octagon Removals team at work"
            className="w-full object-cover"
            style={{ height: "480px" }}
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-12 border-t border-b"
        style={{ borderColor: "#e8e4dc" }}>
        {[
          { value: "Est. 2017", label: "Founded" },
          { value: "10,000+", label: "Moves Completed" },
          { value: "4.8★", label: "Trustpilot Rating" },
          { value: "4.9★", label: "Google Rating" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-4xl font-semibold mb-1"
              style={{ fontFamily: "Cormorant Garamond, serif", color: "#B8960C" }}>
              {stat.value}
            </div>
            <div className="text-xs tracking-wider uppercase"
              style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CoreValues() {
  const values = [
    {
      title: "Integrity",
      desc: "We are transparent in everything we do. The price we quote is the price you pay — no hidden charges, no surprises. We believe that trust is earned through honesty and consistency.",
    },
    {
      title: "Excellence",
      desc: "We hold ourselves to the highest standards in every aspect of our service. From the way we pack a box to the way we communicate with our clients, excellence is non-negotiable.",
    },
    {
      title: "Care",
      desc: "Your belongings are not just objects — they hold memories and meaning. We treat every item with the same care we would give to our own possessions.",
    },
    {
      title: "Reliability",
      desc: "We show up on time, every time. Our clients trust us with one of the most important days of their lives, and we take that responsibility seriously.",
    },
    {
      title: "Innovation",
      desc: "We continuously improve our processes, equipment, and training to deliver the best possible moving experience. We embrace new ideas and technologies that benefit our clients.",
    },
    {
      title: "Community",
      desc: "We are proud to be part of the London community. We support local charities, donate unwanted items responsibly, and strive to minimise our environmental footprint.",
    },
  ];

  return (
    <div>
      <div className="text-center mb-14">
        <span className="eyebrow block mb-3">Our Core Values</span>
        <h2 className="text-4xl lg:text-5xl font-semibold"
          style={{ fontFamily: "Cormorant Garamond, serif", color: "#0F1923" }}>
          What We Stand For
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-base"
          style={{ color: "#5a6a7a", fontFamily: "DM Sans, sans-serif" }}>
          Our values are not just words on a wall — they are the principles that guide every decision we make and every move we complete.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((v, i) => (
          <div key={v.title} className="p-8"
            style={{ backgroundColor: i % 2 === 0 ? "#0F1923" : "#fff", border: `1px solid ${i % 2 === 0 ? "rgba(184,150,12,0.2)" : "#e8e4dc"}` }}>
            <div className="text-3xl font-semibold mb-3"
              style={{ fontFamily: "Cormorant Garamond, serif", color: "#B8960C" }}>
              0{i + 1}
            </div>
            <h3 className="text-xl font-semibold mb-3"
              style={{ fontFamily: "Cormorant Garamond, serif", color: i % 2 === 0 ? "#F5F3EF" : "#0F1923" }}>
              {v.title}
            </h3>
            <p className="text-sm leading-relaxed"
              style={{ color: i % 2 === 0 ? "rgba(245,243,239,0.7)" : "#5a6a7a", fontFamily: "DM Sans, sans-serif" }}>
              {v.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Mission() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-14">
        <span className="eyebrow block mb-3">Our Mission</span>
        <h2 className="text-4xl lg:text-5xl font-semibold"
          style={{ fontFamily: "Cormorant Garamond, serif", color: "#0F1923" }}>
          Making Room For Your Expansion
        </h2>
      </div>

      <div className="p-10 mb-10"
        style={{ backgroundColor: "#0F1923", border: "1px solid rgba(184,150,12,0.25)" }}>
        <blockquote className="text-2xl lg:text-3xl font-semibold leading-relaxed text-center italic"
          style={{ fontFamily: "Cormorant Garamond, serif", color: "#F5F3EF" }}>
          "Our mission is to provide the highest quality removals service in London — one that combines professionalism, care, and transparency to give our clients complete peace of mind on moving day."
        </blockquote>
        <div className="text-center mt-6 text-sm font-semibold" style={{ color: "#B8960C", fontFamily: "DM Sans, sans-serif" }}>
          — Octagon Removals Ltd
        </div>
      </div>

      <div className="space-y-6">
        {[
          {
            title: "To be London's most trusted removals company",
            desc: "We measure our success not by the number of moves we complete, but by the number of clients who trust us with their most important day. Every 5-star review is a reminder of why we do what we do.",
          },
          {
            title: "To make moving a positive experience",
            desc: "Moving is one of life's most stressful events. Our mission is to change that. Through meticulous planning, clear communication, and skilled execution, we turn moving day into a milestone to celebrate.",
          },
          {
            title: "To set the standard for the industry",
            desc: "We believe the removals industry deserves better. We are committed to raising the bar through professional training, premium equipment, and a culture of continuous improvement.",
          },
        ].map((item) => (
          <div key={item.title} className="flex gap-6 p-6"
            style={{ backgroundColor: "#fff", border: "1px solid #e8e4dc" }}>
            <div className="w-1 shrink-0" style={{ backgroundColor: "#B8960C" }} />
            <div>
              <h3 className="text-xl font-semibold mb-2"
                style={{ fontFamily: "Cormorant Garamond, serif", color: "#0F1923" }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed"
                style={{ color: "#5a6a7a", fontFamily: "DM Sans, sans-serif" }}>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OurTeam() {
  return (
    <div>
      <div className="text-center mb-14">
        <span className="eyebrow block mb-3">Our Team</span>
        <h2 className="text-4xl lg:text-5xl font-semibold"
          style={{ fontFamily: "Cormorant Garamond, serif", color: "#0F1923" }}>
          The People Behind Every Move
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-base"
          style={{ color: "#5a6a7a", fontFamily: "DM Sans, sans-serif" }}>
          Our team is our greatest asset. Every member is trained, vetted, and committed to delivering the premium Octagon standard on every move.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TEAM.map((member) => (
          <div key={member.name} className="p-6"
            style={{ backgroundColor: "#fff", border: "1px solid #e8e4dc" }}>
            {/* Avatar placeholder */}
            <div className="w-16 h-16 flex items-center justify-center mb-4 text-2xl font-bold"
              style={{ backgroundColor: "#0F1923", color: "#B8960C", fontFamily: "Cormorant Garamond, serif" }}>
              {member.name.charAt(0)}
            </div>
            <h3 className="text-xl font-semibold mb-0.5"
              style={{ fontFamily: "Cormorant Garamond, serif", color: "#0F1923" }}>
              {member.name}
            </h3>
            <div className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "#B8960C", fontFamily: "DM Sans, sans-serif" }}>
              {member.role}
            </div>
            <p className="text-sm leading-relaxed mb-5"
              style={{ color: "#5a6a7a", fontFamily: "DM Sans, sans-serif" }}>
              {member.bio}
            </p>
            {/* Skills */}
            <div className="space-y-2">
              {member.skills.map((skill) => (
                <div key={skill.label}>
                  <div className="flex justify-between text-xs mb-1"
                    style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}>
                    <span>{skill.label}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <div className="h-1 w-full" style={{ backgroundColor: "#e8e4dc" }}>
                    <div className="h-1" style={{ width: `${skill.value}%`, backgroundColor: "#B8960C" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const SECTIONS: Record<string, { title: string; component: React.FC }> = {
  "our-story": { title: "Our Story", component: OurStory },
  "core-values": { title: "Our Core Values", component: CoreValues },
  mission: { title: "Our Mission", component: Mission },
  team: { title: "Our Team", component: OurTeam },
};

export default function AboutPage() {
  const params = useParams<{ section: string }>();
  const section = params.section || "our-story";
  const current = SECTIONS[section] || SECTIONS["our-story"];
  const Component = current.component;

  return (
    <>
      <Navbar />
      <div className="min-h-screen" style={{ backgroundColor: "#F5F3EF" }}>

        {/* Hero */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_IMG})` }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(105deg, rgba(10,15,25,0.93) 0%, rgba(10,15,25,0.75) 100%)" }}
          />
          <div className="container relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-6 text-xs"
              style={{ color: "rgba(245,243,239,0.55)", fontFamily: "DM Sans, sans-serif" }}>
              <Link href="/"><span className="hover:text-[#B8960C] cursor-pointer transition-colors">Home</span></Link>
              <ChevronRight size={12} />
              <span style={{ color: "#B8960C" }}>About Us</span>
              <ChevronRight size={12} />
              <span style={{ color: "#B8960C" }}>{current.title}</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-semibold mb-4"
              style={{ fontFamily: "Cormorant Garamond, serif", color: "#F5F3EF" }}>
              {current.title}
            </h1>
            <p className="text-lg max-w-xl"
              style={{ color: "rgba(245,243,239,0.7)", fontFamily: "DM Sans, sans-serif" }}>
              Octagon Removals Ltd — London's Premium Removals Company
            </p>
          </div>
        </section>

        {/* Sub-nav */}
        <div style={{ backgroundColor: "#0F1923", borderBottom: "1px solid rgba(184,150,12,0.2)" }}>
          <div className="container">
            <div className="flex gap-0 overflow-x-auto">
              {Object.entries(SECTIONS).map(([slug, sec]) => (
                <Link key={slug} href={`/about/${slug}`}>
                  <div
                    className="px-5 py-4 text-sm font-medium whitespace-nowrap cursor-pointer transition-colors border-b-2"
                    style={{
                      color: section === slug ? "#B8960C" : "rgba(245,243,239,0.6)",
                      borderColor: section === slug ? "#B8960C" : "transparent",
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  >
                    {sec.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <Component />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16" style={{ backgroundColor: "#0F1923" }}>
          <div className="container text-center">
            <h2 className="text-3xl font-semibold mb-4"
              style={{ fontFamily: "Cormorant Garamond, serif", color: "#F5F3EF" }}>
              Ready to Experience the Octagon Difference?
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
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
