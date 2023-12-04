import { useState } from "react";
import Classes from "./Day.module.scss";


const Day = (props)=>{

    const [isClicked, setIsClicked] = useState(false);
    const dayClass = isClicked ? Classes.active : "";


    return (
        <p className={dayClass} onClick={()=>{setIsClicked(pre => !pre)}}>{props.day}</p>
    )

};

export default Day;