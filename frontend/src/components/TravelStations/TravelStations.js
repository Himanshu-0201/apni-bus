

import Classes from "./TravelStations.module.scss";

const TravelStations = (props) => {

    const capitalizeFirstLetter = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

    // Example usage
    const departure = capitalizeFirstLetter(props.departure);
    const destination = capitalizeFirstLetter(props.destination);


    return (
        <>
            <div className={Classes.container}>
                <p>{departure}</p>
                <p>{destination}</p>
            </div>
        </>
    )
};


export default TravelStations;