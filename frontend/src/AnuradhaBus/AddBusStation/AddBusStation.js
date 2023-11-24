
import { useRef, useState } from "react";
import Classes from "./AddBusStation.module.scss";


const AddBusStation =  ()=>{

    const busStationRef = useRef();
    const [isFormValid, setFormValid] = useState(true);

    const submitHandler = async (event)=>{
        event.preventDefault();

        const busStation = busStationRef.current ? busStationRef.current.value : "";

        if(busStation.trim().length === 0){
            setFormValid(false);
            return ;
        }
        else{
            setFormValid(true);
            busStationRef.current.value = "";
        }

        const convertedBusStation = busStation.toUpperCase();

        const baseUrl = "http://localhost:1000/add-bus-station";
        const apiUrl = `${baseUrl}?busStation=${convertedBusStation}`;


        const response = await fetch(apiUrl);
        const responseData = await response.json();

        console.log(responseData);


    };

    return (
        <form className={Classes.form} onSubmit={submitHandler}>
            <label className={Classes.label}>Bus station name</label>
            <input className={Classes.input} ref={busStationRef} placeholder="bus station name"/>
            { !isFormValid && <p className={Classes.alert}>Please enter the bus station name</p>}

            <button className={Classes.button}>Submit</button>
        </form>
    )
};


export default AddBusStation;