'use client'

import { removeBooking } from "@/redux/features/bookSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";

export default function BookingList() {
    const bookingItems = useAppSelector((state) => state.bookSlice.bookItems);
    const dispatch = useDispatch<AppDispatch>();
    return (
        <div className="min-h-screen bg-slate-500 p-6">
            <div className="mx-auto flex max-w-md flex-col gap-3">
                {
                    bookingItems.length === 0 ?
                    <div className="text-center text-slate-400">No Venue Booking</div>
                    :
                    bookingItems.map((bookingItem, index) => (
                        <div
                            key={index}
                            className="rounded-lg bg-slate-800 p-4 text-slate-200"
                        >
                            <div className="font-semibold text-white">{bookingItem.nameLastname}</div>
                            <div className="text-sm text-slate-400">{bookingItem.tel}</div>
                            <div className="mt-2">{bookingItem.venue}</div>
                            <div className="text-sm text-slate-400">{bookingItem.bookDate}</div>
                            <button
                                className="mt-3 rounded-md bg-slate-700 px-3 py-1.5 text-sm text-slate-200 transition hover:bg-red-600 hover:text-white"
                                onClick={() => {dispatch(removeBooking(bookingItem))}}>
                                remove booking
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}