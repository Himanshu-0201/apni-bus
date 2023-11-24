

import Classes from "./TravelStations.module.scss";

const TravelStations = (props)=>{

    return (
        <>
            <div className={Classes.container}>
                <p>{props.departure}</p>
                <p>{props.destination}</p>
            </div>
        </>
    )
};


export default TravelStations;