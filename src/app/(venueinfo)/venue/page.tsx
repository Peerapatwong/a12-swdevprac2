import CardPanel from "@/components/CardPanel";
import VenueCatalog from "@/components/VenueCatalog";
import getVenues from "@/libs/getVenues";

export default async function Venue() {
    const venues = await getVenues()
    console.log(venues)
    return <VenueCatalog venuesJson={venues}/>
}