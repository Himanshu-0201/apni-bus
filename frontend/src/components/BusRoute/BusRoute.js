import { HiEllipsisVertical } from "react-icons/hi2";
import { FaRegCircleDot } from "react-icons/fa6";
import { stationList } from "../../Data/StationList";
import Classes from "./BusRoute.module.scss";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseUrl } from "../../Data/UrlFile";

const BusRoute = () => {

    const [stopsList, setStopsList] = useState([]);
    const {state} = useLocation();
    const params = useParams();

    useEffect( ()=>{

        if(state){
            setStopsList(state.stops);
        }
        else{

            const fetchData = async ()=>{
                // const baseUrl = "http://localhost:1000/bus";
                const route = "bus";
                const busId = params.busId;
                const apiUrl = `${baseUrl}/${route}/${busId}`;
            
                const response = await fetch(apiUrl);
                const data = await response.json();

                setStopsList(data.stops);
            }

            fetchData();

        }

    },[]);





    const stations = stopsList.map((station, index) => {
        return (
            <div className={Classes.station} key={index}>
                <div>
                    <FaRegCircleDot />
                    <p>{station.name}</p>
                </div>
                <div className={Classes["vertical-line"]}>
                    <HiEllipsisVertical />
                </div>
            </div>
        )
    })

    return (
        <div className={Classes["staion-list"]}>
            {stations}
        </div>
    )
};


export default BusRoute;