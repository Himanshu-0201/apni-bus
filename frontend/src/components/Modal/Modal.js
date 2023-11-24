

import { useState } from "react";
import Classes from "./Modal.module.scss";
import Calendar from "../Calendar/Calendar";


const Modal = (props) => {


    const [isCalVisible, setIsCalVisible] = useState(false);
    
    const todayTime = new Date();
    const todayDate = todayTime.getDate();
    const tomorrowTime = new Date();
    tomorrowTime.setDate(todayDate + 1);

    // console.log(props.selectedDay);


    const calendarDateChangeHandler = (date) => {
        props.onChangeDay(date);
        setTimeout(() => {
            props.onClick();
        }, 200);
    };


    const handleChange = async (event) => {

        const day = event.target.value;

        if(day === "choose"){
            setIsCalVisible(true);
            return;
        }

        let date;
        if(day === "today"){
            date = todayTime;
        }
        else{
            date = tomorrowTime;
        }

        
        props.onChangeDay(date);

        setTimeout(() => {
            props.onClick();
        }, 200);

    };

    const hideCalendarHandler = ()=>{
        setIsCalVisible(false);
    }

    const isToday = props.selectedDay === "today";
    const isTomorrow = props.selectedDay === "tomorrow";



    return (
        <>

            <div className={Classes['modal-wrapper']} onClick={props.onClick}></div>

            {
                isCalVisible ?

                    <Calendar
                        onCalendarDateChange={calendarDateChangeHandler}
                        onHideCalendar = {hideCalendarHandler}
                    />

                    :
                    <div className={Classes['modal-container']}>
                        <ul>
                            <li>
                                <input type="radio" id="today" name="date" value="today" checked={isToday} onChange={handleChange} />
                                <label htmlFor="today">Today</label>
                            </li>
                            <li>
                                <input type="radio" id="tomorrow" name="date" value="tomorrow" checked={isTomorrow} onChange={handleChange} />
                                <label htmlFor="tomorrow">Tomorrow</label>
                            </li>
                            <li>
                                <input type="radio" id="choose" name="date" value="choose" checked={!isToday && !isTomorrow} onChange={handleChange} />
                                <label htmlFor="choose">Choose from calendar</label>
                            </li>

                        </ul>
                        <button className={Classes.cancel} onClick={props.onClick}>cancel</button>
                    </div>
            }
        </>
    )
};

export default Modal;