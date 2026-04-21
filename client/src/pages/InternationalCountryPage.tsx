import { useParams } from "wouter";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function InternationalCountryPage() {
  const { country } = useParams<{ country: string }>();
  const countryName = country
    ? country.charAt(0).toUpperCase() + country.slice(1).replace(/-/g, " ")
    : "International";

  return (
    <>
      <SEOHead
        title={`Removals to ${countryName} | Octagon Removals`}
        description={`International removals to ${countryName}. Fixed price, fully insured. Call 0208 521 8000 for a free quote.`}
        canonical={`/international-removals/${country}`}
      />
      <Navbar />
      <main className="min-h-screen flex items-center justify-center py-24" style={{ backgroundColor: "#F5F3EF" }}>
        <div className="text-center">
          <h1 className="text-4xl font-semibold mb-4" style={{ fontFamily: "Cormorant Garamond, serif", color: "#0F1923" }}>
            International Removals to {countryName}
          </h1>
          <p className="text-base" style={{ color: "#5a6a7a" }}>Coming soon — full content being prepared.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
