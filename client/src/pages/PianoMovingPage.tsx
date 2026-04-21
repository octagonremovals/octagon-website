import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PianoMovingPage() {
  return (
    <>
      <SEOHead
        title="Piano Moving London | Octagon Removals"
        description="Specialist piano moving service across London. Fixed price, fully insured."
        canonical="/services/piano-moving"
      />
      <Navbar />
      <main className="min-h-screen flex items-center justify-center py-24" style={{ backgroundColor: "#F5F3EF" }}>
        <div className="text-center">
          <h1 className="text-4xl font-semibold mb-4" style={{ fontFamily: "Cormorant Garamond, serif", color: "#0F1923" }}>
            Piano Moving
          </h1>
          <p className="text-base" style={{ color: "#5a6a7a" }}>Coming soon — full content being prepared.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
