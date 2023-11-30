
import Classes from "./Week.module.scss";

const Week = ()=>{

    const days = ["S", "M", "T", "W", "T", "F", "S"];
    const dayList = days.map((day, index)=>{
        return (
            <li key={day}>{day}</li>
        )
    });
    
    return (
        <ul className={Classes.days}>
           {dayList}
        </ul>
    )
};

export default Week;