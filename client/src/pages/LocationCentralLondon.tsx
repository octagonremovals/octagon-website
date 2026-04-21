import LocationPage from "@/components/LocationPage";
import { locationsData } from "@/data/locations";
export default function LocationCentralLondon() {
  return <LocationPage data={locationsData["central-london"]} />;
}
