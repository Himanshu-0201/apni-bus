
import { useNavigate } from "react-router-dom";
import Classes from "./SearchBus.module.scss";
import { useRef, useState } from "react";

const SearchBus = () => {

    const navigate = useNavigate();
    const depRef = useRef();
    const desRef = useRef();
    const [isDesValid, setIsDesValid] = useState(true);
    const [isDepValid, setIsDepValid] = useState(true);


    const isFormValid = () => {

        const destination = desRef.current ? desRef.current.value : "";
        const departure = depRef.current ? depRef.current.value : "";
        let fomValid = true;


        if (departure.trim().length === 0) {
            fomValid = false;
            setIsDepValid(false);
        }
        else {
            setIsDesValid(true);
        }

        if (destination.trim().length === 0) {
            fomValid = false;
            setIsDesValid(false);

        } else {
            setIsDesValid(true);
        }



        return fomValid;

    }

    const submitHandler = async (event) => {
        event.preventDefault();


        if (!isFormValid()) {
            return;
        }

        const destination = desRef.current ? desRef.current.value : "";
        const departure = depRef.current ? depRef.current.value : "";

        const baseUrl = "bus-list";
        const apiUrl = `${baseUrl}?destination=${destination}&departure=${departure}`;

        navigate(apiUrl);


    };

    return (

        <form className={Classes.form} onSubmit={submitHandler}>

            <div className={Classes['input-div']}>
                <input placeholder="departure station" ref={depRef} />
                {!isDepValid && <p>Please  enter the departure stattion</p>}
            </div>

            <div className={Classes['input-div']}>
                <input placeholder="destination station" ref={desRef} />
                {!isDesValid && <p>Please  enter the destionation station</p>}
            </div>

            <button>Submit</button>
        </form>

    )
};


export default SearchBus;