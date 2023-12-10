
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
import HorizontalLine from "../../HorizontalLine/HorizontalLine";
import { baseUrl } from "../../../Data/UrlFile";
import dayjs from "dayjs";
import FormSubmiting from "../FormSubmiting/FormSubmiting";


const stop = {
    stopName: "",
    fair: 0,
    arriveDate: "",
    departureDate: ""
}



const AddBus = () => {


    const currentDate = dayjs();

    const [stopsList, setStopsList] = useState([{
        ...stop,
        arriveDate: currentDate,
        departureDate: currentDate
    }]);

    const [busNumber, setBusNumber] = useState("");
    const [isBusNumberValid, setIsBusNumberValid] = useState(true);
    const [isFormSubmiting, setIsFormSubmiting] = useState(false);

    const validFormHandler = () => {

        const len_of_busNumber = busNumber.trim().length;
        setIsBusNumberValid(len_of_busNumber != 0);
        const isFormValid = len_of_busNumber != 0;
        return isFormValid;
    }

    const addStopsHandler = () => {
        setStopsList(pre => {
            const updatedStopsList = [...pre, {
                ...stop,
                arriveDate: currentDate,
                departureDate: currentDate
            }];
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


    const changeHandler = useCallback((inputValue, inputName, stopNumber) => {

        // inputValue should be in dayjs() formate for arrive date
        // inputValue should be in dayjs() formate for arrive date

        const updatedInputValue = inputValue;


        setStopsList(preStopsList => {

            const updatedStopsList = preStopsList.map((stop, index) => {

                const updatedStop = { ...stop };

                if (index === stopNumber) {
                    if (inputName === "stop name") updatedStop.stopName = updatedInputValue;

                    if (inputName === "arrive date") updatedStop.arriveDate = updatedInputValue;

                    if (inputName === "departure date") updatedStop.departureDate = updatedInputValue;
                }

                return updatedStop;

            });

            return updatedStopsList;
        })

    }, []);

    const clearFormHandler = () => {
        setStopsList([{
            ...stop,
            arriveDate: currentDate,
            departureDate: currentDate
        }]);

        setBusNumber("");
    }


    // console.log(stopsList)

    const formSubmitHandler = async (event) => {
        event.preventDefault();

        // if (!validFormHandler()) {
        //     return;
        // }

        const busNumber = event.target["bus number"].value;

        // steps : convert stops[i].arriveDate and stops[i].departureDate in string formate

        const stops = stopsList.map(stop => {

            const updatedStop = {
                ...stop,
                arriveDate: dayjs(stop.arriveDate).format("YYYY-MM-DDTHH:mm"),
                departureDate: dayjs(stop.departureDate).format("YYYY-MM-DDTHH:mm")
            }

            console.log(updatedStop);

            return updatedStop;

        })

        console.log(stops);

        const postData = {
            busNumber: busNumber,
            stops: stops
        }


        setIsFormSubmiting(true);

        try {

            const route = "add-bus";
            const apiUrl = `${baseUrl}/${route}`;



            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Add any other headers as needed
                },
                body: JSON.stringify(postData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Response Data:', data);

            clearFormHandler();


        } catch (error) {
            console.error('Error:', error.message);
        }


        setIsFormSubmiting(false);

    }

    const stopsListElement = stopsList.map((stop, index) => {

        const stopNumber = index;

        return (
            <Stop
                key={index}
                stopNumber={stopNumber}
                stopName={stop.stopName}
                arriveDate={stop.arriveDate}
                departureDate={stop.departureDate}
                onChange={changeHandler}
                onClick={removeStopHandler}
            />
        )

    });



    return (

        <>
            {isFormSubmiting
                ?
                <FormSubmiting>
                    <p>Bus is adding in the database...........</p>
                </FormSubmiting>
                :
                <form onSubmit={formSubmitHandler} className={Classes['add-bus-form']}>
                    <div className={Classes["add-bus-div"]}>
                        <label className={Classes["add-bus-label"]}>Bus number</label>
                        <input className={Classes["add-bus-input"]} name="bus number" value={busNumber} onChange={(e) => { setBusNumber(e.target.value) }} />
                        {isBusNumberValid ? "" : <p className={Classes.warning}> Please enter the bus number </p>}
                    </div>


                    {/* <div className={Classes["select-days"]}>
                <div className={Classes.label}>
                    <p> Runs on</p>
                </div>
                <Days />
            </div> */}

                    <HorizontalLine />

                    <div className={Classes["add-bus-div"]}>
                        <p className={Classes.para}>Stops</p>
                        {stopsListElement}
                        <button className={Classes["add-bus-btn"]} onClick={addStopsHandler} type="button">Add stop</button>
                        <button className={`${Classes['submit-btn']} ${Classes["add-bus-btn"]}`} type="submit">Submit</button>
                    </div>

                </form>
            }
        </>


    );
}

export default AddBus;