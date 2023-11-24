

import { NavLink, useLocation } from "react-router-dom";
import Classes from "./Navbar.module.scss";


const Navbar = (props)=>{

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const year = searchParams.get('year');
    const month = searchParams.get('month');
    const date = searchParams.get('day');



    const destination = props.destination;
    const departure = props.departure;

    const todayTime = new Date();
    const todayYear = todayTime.getFullYear();
    const todayMonth = todayTime.getMonth()+1;
    const todayDate = todayTime.getDate();

    const tomorrowTime = new Date();
    tomorrowTime.setDate(todayDate + 1);

    const tomorrowYear = tomorrowTime.getFullYear();
    const tomorrowMonth = tomorrowTime.getMonth()+1;
    const tomorrowDate = tomorrowTime.getDate();

    const dayAfterTomorrow = new Date();
    dayAfterTomorrow.setDate(tomorrowDate+1);

    const dayAfterTomorrowYear = dayAfterTomorrow.getFullYear();
    const dayAfterTomorrowMonth = dayAfterTomorrow.getMonth()+1;
    const dayAfterTomorrowDate = dayAfterTomorrow.getDate();
    const dayAfterTomorrowDayName = todayTime.toLocaleDateString('en-US', { weekday: 'short' });
    const dayAfterTomorrowMonthName = todayTime.toLocaleDateString('en-US', { month: 'short' });

    const basePara = `?destination=${destination}&departure=${departure}`;
    const todayPara = `${basePara}&year=${todayYear}&month=${todayMonth}&day=${todayDate}`;
    const tomorrowPara = `${basePara}&year=${tomorrowYear}&month=${tomorrowMonth}&day=${tomorrowDate}`;
    const dayAfterTomorrowPara = `${basePara}&year=${dayAfterTomorrowYear}&month=${dayAfterTomorrowMonth}&day=${dayAfterTomorrowDate}`;

    const isDayToday = year==todayYear && month == todayMonth && date == todayDate; // change the 
    const isDayTomorrow = year==tomorrowYear && month == tomorrowMonth && date == tomorrowDate;
    const isDayDayAfterTomorrow = year == dayAfterTomorrowYear &&  month == dayAfterTomorrowMonth && date == dayAfterTomorrowDate;


    return (
        <ul className={Classes.list}>
            <li>
                <NavLink to={{pathname : "/bus-list",search : todayPara}} className={()=> isDayToday ? Classes.active : "" } >
                    <p>Today</p>
                </NavLink>
            </li>
            <li>
                <NavLink to={{pathname : "/bus-list",search : tomorrowPara}} className={()=> isDayTomorrow ? Classes.active : "" }>
                    <p>Tomrrow</p>
                </NavLink>
            </li>
            <li>
                <NavLink to={{pathname : "/bus-list",search : dayAfterTomorrowPara}} className={()=> isDayDayAfterTomorrow ? Classes.active : "" }>
                    <div>
                        <p>{dayAfterTomorrowDayName}</p>
                        <p>{dayAfterTomorrowDate} {dayAfterTomorrowMonthName}</p>
                    </div>
                </NavLink>
            </li>
            <li>
                <NavLink to={{pathname : "/bus-list",search : dayAfterTomorrowPara}}>
                    <p>C</p>
                </NavLink>
            </li>
        </ul>
    )
};


export default Navbar;