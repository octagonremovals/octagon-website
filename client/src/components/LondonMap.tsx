/**
 * LondonMap — Interactive Google Maps with real borough boundaries
 * - OR-WATERMARK.png markers at each borough centroid
 * - Larger touch targets on mobile
 * - Hover: subtle grey tint polygon fill appears
 * - Tooltip: borough name + move count
 * - Click: navigate to /locations/:slug
 */
import { useRef, useState, useCallback } from "react";
import { useLocation } from "wouter";
import { MapView } from "@/components/Map";
import { londonBoroughs } from "@/data/londonBoroughs";

const GOLD = "#B8960C";
// Hover: subtle grey fill + soft dark grey border (not too contrasty)
const GREY_FILL_DEFAULT = "rgba(0,0,0,0)";
const GREY_STROKE_DEFAULT = "rgba(0,0,0,0)";
const GREY_FILL_HOVER = "rgba(80,80,80,0.42)";
const GREY_STROKE_HOVER = "rgba(40,40,40,0.80)";
const CHARCOAL = "#0F1923";

interface TooltipState {
  name: string;
  moveCount: number;
  x: number;
  y: number;
}

/** Build an animated SVG data URL for the gold pulsing dot marker */
const OR_WATERMARK_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/OR-WATERMARK_062d483e.png";

function buildOctagonIcon(size: number): google.maps.Icon {
  const half = size / 2;
  return {
    url: OR_WATERMARK_URL,
    scaledSize: new google.maps.Size(size, size),
    anchor: new google.maps.Point(half, half),
  };
}

export default function LondonMap() {
  const [, navigate] = useLocation();
  const mapRef = useRef<google.maps.Map | null>(null);
  const dataLayerRef = useRef<google.maps.Data | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  const handleMapReady = useCallback((map: google.maps.Map) => {
    mapRef.current = map;

    map.setCenter({ lat: 51.505, lng: -0.09 });
    map.setZoom(10);

    map.setOptions({
      styles: [
        { elementType: "geometry", stylers: [{ color: "#1a2332" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#8a9bb0" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#0f1923" }] },
        { featureType: "road", elementType: "geometry", stylers: [{ color: "#2a3a4a" }] },
        { featureType: "road.arterial", elementType: "geometry", stylers: [{ color: "#2a4060" }] },
        { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#3a5070" }] },
        { featureType: "water", elementType: "geometry", stylers: [{ color: "#0d1f2d" }] },
        { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#4a6a8a" }] },
        { featureType: "poi", stylers: [{ visibility: "off" }] },
        { featureType: "transit", stylers: [{ visibility: "off" }] },
        { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#c8a84a" }] },
        { featureType: "administrative.neighborhood", elementType: "labels", stylers: [{ visibility: "off" }] },
      ],
      disableDefaultUI: true,
      zoomControl: true,
      zoomControlOptions: { position: google.maps.ControlPosition.RIGHT_BOTTOM },
      gestureHandling: "cooperative",
    });

    // Data layer — polygons invisible by default, revealed on hover
    const dataLayer = new google.maps.Data({ map });
    dataLayerRef.current = dataLayer;

    londonBoroughs.forEach((borough) => {
      const feature = new google.maps.Data.Feature({
        id: borough.slug,
        geometry: new google.maps.Data.Polygon(
          borough.coordinates.map(ring =>
            ring.map(([lng, lat]) => new google.maps.LatLng(lat, lng))
          )
        ),
        properties: { name: borough.name, slug: borough.slug, moveCount: borough.moveCount },
      });
      dataLayer.add(feature);
    });

    dataLayer.setStyle({
      fillColor: GREY_FILL_DEFAULT,
      fillOpacity: 1,
      strokeColor: GREY_STROKE_DEFAULT,
      strokeWeight: 1.5,
      strokeOpacity: 1,
    });

    // Hover: reveal subtle grey tint polygon
    dataLayer.addListener("mouseover", (event: google.maps.Data.MouseEvent) => {
      dataLayer.overrideStyle(event.feature, {
        fillColor: GREY_FILL_HOVER,
        fillOpacity: 1,
        strokeColor: GREY_STROKE_HOVER,
        strokeWeight: 3,
        strokeOpacity: 1,
      });
      const name = event.feature.getProperty("name") as string;
      const moveCount = event.feature.getProperty("moveCount") as number;
      const slug = event.feature.getProperty("slug") as string;
      setHoveredSlug(slug);
      if (containerRef.current && event.domEvent) {
        const rect = containerRef.current.getBoundingClientRect();
        const me = event.domEvent as MouseEvent;
        setTooltip({ name, moveCount, x: me.clientX - rect.left, y: me.clientY - rect.top });
      }
    });

    dataLayer.addListener("mousemove", (event: google.maps.Data.MouseEvent) => {
      if (containerRef.current && event.domEvent) {
        const rect = containerRef.current.getBoundingClientRect();
        const me = event.domEvent as MouseEvent;
        setTooltip(prev => prev ? { ...prev, x: me.clientX - rect.left, y: me.clientY - rect.top } : null);
      }
    });

    dataLayer.addListener("mouseout", () => {
      dataLayer.revertStyle();
      setTooltip(null);
      setHoveredSlug(null);
    });

    dataLayer.addListener("click", (event: google.maps.Data.MouseEvent) => {
      const slug = event.feature.getProperty("slug") as string;
      if (slug) navigate(`/locations/${slug}`);
    });

    dataLayer.addListener("mouseover", () => {
      if (mapRef.current) mapRef.current.getDiv().style.cursor = "pointer";
    });
    dataLayer.addListener("mouseout", () => {
      if (mapRef.current) mapRef.current.getDiv().style.cursor = "";
    });

    // Detect touch device for marker size
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const markerSize = isTouch ? 36 : 22;

    // Clear old markers
    markersRef.current.forEach(m => m.setMap(null));
    markersRef.current = [];

    // Add animated SVG dot markers at each borough centroid
    londonBoroughs.forEach((borough) => {
      const ring = borough.coordinates[0];
      const lats = ring.map(([, lat]) => lat);
      const lngs = ring.map(([lng]) => lng);
      const centroidLat = (Math.min(...lats) + Math.max(...lats)) / 2;
      const centroidLng = (Math.min(...lngs) + Math.max(...lngs)) / 2;

      const marker = new google.maps.Marker({
        position: { lat: centroidLat, lng: centroidLng },
        map,
        icon: buildOctagonIcon(markerSize),
        title: borough.name,
        zIndex: 20,
        optimized: false, // required for SVG animation to work
      });

      marker.addListener("click", () => navigate(`/locations/${borough.slug}`));
      markersRef.current.push(marker);
    });
  }, [navigate]);

  return (
    <div style={{ backgroundColor: CHARCOAL, fontFamily: "DM Sans, sans-serif" }}>
      <div ref={containerRef} className="relative w-full" style={{ height: "520px" }}>
        <MapView className="w-full h-full" onMapReady={handleMapReady} />

        {/* Tooltip */}
        {tooltip && (
          <div
            className="pointer-events-none absolute z-50 px-3 py-2 rounded shadow-lg"
            style={{
              left: tooltip.x + 14,
              top: tooltip.y - 48,
              backgroundColor: "rgba(15,25,35,0.95)",
              border: `1px solid ${GOLD}`,
              minWidth: 160,
              transform: tooltip.x > 400 ? "translateX(-110%)" : undefined,
            }}
          >
            <p className="font-semibold text-sm" style={{ color: GOLD, fontFamily: "Cormorant Garamond, serif" }}>
              {tooltip.name}
            </p>
            <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.75)" }}>
              <span style={{ color: GOLD, fontWeight: 600 }}>{tooltip.moveCount.toLocaleString()}</span>
              {" "}moves completed
            </p>
          </div>
        )}

        {/* Legend */}
        <div
          className="absolute bottom-3 left-3 px-3 py-2 rounded text-xs"
          style={{
            backgroundColor: "rgba(15,25,35,0.88)",
            border: `1px solid rgba(184,150,12,0.3)`,
            color: "rgba(255,255,255,0.65)",
          }}
        >
          <div className="flex items-center gap-2">
            <img src={OR_WATERMARK_URL} alt="Octagon marker" width={14} height={14} style={{ display: 'inline-block' }} />
            <span>Hover area · Click to visit</span>
          </div>
        </div>

        {/* Total moves badge */}
        <div
          className="absolute top-3 right-3 px-4 py-3 rounded text-center"
          style={{
            backgroundColor: "#ffffff",
            border: `2px solid ${GOLD}`,
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          }}
        >
          <p className="text-2xl font-bold" style={{ color: "#0F1923", fontFamily: "DM Sans, sans-serif", lineHeight: 1.1 }}>
            15,000+
          </p>
          <p className="text-xs uppercase tracking-widest mt-1" style={{ color: "#555", fontFamily: "DM Sans, sans-serif" }}>SUCCESSFUL MOVES</p>
        </div>
      </div>

      {/* Areas list */}
      <div className="mt-5 px-1">
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: GOLD }}>
          Areas We Cover — {londonBoroughs.length} Locations
        </p>
        <div className="flex flex-wrap gap-1.5">
          {[...londonBoroughs].sort((a, b) => a.name.localeCompare(b.name)).map((loc) => (
            <button
              key={loc.slug}
              className="text-xs px-2.5 py-1 transition-all duration-200 cursor-pointer"
              style={{
                backgroundColor: hoveredSlug === loc.slug ? GOLD : "rgba(184,150,12,0.08)",
                color: hoveredSlug === loc.slug ? CHARCOAL : GOLD,
                border: `1px solid ${hoveredSlug === loc.slug ? GOLD : "rgba(184,150,12,0.25)"}`,
                fontWeight: 500,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = GOLD;
                (e.currentTarget as HTMLButtonElement).style.color = CHARCOAL;
                (e.currentTarget as HTMLButtonElement).style.borderColor = GOLD;
              }}
              onMouseLeave={(e) => {
                if (hoveredSlug !== loc.slug) {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(184,150,12,0.08)";
                  (e.currentTarget as HTMLButtonElement).style.color = GOLD;
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(184,150,12,0.25)";
                }
              }}
              onClick={() => navigate(`/locations/${loc.slug}`)}
            >
              {loc.name}
            </button>
          ))}
        </div>
        <p className="text-xs mt-3" style={{ color: "rgba(255,255,255,0.3)" }}>
          Don't see your area?{" "}
          <a href="/contact" style={{ color: GOLD, textDecoration: "underline" }}>Call us</a>
          {" "}— we cover all of London and surrounding counties.
        </p>
      </div>
    </div>
  );
}
