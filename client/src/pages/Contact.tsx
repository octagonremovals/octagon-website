/*
 * CONTACT PAGE — Octagon Removals
 * Real company data, brand colours, tRPC-connected contact form.
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, CheckCircle2, MessageCircle, ChevronRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import { trpc } from "@/lib/trpc";
import { COMPANY, LOCAL_PHONES } from "@/data/siteData";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/hero-london-skyline-DmMBPd63dY4PtTxKwbd9Ro.webp";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const contactMutation = trpc.leads.submitContact.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      toast.success("Message sent! We'll be in touch within 1 hour.");
    },
    onError: () => {
      toast.error("Something went wrong. Please call us directly on 0208 521 8000.");
    },
  });

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    contactMutation.mutate(form);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen" style={{ backgroundColor: "#F5F3EF" }}>

        {/* Hero */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_IMG})` }} />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(105deg, rgba(10,15,25,0.93) 0%, rgba(10,15,25,0.75) 100%)" }} />
          <div className="container relative z-10">
            <div className="flex items-center gap-2 mb-6 text-xs"
              style={{ color: "rgba(245,243,239,0.55)", fontFamily: "DM Sans, sans-serif" }}>
              <Link href="/"><span className="hover:text-[#B8960C] cursor-pointer transition-colors">Home</span></Link>
              <ChevronRight size={12} />
              <span style={{ color: "#B8960C" }}>Contact Us</span>
            </div>
            <div className="max-w-3xl">
              <span className="eyebrow block mb-4">Get in Touch</span>
              <h1 className="text-5xl lg:text-7xl font-semibold leading-tight mb-6"
                style={{ fontFamily: "Cormorant Garamond, serif", color: "#F5F3EF" }}>
                Contact Us
              </h1>
              <p className="text-lg leading-relaxed max-w-2xl"
                style={{ color: "rgba(245,243,239,0.75)", fontFamily: "DM Sans, sans-serif" }}>
                Mon–Fri 8am–6pm · Sat 8am–3pm. Call, WhatsApp, or fill in the form and we'll respond within 1 hour during office hours.
              </p>
            </div>
          </div>
        </section>

        {/* Contact grid */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">

              {/* Left: contact info */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-semibold mb-8"
                  style={{ fontFamily: "Cormorant Garamond, serif", color: "#0F1923" }}>
                  How to Reach Us
                </h2>

                {/* Primary contact cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: Phone, label: "Main Phone", value: COMPANY.phoneDisplay, sub: "Mon–Fri 8am–6pm · Sat 8am–3pm", href: `tel:${COMPANY.phone}` },
                    { icon: Mail, label: "Email", value: COMPANY.email, sub: "Reply within 1 hour (office hours)", href: `mailto:${COMPANY.email}` },
                    { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", sub: "Quick responses", href: COMPANY.whatsapp },
                    { icon: Clock, label: "Hours", value: "Mon–Fri 8am–6pm", sub: "Saturday 8am–3pm", href: null },
                  ].map((item) => (
                    <div key={item.label}
                      className="p-5 transition-all duration-200"
                      style={{ backgroundColor: "#fff", border: "1px solid #e8e4dc" }}
                      onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.borderColor = "#B8960C"}
                      onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.borderColor = "#e8e4dc"}
                    >
                      <div className="w-9 h-9 flex items-center justify-center mb-3"
                        style={{ backgroundColor: "rgba(184,150,12,0.1)", border: "1px solid rgba(184,150,12,0.2)" }}>
                        <item.icon size={16} style={{ color: "#B8960C" }} />
                      </div>
                      <div className="text-xs font-bold tracking-widest uppercase mb-1"
                        style={{ color: "#B8960C", fontFamily: "DM Sans, sans-serif" }}>{item.label}</div>
                      {item.href ? (
                        <a href={item.href}
                          className="font-semibold text-sm block transition-colors"
                          style={{ color: "#0F1923", fontFamily: "DM Sans, sans-serif" }}
                          onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "#B8960C"}
                          onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "#0F1923"}
                        >{item.value}</a>
                      ) : (
                        <div className="font-semibold text-sm" style={{ color: "#0F1923", fontFamily: "DM Sans, sans-serif" }}>{item.value}</div>
                      )}
                      <div className="text-xs mt-0.5" style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}>{item.sub}</div>
                    </div>
                  ))}
                </div>

                {/* Office address */}
                <div className="p-5 mb-8"
                  style={{ backgroundColor: "#0F1923", border: "1px solid rgba(184,150,12,0.2)" }}>
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: "#B8960C" }} />
                    <div>
                      <div className="text-xs font-bold tracking-widest uppercase mb-1"
                        style={{ color: "#B8960C", fontFamily: "DM Sans, sans-serif" }}>Registered Office</div>
                      <div className="text-sm" style={{ color: "rgba(245,243,239,0.8)", fontFamily: "DM Sans, sans-serif" }}>
                        {COMPANY.address}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Local numbers */}
                <div>
                  <h3 className="text-xl font-semibold mb-4"
                    style={{ fontFamily: "Cormorant Garamond, serif", color: "#0F1923" }}>
                    Local Numbers
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {LOCAL_PHONES.filter(p => p.area !== "All Other Areas").map((p) => (
                      <a key={p.area} href={`tel:${p.phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-2 py-2 px-3 text-sm transition-all"
                        style={{ backgroundColor: "#fff", border: "1px solid #e8e4dc", fontFamily: "DM Sans, sans-serif" }}
                        onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.borderColor = "#B8960C"}
                        onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.borderColor = "#e8e4dc"}
                      >
                        <Phone size={12} style={{ color: "#B8960C" }} />
                        <span style={{ color: "#5a6a7a" }}>{p.area}:</span>
                        <span className="font-semibold" style={{ color: "#0F1923" }}>{p.display}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: contact form */}
              <div>
                <div className="p-8 lg:p-10"
                  style={{ backgroundColor: "#fff", border: "1px solid #e8e4dc" }}>
                  {submitted ? (
                    <div className="text-center py-10">
                      <CheckCircle2 size={48} className="mx-auto mb-4" style={{ color: "#B8960C" }} />
                      <h3 className="text-2xl font-semibold mb-3"
                        style={{ fontFamily: "Cormorant Garamond, serif", color: "#0F1923" }}>
                        Message Sent!
                      </h3>
                      <p className="text-sm" style={{ color: "#5a6a7a", fontFamily: "DM Sans, sans-serif" }}>
                        Thank you for getting in touch. We'll respond to <strong>{form.email}</strong> within 1 hour during business hours.
                      </p>
                    </div>
                  ) : (
                    <>
                      <span className="eyebrow block mb-2">Send a Message</span>
                      <h2 className="text-2xl lg:text-3xl font-semibold mb-6"
                        style={{ fontFamily: "Cormorant Garamond, serif", color: "#0F1923" }}>
                        We'd Love to Hear From You
                      </h2>
                      <form onSubmit={submit} className="flex flex-col gap-4">
                        <div>
                          <label className="block text-xs font-bold tracking-wider uppercase mb-1.5"
                            style={{ color: "#5a6a7a", fontFamily: "DM Sans, sans-serif" }}>
                            Full Name <span style={{ color: "#B8960C" }}>*</span>
                          </label>
                          <input type="text" value={form.name}
                            onChange={(e) => update("name", e.target.value)}
                            placeholder="Your full name"
                            className="input-premium w-full" />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-bold tracking-wider uppercase mb-1.5"
                              style={{ color: "#5a6a7a", fontFamily: "DM Sans, sans-serif" }}>
                              Email <span style={{ color: "#B8960C" }}>*</span>
                            </label>
                            <input type="email" value={form.email}
                              onChange={(e) => update("email", e.target.value)}
                              placeholder="you@example.com"
                              className="input-premium w-full" />
                          </div>
                          <div>
                            <label className="block text-xs font-bold tracking-wider uppercase mb-1.5"
                              style={{ color: "#5a6a7a", fontFamily: "DM Sans, sans-serif" }}>
                              Phone
                            </label>
                            <input type="tel" value={form.phone}
                              onChange={(e) => update("phone", e.target.value)}
                              placeholder="07700 000000"
                              className="input-premium w-full" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-bold tracking-wider uppercase mb-1.5"
                            style={{ color: "#5a6a7a", fontFamily: "DM Sans, sans-serif" }}>
                            Message <span style={{ color: "#B8960C" }}>*</span>
                          </label>
                          <textarea value={form.message}
                            onChange={(e) => update("message", e.target.value)}
                            placeholder="Tell us about your enquiry..."
                            rows={5}
                            className="input-premium w-full resize-none" />
                        </div>
                        <button type="submit"
                          disabled={contactMutation.isPending}
                          className="btn-gold w-full py-4 text-sm mt-1"
                          style={{ opacity: contactMutation.isPending ? 0.7 : 1 }}>
                          {contactMutation.isPending ? "Sending..." : "Send Message"}
                        </button>
                        <p className="text-xs text-center" style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}>
                          We respond within 1 hour · No spam · No obligation
                        </p>
                      </form>
                    </>
                  )}
                </div>

                {/* Quick quote CTA */}
                <div className="mt-5 p-6"
                  style={{ backgroundColor: "#0F1923", border: "1px solid rgba(184,150,12,0.2)" }}>
                  <h3 className="font-semibold text-lg mb-2"
                    style={{ fontFamily: "Cormorant Garamond, serif", color: "#F5F3EF" }}>
                    Need a Quote Instead?
                  </h3>
                  <p className="text-sm mb-4"
                    style={{ color: "rgba(245,243,239,0.6)", fontFamily: "DM Sans, sans-serif" }}>
                    Use our dedicated quote form for the fastest response — takes under 2 minutes.
                  </p>
                  <Link href="/get-quote">
                    <span className="btn-gold w-full py-3 text-sm text-center block cursor-pointer">
                      Get My Free Quote →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
