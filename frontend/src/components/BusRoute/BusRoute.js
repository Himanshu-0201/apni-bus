import { PiArrowFatLinesDownDuotone } from "react-icons/pi";
import { PiArrowFatDownFill } from "react-icons/pi";
import { IoMdBus } from "react-icons/io";
import Classes from "./BusRoute.module.scss";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseUrl } from "../../Data/UrlFile";

const BusRoute = () => {

    const [stopsList, setStopsList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { state } = useLocation();
    const params = useParams();

    useEffect(() => {

        if (state) {
            setStopsList(state.stops);
        }
        else {

            const fetchData = async () => {
                const route = "bus";
                const busId = params.busId;
                const apiUrl = `${baseUrl}/${route}/${busId}`;

                const response = await fetch(apiUrl);
                const data = await response.json();

                setStopsList(data.stops);
                setIsLoading(false);
            }

            setIsLoading(true);
            fetchData();

        }

    }, []);


    const stations = stopsList.map((station, index) => {

        const stopName = station.stopName;
        const arriveDate = new Date(station.arriveDate);
        const departureDate = new Date(station.departureDate);

        const aHr = arriveDate.getHours();
        const aMin = arriveDate.getMinutes();

        const dHr = departureDate.getHours();
        const dMin = departureDate.getMinutes();

        const aT = `${aHr}:${aMin}`;
        const dT = `${dHr}:${dMin}`;

        return (

            <>
                <div key={index} className={Classes["div-1"]}>

                    <div>
                        <div className={Classes["row-1"]}>
                            <div>{aT}</div>
                            <div>
                                <div className={Classes["vertical-line"]}></div>
                            </div>
                        </div>
                        <div className={Classes["row-1"]}>
                            <div className={Classes["symbol"]}><IoMdBus /></div>
                            <div>
                                <div className={Classes["vertical-line"]}></div>
                            </div>
                        </div>
                        <div className={Classes["row-1"]}>
                            <div>{dT}</div>
                            <div>
                                <div className={Classes["vertical-line"]}></div>
                            </div>
                        </div>
                    </div>

                    <div className={Classes.stop_name}>
                        <p>{stopName}</p>
                    </div>

                </div>
                <div className={Classes["div-1"]}>
                    <div className={Classes["row-1"]}>
                        <div className={`${Classes.symbol} ${Classes["arrow-symbol"]}`}>
                            <PiArrowFatDownFill
                                preserveAspectRatio='none'
                                style={{
                                    width: '50%',
                                    height: '100%',
                                    color: '#ddd'
                                }}
                            />
                            {/* <Arrow /> */}
                        </div>
                        <div>
                            <div className={Classes["vertical-line"]}></div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </>
        )
    })

    return (
        <div className={Classes["staion-list"]}>
            {isLoading ? <p className={Classes.loading}>Loading</p> : stations}
        </div>
    )
};


export default BusRoute;