
// bus number
// starting point and it's departure time
// stops, arriving time, stops duration
// end point and it's arriving time

// const stopsList = 
// const 



import { useCallback, useState } from "react";
import Classes from "./AddBus.module.scss";
import Stop from "../Stop/Stop";
import TimeSelector from "../TimeSelector/TimeSelector";
import Days from "../Days/Days";

const fistStop = {
    stopName: "",
    arriveTime: "",
    stopDuration: ""
}



const AddBus = () => {

    const [stopsList, setStopsList] = useState([fistStop]);
    const [busNumber, setBusNumber] = useState("");
    const [startStation, setStartStation] = useState("");
    const [endStation, setEndStation] = useState("");
    const [isBusNumberValid, setIsBusNumberValid] = useState(true);
    const [isStartStationValid, setIsStartStationValid] = useState(true);
    const [isEndStationValid, setIsEndStationValid] = useState(true);

    const addStopsHandler = () => {
        setStopsList(pre => {
            const updatedStopsList = [...stopsList, { id: stopsList.length }];
            return updatedStopsList;
        })
    };

    const removeStopHandler = useCallback((stopNumber) => {

        setStopsList(preStopsList => {

            const newStopsList = preStopsList.filter((stop, index) => {
                return stopNumber != index;
            });

            return newStopsList;
        })

    }, []);

    // id could be index

    const changeHandler = useCallback((event, stopNumber) => {
        const inputName = event.target.name;
        const updatedInputValue = event.target.value;

        setStopsList(preStopsList => {

            const updatedStopsList = preStopsList.map((stop, index) => {

                const updatedStop = { ...stop };

                if (index === stopNumber) {
                    if (inputName === "stop name") updatedStop.stopName = updatedInputValue;

                    if (inputName === "stop arrive time") updatedStop.arriveTime = updatedInputValue;

                    if (inputName === "stop duration") updatedStop.stopDuration = updatedInputValue;
                }

                return updatedStop;

            });

            return updatedStopsList;
        })

    }, []);

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const len_of_busNumber = busNumber.trim().length;
        const len_of_startStation = startStation.trim().length;
        const len_of_endStation = endStation.trim().length;

        setIsBusNumberValid(len_of_busNumber !== 0);
        setIsStartStationValid(len_of_startStation !== 0);
        setIsEndStationValid(len_of_endStation !== 0);


        if(len_of_busNumber === 0 || len_of_startStation === 0 || len_of_endStation === 0){
            return ;
        }
    }

    const stopsListElement = stopsList.map((stop, index) => {

        const stopNumber = index;

        return (
            <Stop
                key={index}
                stopNumber={stopNumber}
                arriveTime={stop.arriveTime}
                stopName={stop.stopName}
                stopDuration={stop.stopDuration}
                onChange={changeHandler}
                onClick={removeStopHandler}
            />
        )

    });



    return (

        <form onSubmit={formSubmitHandler} className={Classes['add-bus-form']}>
            <div className={Classes["add-bus-div"]}>
                <label className={Classes["add-bus-label"]}>Bus number</label>
                <input className={Classes["add-bus-input"]} value={busNumber} onChange={(e)=>{setBusNumber(e.target.value)}}/>
            </div>
            <div className={Classes["add-bus-div"]}>
                <label className={Classes["add-bus-label"]}> starting station</label>
                <input className={Classes["add-bus-input"]} value={startStation} onChange={(e)=>{setStartStation(e.target.value)}} />
                <label className={Classes["add-bus-label"]}> departure time at starting station</label>
                {/* <input /> */}
                <TimeSelector />
            </div>

            <div className={Classes["add-bus-div"]}>
                <label className={Classes["add-bus-label"]}> end station</label>
                <input className={Classes["add-bus-input"]} value={endStation} onChange={(e)=>{setEndStation(e.target.value)}}/>
                <label className={Classes["add-bus-label"]}> arriving time at end station</label>
                {/* <input value="" /> */}
                <TimeSelector />
            </div>

            <div className={Classes["select-days"]}>
                <div className={Classes.label}>
                    <p> Runs on</p>
                </div>
                <Days />
            </div>

            <div className={Classes["add-bus-div"]}>
                <p className={Classes.para}>Stops</p>

                {stopsListElement}

                <button className={Classes["add-bus-btn"]}  onClick={addStopsHandler}>Add stop</button>
                <button className={`${Classes['submit-btn']} ${Classes["add-bus-btn"]}`}>Submit</button>
            </div>

        </form>

    );
}

export default AddBus;