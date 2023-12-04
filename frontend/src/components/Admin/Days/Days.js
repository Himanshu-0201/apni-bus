
import Day from "./Day";
import Classes from "./Days.module.scss";

const days = ["S", "M", "T", "W", "T", "F", "S"];

const Days  = ()=>{

    const daysComponent = days.map((day, index)=>{
        return <Day
        key = {index} 
        day = {day}
        />
    });

    return (
        <div className={Classes.wrapper}>
            {daysComponent}
        </div>
    )
};

export default Days;