

import Classes from "./TravelStations.module.scss";
import { ImArrowRight } from "react-icons/im";

const TravelStations = (props) => {

    const capitalizeFirstLetter = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

    // Example usage
    const departure = capitalizeFirstLetter(props.departure);
    const destination = capitalizeFirstLetter(props.destination);


    return (
        <>
            <div className={Classes.container}>
                <div>
                    <p>{departure}</p>
                </div>
                <div>
                    <ImArrowRight
                        preserveAspectRatio='none'
                        style={{
                            width: '70%',
                            // height: '100%',
                            color: 'white'
                        }} />
                </div>
                <div>
                    <p>{destination}</p>
                </div>
            </div>
        </>
    )
};


export default TravelStations;