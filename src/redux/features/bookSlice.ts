import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BookState = {
    bookItems: BookingItem[];
};

const initialState: BookState = { bookItems: []};

export const bookSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {
        addBooking: (state, action:PayloadAction<BookingItem>) => {
            
            const index = state.bookItems.findIndex(
                (item) =>
                    item.bookDate === action.payload.bookDate
            );

            if (index !== -1) {
                state.bookItems[index] = action.payload; // replace if that day is already booked
            } else {
                state.bookItems.push(action.payload); 
            }
        },

        removeBooking: (state, action:PayloadAction<BookingItem>) => {
            
            const { nameLastname, tel, venue, bookDate } = action.payload;
            
            const index = state.bookItems.findIndex(
                (item) =>
                    item.nameLastname === nameLastname &&
                    item.tel === tel &&
                    item.venue === venue &&
                    item.bookDate === bookDate
            );

            if (index !== -1) {
                state.bookItems.splice(index, 1);
            }
        }
    }
});

export const { addBooking, removeBooking } = bookSlice.actions;
export default bookSlice.reducer;