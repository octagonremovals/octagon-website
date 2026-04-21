import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { MapView } from "@/components/Map";

const LOCATIONS = [
  { name: "North London", slug: "north-london", lat: 51.5720, lng: -0.1072, phone: "0208 521 8000", areas: "Finchley, Enfield, Islington, Archway" },
  { name: "South London", slug: "south-london", lat: 51.4613, lng: -0.1156, phone: "0208 521 8000", areas: "Bromley, Croydon, Orpington, Lewisham" },
  { name: "East London", slug: "east-london", lat: 51.5200, lng: 0.0550, phone: "0208 521 8000", areas: "Romford, Brentwood, Dartford, Greenwich" },
  { name: "West London", slug: "west-london", lat: 51.5074, lng: -0.3500, phone: "0208 521 8000", areas: "Uxbridge, Twickenham, Kingston, Fulham" },
  { name: "Central London", slug: "central-london", lat: 51.5074, lng: -0.1278, phone: "0208 521 8000", areas: "Westminster, City, Canary Wharf, Southwark" },
  { name: "Bromley", slug: "bromley", lat: 51.4063, lng: 0.0139, phone: "0208 927 0542", areas: "Bromley, Beckenham, Orpington, Penge" },
  { name: "Epsom", slug: "epsom", lat: 51.3350, lng: -0.2689, phone: "0137 267 9060", areas: "Epsom, Ewell, Sutton, Cheam" },
  { name: "Watford", slug: "watford", lat: 51.6565, lng: -0.3960, phone: "0192 396 4026", areas: "Watford, Hemel Hempstead, St Albans, Bushey" },
  { name: "Brentwood", slug: "brentwood", lat: 51.6207, lng: 0.3040, phone: "0127 728 7453", areas: "Brentwood, Chelmsford, Basildon, Billericay" },
  { name: "Romford", slug: "romford", lat: 51.5752, lng: 0.1833, phone: "0170 897 3210", areas: "Romford, Hornchurch, Upminster, Dagenham" },
  { name: "Greenwich", slug: "greenwich", lat: 51.4826, lng: 0.0077, phone: "0203 002 6383", areas: "Greenwich, Woolwich, Charlton, Eltham" },
  { name: "Islington", slug: "islington", lat: 51.5416, lng: -0.1027, phone: "0203 667 8598", areas: "Islington, Highbury, Canonbury, Angel" },
  { name: "Finchley", slug: "finchley", lat: 51.5998, lng: -0.1878, phone: "0208 521 8000", areas: "Finchley, Barnet, East Finchley, Whetstone" },
  { name: "Fulham", slug: "fulham", lat: 51.4749, lng: -0.2009, phone: "0208 521 8000", areas: "Fulham, Hammersmith, Parsons Green, Putney" },
  { name: "Kingston", slug: "kingston-upon-thames", lat: 51.4085, lng: -0.3064, phone: "0208 521 8000", areas: "Kingston, Surbiton, New Malden, Tolworth" },
  { name: "Dartford", slug: "dartford", lat: 51.4468, lng: 0.2168, phone: "0208 521 8000", areas: "Dartford, Gravesend, Swanley, Erith" },
  { name: "Twickenham", slug: "twickenham", lat: 51.4491, lng: -0.3336, phone: "0208 521 8000", areas: "Twickenham, Richmond, Hampton, Whitton" },
];

export default function ServiceAreaMap() {
  const [selectedLocation, setSelectedLocation] = useState<typeof LOCATIONS[0] | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const mapRef = useRef<google.maps.Map | null>(null);

  function handleMapReady(map: google.maps.Map) {
    mapRef.current = map;

    // Add markers for all locations
    LOCATIONS.forEach(loc => {
      const marker = new google.maps.Marker({
        position: { lat: loc.lat, lng: loc.lng },
        map,
        title: loc.name,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: "#B8960C",
          fillOpacity: 1,
          strokeColor: "#fff",
          strokeWeight: 2,
        },
      });

      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="font-family: DM Sans, sans-serif; padding: 8px; min-width: 180px;">
            <div style="font-weight: 700; color: #0F1923; margin-bottom: 4px;">${loc.name}</div>
            <div style="font-size: 12px; color: #6b7280; margin-bottom: 6px;">${loc.areas}</div>
            <a href="tel:${loc.phone.replace(/\s/g, "")}" style="color: #B8960C; font-weight: 600; font-size: 13px;">📞 ${loc.phone}</a>
          </div>
        `,
      });

      marker.addListener("click", () => {
        infoWindow.open(map, marker);
        setSelectedLocation(loc);
      });

      markersRef.current.push(marker);
    });

    // Draw a rough service area polygon around London + M25
    new google.maps.Circle({
      map,
      center: { lat: 51.5074, lng: -0.1278 },
      radius: 50000, // 50km radius
      fillColor: "#B8960C",
      fillOpacity: 0.06,
      strokeColor: "#B8960C",
      strokeOpacity: 0.3,
      strokeWeight: 2,
    });
  }

  return (
    <div className="min-h-screen" style={{ background: "#F5F3EF" }}>
      <SEOHead
        title="Service Areas — Octagon Removals London | All Areas We Cover"
        description="Octagon Removals covers all of London and the M25 area. Find your local team in Bromley, Epsom, Watford, Brentwood, Romford, Greenwich, Islington, and all London postcodes."
        canonical="/service-areas"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-12" style={{ background: "#0F1923" }}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{ background: "rgba(184,150,12,0.15)", color: "#B8960C", border: "1px solid rgba(184,150,12,0.3)" }}>
              <MapPin size={14} />
              SERVICE AREAS
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              We Cover All of London<br />
              <span style={{ color: "#B8960C" }}>and the M25 Region</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              With dedicated local teams across 17 areas, we're never far away. Click any pin to find your local team and phone number.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Map */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden" style={{ height: "560px", boxShadow: "0 8px 40px rgba(0,0,0,0.12)" }}>
              <MapView
                initialCenter={{ lat: 51.5074, lng: -0.1278 }}
                initialZoom={10}
                onMapReady={handleMapReady}
                className="w-full h-full"
              />
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              Click any gold pin to see local contact details and service areas
            </p>
          </div>

          {/* Location list */}
          <div className="space-y-2 overflow-y-auto" style={{ maxHeight: "580px" }}>
            <h2 className="text-lg font-bold mb-4" style={{ color: "#0F1923", fontFamily: "Cormorant Garamond, serif" }}>
              All Service Areas
            </h2>
            {LOCATIONS.map(loc => (
              <motion.div
                key={loc.slug}
                whileHover={{ x: 4 }}
                className="p-4 rounded-xl cursor-pointer transition-all"
                style={{
                  background: selectedLocation?.slug === loc.slug ? "#0F1923" : "#fff",
                  border: selectedLocation?.slug === loc.slug ? "1px solid #B8960C" : "1px solid #e5e7eb",
                  boxShadow: selectedLocation?.slug === loc.slug ? "0 4px 20px rgba(184,150,12,0.15)" : "0 1px 4px rgba(0,0,0,0.04)",
                }}
                onClick={() => {
                  setSelectedLocation(loc);
                  if (mapRef.current) {
                    mapRef.current.panTo({ lat: loc.lat, lng: loc.lng });
                    mapRef.current.setZoom(13);
                  }
                }}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="font-bold text-sm" style={{ color: selectedLocation?.slug === loc.slug ? "#B8960C" : "#0F1923" }}>
                      {loc.name}
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: selectedLocation?.slug === loc.slug ? "#9ca3af" : "#6b7280" }}>
                      {loc.areas}
                    </div>
                  </div>
                  <a
                    href={`tel:${loc.phone.replace(/\s/g, "")}`}
                    className="text-xs font-semibold flex-shrink-0 flex items-center gap-1"
                    style={{ color: "#B8960C" }}
                    onClick={e => e.stopPropagation()}
                  >
                    <Phone size={10} />
                    {loc.phone}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Selected location detail */}
        {selectedLocation && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-8 rounded-2xl"
            style={{ background: "#0F1923" }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  Removals in {selectedLocation.name}
                </h3>
                <p className="text-gray-300 text-sm">
                  Serving {selectedLocation.areas} and surrounding areas
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${selectedLocation.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm"
                  style={{ background: "#B8960C", color: "#fff" }}
                >
                  <Phone size={14} />
                  {selectedLocation.phone}
                </a>
                <Link
                  href={`/locations/${selectedLocation.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm border-2"
                  style={{ borderColor: "rgba(255,255,255,0.2)", color: "#fff" }}
                >
                  View {selectedLocation.name} Page
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-6">Not sure if we cover your area? Call us on <a href="tel:02085218000" className="font-bold" style={{ color: "#B8960C" }}>0208 521 8000</a> and we'll let you know.</p>
          <Link
            href="/get-quote"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-lg font-bold text-white"
            style={{ background: "#0F1923" }}
          >
            Get Your Free Quote
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
