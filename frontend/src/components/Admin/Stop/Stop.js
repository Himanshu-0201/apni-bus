
import React from "react";
import { CiSquareRemove } from "react-icons/ci";
import Classes from "./Stop.module.scss";
import TimeSelector from "../TimeSelector/TimeSelector";

const Stop = React.memo((props) => {

    const stopNumber = props.stopNumber;

    const changeHandler = (event)=>{
        props.onChange(event, stopNumber);
    }


    return (
        <div id={props.stopNumber} className={Classes['form-section']}>
            <CiSquareRemove onClick={() => { props.onClick(stopNumber) }} className={Classes['remove-icon']} />
            <label className={Classes['form-section__label']}>Stop name {stopNumber + 1}</label>
            <input className={Classes['form-section__input']} name="stop name" value={props.stopName} onChange={changeHandler} />

            <label className={Classes['form-section__label']}>Arriving time at stop {stopNumber + 1}</label>
            {/* <input className={Classes['form-section__input']} name="stop arrive time"  value={props.arriveTime} onChange={changeHandler} /> */}
            {/* <input /> */}
            <TimeSelector />

            <label className={Classes['form-section__label']} > departure time at stop {stopNumber + 1}</label>
            {/* <input className={Classes['form-section__input']} name="stop duration" value = {props.stopDuration} onChange={changeHandler} /> */}
            <TimeSelector />

        </div>
    );
});

export default Stop;