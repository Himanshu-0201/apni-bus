
import Classes from "./Bus.module.scss";
import { useNavigate } from "react-router-dom";

const Bus = (props)=>{

    const navigate = useNavigate();

    const busNumber = props.busNumber;
    const depTime = props.depTime;
    const desTime = props.desTime;
    const _id = props._id;
    const stops = props.stops;

    const clickHandler = ()=>{
        navigate(`/bus-route/${_id}`, {state : {stops : stops}});
    };

    return <li  className={Classes['list-item']} onClick={clickHandler}>
        <div className={Classes['bus-number']}>
            <p>{busNumber}</p>
        </div>
        <div className={Classes.times}>
            <p>{depTime}</p>
            <p>{desTime}</p>
        </div>
    </li>
};


export default Bus;