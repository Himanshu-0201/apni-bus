

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import Bus from "../../components/Bus/Bus";
import Modal from "../Modal/Modal";
import Classes from "./BusList.module.scss";
import TravelStations from "../TravelStations/TravelStations";
import NoBusAvailable from "../NoBusAvailable/NoBusAvailable";
import Back from "../Back/Back";
import { baseUrl } from "../../Data/UrlFile";

const BusList = () => {


    const [busList, setBusList] = useState([]);
    const [date, setDate] = useState(new Date());
    const [day, setDay] = useState("today");
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);


    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const destination = searchParams.get('destination');
    const departure = searchParams.get('departure');

    const todayTime = new Date();
    const todayDate = todayTime.getDate();

    const tomorrowTime = new Date();
    tomorrowTime.setDate(todayDate + 1);



    const changeDayHandler = (date) => {
        let selectedDay;
        if (date.getDate() === todayTime.getDate() && date.getMonth() === todayTime.getMonth() && date.getFullYear() === todayTime.getFullYear()) {
            selectedDay = "today";
        }
        else if (date.getDate() === tomorrowTime.getDate() && date.getMonth() === tomorrowTime.getMonth() && date.getFullYear() === tomorrowTime.getFullYear()) {
            selectedDay = "tomorrow";
        }
        else {
            selectedDay = `${date.getDate()} ${date.toLocaleString('en-US', { month: 'short' })}`;
        }

        setDay(selectedDay);
        setDate(date);
    }

    useEffect(() => {


        const fetchData = async () => {

            const route = "bus-list";
            let selectedYear = date.getFullYear();
            let selectedMonth = date.getMonth() + 1;
            let selectedDay = date.getDate();

            const url = `${baseUrl}/${route}?destination=${destination}&departure=${departure}&year=${selectedYear}&month=${selectedMonth}&day=${selectedDay}`;


            try {

                const response = await fetch(url);
                const data = await response.json();

                // bus number
                // timing 
                // fair


                const busList = data.map((bus) => {


                    let desAmount;
                    let depAmount;
                    let fair;
                    const stops = bus.stops;
                    let depHour, depMin;
                    let desHour, desMin;
                    let desTime, depTime;


                    for (let i = 0; i < stops.length; i++) {

                        if (stops[i].name === destination.toUpperCase()) {
                            desAmount = stops[i].fair;
                            desHour = stops[i].hour;
                            desMin = stops[i].minites;

                        }
                        else if (stops[i].name === departure.toUpperCase()) {
                            depAmount = stops[i].fair;
                            depHour = stops[i].hour;
                            depMin = stops[i].minites;
                        }

                    }

                    desTime = `${desHour}:${desMin}`;
                    depTime = `${depHour}:${depMin}`;


                    fair = Math.abs(desAmount - depAmount);

                    return {
                        desTime: desTime,
                        depTime: depTime,
                        busNumber: bus.busNumber,
                        fair: fair,
                        _id: bus._id,
                        stops: bus.stops
                    }
                });


                setBusList(busList);

            } catch (error) {
                console.log(error);
            }

            setIsLoading(false);

        }

        setIsLoading(true);
        fetchData();


    }, [date]);

    const listItems = busList.map((bus, index) => {

        return (
            <Bus
                key={index}
                busNumber={bus.busNumber}
                depTime={bus.depTime}
                desTime={bus.desTime}
                fair={bus.fair}
                _id={bus._id}
                stops={bus.stops}
            />
        )
    });


    return (

        <div className={Classes["bus-list-wrapper"]}>
            <div className={Classes.nav}>
                <button className={Classes.btn} onClick={() => setShowModal(true)}>{day}
                    <span>
                        <FaAngleDown />
                    </span>
                </button>
                {showModal && <Modal
                    onClick={() => { setShowModal(false) }}
                    onChangeDay={changeDayHandler}
                    selectedDay={day}
                />}
            </div>

            <TravelStations
                destination={destination}
                departure={departure}
            />

            <ul className={Classes.list}>
                {/* {listItems.length === 0 ? <NoBusAvailable day = {day}/> : listItems} */}
                { isLoading === true ? <p className={Classes.loading}>Loading...</p> : listItems.length === 0 ? <NoBusAvailable day={day} /> : listItems}

            </ul>

        </div>
    );

};

export default BusList;

