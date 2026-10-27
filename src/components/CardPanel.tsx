'use client'

import { useReducer } from "react";
import Card from "./Card";
import Link from "next/link";

type RatingMap = Map<string, number>;
const initialRatings: RatingMap = new Map([
    ['The Bloom Pavilion', 0],
    ['Spark Space', 0],
    ['The Grand Table', 0]
])

const mockVenue = [{vid: "001", name: "The Bloom Pavilion", imgSrc: "/img/bloom.jpg" },
                   {vid: "002", name: "Spark Space", imgSrc: "/img/sparkspace.jpg"},
                   {vid: "003", name: "The Grand Table", imgSrc: "/img/grandTable.jpg"}
]
    
type Action = { type: 'UPDATE_RATING'; venueName: string; rating: number }
            | {type: 'REMOVE_VENUE'; venueName: string }

function ratingReducer(state: RatingMap, action: Action): RatingMap {
    switch(action.type) {
        case 'UPDATE_RATING': {
            const newMap = new Map(state);
            newMap.set(action.venueName, action.rating);
            return newMap;
        }
        case 'REMOVE_VENUE': {
            const newMap = new Map(state);
            newMap.delete(action.venueName);
            return newMap;
        }
        default: return state;
    }
}

export default function CardPanel() {
    const [ratingMap, dispatch] = useReducer(ratingReducer, initialRatings);

    return(
        <div className="flex flex-col w-full gap-5">
            <div className="flex flex-auto flex-row flex-wrap justify-around align-around m-5 w-full">
                {
                    mockVenue.map((venue) => (
                        <Card key={venue.vid} vid={venue.vid} venueName={venue.name} imgSrc={venue.imgSrc}
                        onRatingChange={(rating) => dispatch({ type: 'UPDATE_RATING', venueName: venue.name, rating: rating ?? 0})}/>
                    ))
                }
            </div>
            
            <div className="m-5 ">
                <div className="text-lg font-bold">
                    {`Venue List with Ratings: ${ratingMap.size} `}
                </div>
                { Array.from(ratingMap.entries()).map(([venueName, rating]) => (
                        <div
                            key={venueName}
                            data-testid={venueName}
                            onClick={() => dispatch({ type: 'REMOVE_VENUE', venueName })}
                        >
                            {`${venueName} Rating: ${rating}`}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}