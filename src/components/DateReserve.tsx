'use client'

import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import { useState } from "react";

export default function DateReserve({ onDateChange } : { onDateChange: Function}) {

    const [reserveDate, setReserveDate] = useState<Dayjs|null>(null);

    return (
        <div className="w-full flex justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="w-full" 
                value={reserveDate}
                onChange={(value) => { setReserveDate(value); onDateChange(value);}}
                />
            </LocalizationProvider>
        </div>
    );
}