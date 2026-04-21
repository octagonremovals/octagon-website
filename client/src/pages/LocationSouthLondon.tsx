import LocationPage from "@/components/LocationPage";
import { locationsData } from "@/data/locations";
export default function LocationSouthLondon() {
  return <LocationPage data={locationsData["south-london"]} />;
}
