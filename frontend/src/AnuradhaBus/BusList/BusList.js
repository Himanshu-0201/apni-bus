
// import { list } from "../../data/list";
import Bus from "../Bus/Bus";
// import { currentTime } from "../../data/currentTime";
import Classes from "./BusList.module.scss";
// import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// const BusList = () => {


//     const location = useLocation();
//     const data = location.state;
//     const busList = data; // for mongoDB only
//     console.log(busList);


//     const listItems = busList.map((bus, index) => {

//         return (
//             <Bus
//                 key={index}
//                 // departureTime = {bus.departureTime}
//                 // dropTime = {bus.dropTime}
//                 departureStation={bus.departure}
//                 destination={bus.destination}
//                 fair={bus.fair}
//             />
//         )
//     })


//     return (
//         <>

//             <Navbar />
//             <ul className={Classes.list}>
//                 {listItems.length === 0 ? <p>No bus availble</p> : listItems}
//             </ul>
//         </>
//     )
// }

// export default BusList;


const BusList = () => {

    const [busList, setBusList] = useState([]);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const destination = searchParams.get('destination');
    const departure = searchParams.get('departure');
    const year = searchParams.get('year');
    const month = searchParams.get('month');
    const day = searchParams.get('day');

    useEffect(() => {

        const fetchData = async () => {

            // console.log(destination + " " + departure + " " + date + " ");
            const baseUrl = "http://localhost:1000/bus-list";
            const url = `${baseUrl}?destination=${destination}&departure=${departure}&year=${year}&month=${month}&day=${day}`;


            try {

                const response = await fetch(url);
                const data = await response.json();

                const busList = data.map((bus) => {

                    let desAmount;
                    let depAmount;
                    let fair;
                    const stops = bus.stops;

                    for (let i = 0; i < stops.length; i++) {

                        if (stops[i].name === destination.toUpperCase()) {
                            desAmount = stops[i].fair;
                        }
                        else if (stops[i].name === departure.toUpperCase()) {
                            depAmount = stops[i].fair;
                        }

                    }

                    fair = Math.abs(desAmount - depAmount);

                    return {
                        destination: destination,
                        departure: departure,
                        fair: fair,
                    }
                });

                setBusList(busList);

            } catch (error) {
                console.log(error);
            }

        }

        fetchData();

    }, [year,month,day,destination,departure]);


    const listItems = busList.map((bus, index) => {


        return (
            <Bus
                key={index}
                departureStation={bus.departure}
                destination={bus.destination}
                fair={bus.fair}
            />
        )
    });

    return (
        <>
            {/* <Navbar
                destination ={destination}
                departure = {departure}
            /> */}
            <ul className={Classes.list}>
                {listItems.length === 0 ? <p>No bus availble</p> : listItems}
            </ul>
        </>
    )
};

export default BusList;