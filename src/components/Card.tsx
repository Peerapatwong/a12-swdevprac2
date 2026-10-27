'use client'

import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import { Rating } from "@mui/material";
import Link from "next/link";

interface CardProps {
    vid: string
    venueName: string;
    imgSrc: string;
    onRatingChange?: (newRating: number | null) => void; 
}

export default function Card({ vid, venueName, imgSrc, onRatingChange } : CardProps) {
    const ratingName:string = venueName + " Rating";
    return (
        <InteractiveCard>
            <div className="w-full h-[60%] relative bg-white hover:cursor-pointer">
                <Link href={`/venue/${vid}`}>
                    <Image
                        src={imgSrc}
                        alt="placeholder"
                        fill={true}
                        className="object-cover"
                        sizes="100vw"
                    />
                </Link>
                    
                <div className="absolute top-[145px] m-[5px]">
                    <h3 className="text-white break-all text-xl m-0 [text-shadow:0_0_10px_rgba(0,0,0,0.8),0_0_20px_rgba(0,0,0,0.6),0_0_30px_rgba(0,0,0,0.4)]">
                        {venueName}
                    </h3>
                </div>
            </div>
            
            <div className="w-full h-[40%] p-[10px] flex justify-center" onClick={(e) => e.stopPropagation()}> 
                <Rating id={ratingName} name={ratingName} data-testid={ratingName}
                onChange={(event, newValue) => { if (onRatingChange) onRatingChange(newValue); }}
                />
            </div>
            
        </InteractiveCard>
    );
}