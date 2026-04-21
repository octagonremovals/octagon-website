import LocationPage from "@/components/LocationPage";
import { locationsData } from "@/data/locations";
export default function LocationWestLondon() {
  return <LocationPage data={locationsData["west-london"]} />;
}
