/*
 * LOCATION DYNAMIC — Octagon Removals
 * Reads :slug from URL params, enriches with Trustpilot/Google reviews
 * and portfolio photos, then renders LocationPage.
 */
import { useParams } from "wouter";
import LocationPage from "@/components/LocationPage";
import NotFound from "./NotFound";
import { locationsData } from "@/data/locations";
import { locationReviews, genericReviews } from "@/data/locationReviews";
import { portfolioItems } from "@/data/portfolio";

export default function LocationDynamic() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const data = locationsData[slug];

  if (!data) {
    return <NotFound />;
  }

  // Merge reviews: use location-specific Trustpilot/Google reviews if available,
  // otherwise fall back to generic reviews. Always show at least 3.
  const specificReviews = locationReviews[slug] ?? [];
  const mergedReviews =
    specificReviews.length >= 3
      ? specificReviews.slice(0, 3)
      : [...specificReviews, ...genericReviews].slice(0, 3);

  // Map merged reviews to the format LocationPage expects
  const localReviews = mergedReviews.map((r) => ({
    name: r.author,
    area: r.location ?? data.name,
    text: r.text,
    source: r.source,
    date: r.date,
  }));

  // Get portfolio photos for this location (match by location name, case-insensitive)
  const locationName = data.name.toLowerCase();
  const locationPhotos = portfolioItems
    .filter((p) => p.location.toLowerCase() === locationName)
    .slice(0, 6); // max 6 photos per location

  return (
    <LocationPage
      data={{ ...data, localReviews }}
      locationPhotos={locationPhotos}
    />
  );
}
