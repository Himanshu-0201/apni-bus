
import React from "react";
import { CiSquareRemove } from "react-icons/ci";
import Classes from "./Stop.module.scss";
import TimeSelector from "../TimeSelector/TimeSelector";

const Stop = React.memo(({
    stopNumber,
    stopName,
    arriveDate,
    departureDate,
    onChange,
    onClick,
}) => {




    const changeHandler = (inputValue, inputName) => {
        onChange(inputValue, inputName, stopNumber);
    }


    return (
        <div id={stopNumber} className={Classes['form-section']}>

            <CiSquareRemove onClick={() => { onClick(stopNumber) }} className={Classes['remove-icon']} />

            <label className={Classes['form-section__label']} name={`stop ${stopNumber + 1}`}>Stop name {stopNumber + 1}</label>
            <input className={Classes['form-section__input']} name="stop name" value={stopName} onChange={(e) => { changeHandler(e.target.value, "stop name") }} />
            {/* {<p className={Classes.warning}>Please enter the stop name</p>} */}

            <label className={Classes['form-section__label']}>Arriving time at stop {stopNumber + 1}</label>

            <TimeSelector
                onChange={(value) => (changeHandler(value, "arrive date"))}
                defaultDate = {arriveDate}
            />

            <label className={Classes['form-section__label']} > departure time at stop {stopNumber + 1}</label>
            
            <TimeSelector
                onChange={(value) => (changeHandler(value, "departure date"))}
                defaultDate = {departureDate}
            />

        </div>
    );
});

export default Stop;