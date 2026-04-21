import LocationPage from "@/components/LocationPage";
import { locationsData } from "@/data/locations";
export default function LocationEastLondon() {
  return <LocationPage data={locationsData["east-london"]} />;
}
