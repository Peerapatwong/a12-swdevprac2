import getVenue from "@/libs/getVenue"
import Image from "next/image"

export default async function VenueDetailPage({params}: {params: Promise<{vid: string}>}) {
    const { vid } = await params

    const venue = await getVenue(vid)

    return (
        <main className="m-10">
            <div className='text-2xl font-bold mx-5 text-center'>{venue.data.name}</div>
            <div className="flex flex-row my-5 justify-center gap-x-10">
                <Image src={venue.data.picture}
                alt="Venue Picture"
                width={0} height={0} sizes="100vw"
                className='rounded-lg w-[30%]'/>
                
                <div className="flex flex-col gap-y-5">
                    <div className='text-xl font-medium mx-5'>{`Address: ${venue.data.address}`}</div>
                    <div className='text-xl font-medium mx-5'>{`District: ${venue.data.district}`}</div>
                    <div className='text-xl font-medium mx-5'>{`Province: ${venue.data.province}`}</div>
                    <div className='text-xl font-medium mx-5'>{`Postal code: ${venue.data.postalcode}`}</div>
                    <div className='text-xl font-medium mx-5'>{`Daily rate: ${venue.data.dailyrate}`}</div>
                    <div className='text-xl font-medium mx-5'>{`Daily rate: ${venue.data.tel}`}</div>
                </div>
            </div>
        </main>
    )
}