import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FurnitureDismantlingPage() {
  return (
    <>
      <SEOHead
        title="Furniture Dismantling & Reassembly London | Octagon Removals"
        description="Expert furniture dismantling and reassembly services across London. Fixed price, fully insured."
        canonical="/services/furniture-dismantling"
      />
      <Navbar />
      <main className="min-h-screen flex items-center justify-center py-24" style={{ backgroundColor: "#F5F3EF" }}>
        <div className="text-center">
          <h1 className="text-4xl font-semibold mb-4" style={{ fontFamily: "Cormorant Garamond, serif", color: "#0F1923" }}>
            Furniture Dismantling & Reassembly
          </h1>
          <p className="text-base" style={{ color: "#5a6a7a" }}>Coming soon — full content being prepared.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
