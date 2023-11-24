import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./styles.css";

import { CalendarContainer } from "react-datepicker";


export default function Calendar(props) {
    const [date, setDate] = useState(new Date());
    
    const handleChange = (seletedDate) => {
        setDate(seletedDate);
        props.onCalendarDateChange(seletedDate);
    };


    const MyContainer = ({ className, children }) => {
        return (
            <CalendarContainer className={className}>
                <div>{children}</div>
                <button className="cancel-btn" onClick={props.onHideCalendar}>cancel</button>
            </CalendarContainer>
        );
    };

    return (
        <div className="calendar-container">
            <DatePicker
                selected={date}
                onChange={handleChange}
                inline
                minDate={new Date()}
                calendarContainer={MyContainer}
            />
        </div>
    );
}
