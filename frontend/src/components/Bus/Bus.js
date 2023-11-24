
import Classes from "./Bus.module.scss";

const Bus = (props)=>{

    const busNumber = props.busNumber;
    const depTime = props.depTime;
    const desTime = props.desTime;


    return <li className={Classes['list-item']}>
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