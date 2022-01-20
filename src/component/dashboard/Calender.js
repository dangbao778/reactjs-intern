import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import DatePicker from "react-datepicker";
import moment from "moment";
import calendar from"./css/Calender.module.css";
import "react-datepicker/dist/react-datepicker.css";

function Calenders() {
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);

    const handleCheckInDate = (date) => {
    setCheckInDate(date);
    setCheckOutDate(null);
    };

    const handleCheckOutDate = (date) => {
    setCheckOutDate(date);
    };

    return (
    <div className={calendar.App}>
        <div className="input-container">
        <div>
            <label>Check-in</label>
            <DatePicker
            selected={checkInDate}
            minDate={new Date()}
            onChange={handleCheckInDate}
            />
        </div>
        <div>
            <label>Check-out</label>
            <DatePicker
            selected={checkOutDate}
            minDate={checkInDate}
            onChange={handleCheckOutDate}
            />
        </div>
        </div>
        {checkInDate && checkOutDate && (
        <div className={calendar.summary}>
            <p>
            You book a hotel from {moment(checkInDate).format("LL")} to{" "}
            {moment(checkOutDate).format("LL")}.
            </p>
        </div>
        )}
    </div>
    );
}

export default Calenders;