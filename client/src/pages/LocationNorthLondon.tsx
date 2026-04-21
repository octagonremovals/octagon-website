import LocationPage from "@/components/LocationPage";
import { locationsData } from "@/data/locations";
export default function LocationNorthLondon() {
  return <LocationPage data={locationsData["north-london"]} />;
}
