
import Classes from "./Bus.module.scss";

const Bus = (props)=>{


    // const depHr = props.departureTime.getHours();
    // const depMinitues = props.departureTime.getMinutes();
    // const dropHr = props.dropTime.getHours();
    // const dropMinitues = props.dropTime.getMinutes();
    // const dropTIme = dropHr + ":" + dropMinitues;
    // const depTime = depHr + ":" + depMinitues;

    const currentTime = new Date();
    // const liCss = currentTime > props.departureTime ? `${Classes["list-element"]} ${Classes['bg-color']}`: Classes["list-element"];

    // const liCss = currentTime > props.departureTime ? `${Classes["list-element"]} ${Classes['bg-color']}`: Classes["list-element"];

    const liCss = Classes["list-element"];

    // console.log(liCss);

    return <li className={liCss}>
        <div>
            {/* <p className={Classes.time}>{depTime}</p> */}
            <p>{props.departureStation}</p>
        </div>
        <div></div>
        <div>
            {/* <p className={Classes.time}>{dropTIme}</p> */}
            <p>{props.destination}</p>
        </div>
        {/* <div className={Classes.fair}>
            <p> ₹ {props.fair}</p>
        </div> */}
    </li>
};


export default Bus;