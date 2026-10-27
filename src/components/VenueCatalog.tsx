import Card from "./Card";

export default async function VenueCatalog({ venuesJson }: { venuesJson: Promise<VenueJson> }) {
    const venues = await venuesJson;

    if (!venues?.data) {
        return <p>Failed to load venues</p>;
    }

    return (
        <div className="flex flex-col w-full gap-5">
            <div className="flex flex-auto flex-row flex-wrap justify-around align-around m-5 w-full">
                {venues.data.map((venueItem: VenueItem) => (
                    <Card
                        key={venueItem.id}
                        venueName={venueItem.name}
                        imgSrc={venueItem.picture}
                        vid={venueItem.id}
                    />
                ))}
            </div>
        </div>
    );
}