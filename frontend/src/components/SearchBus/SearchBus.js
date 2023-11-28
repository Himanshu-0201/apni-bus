
import { useNavigate } from "react-router-dom";
import Classes from "./SearchBus.module.scss";
import { useRef, useState } from "react";
import { CgArrowsExchangeAltV } from "react-icons/cg";


const SearchBus = () => {

    const navigate = useNavigate();
    const [dep, setDep] = useState("");
    const [des, setDes] = useState("");
    const [isDesValid, setIsDesValid] = useState(true);
    const [isDepValid, setIsDepValid] = useState(true);


    const exchangeHandler = ()=>{
        const destination = des;
        const departure = dep;

        setDep(destination);
        setDes(departure);
    }

    const isFormValid = () => {

        const destination = des;
        const departure = dep;
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

        const destination = des;
        const departure = dep;
        const baseUrl = "bus-list";
        const apiUrl = `${baseUrl}?destination=${destination}&departure=${departure}`;
        navigate(apiUrl);

    };

    return (

        <form className={Classes.form} onSubmit={submitHandler}>

            <div className={Classes['input-div']}>
                <input placeholder="departure station" value={dep} onChange={(e)=>{setDep(e.target.value)}} />
                {!isDepValid && <p>Please  enter the departure stattion</p>}
            </div>

            <div className={Classes["exchange-icon"]}>
                <CgArrowsExchangeAltV onClick={exchangeHandler}/>
            </div>

            <div className={Classes['input-div']}>
                <input placeholder="destination station" value={des} onChange={(e)=>{setDes(e.target.value)}}  />
                {!isDesValid && <p>Please  enter the destionation station</p>}
            </div>

            <button>Submit</button>
        </form>

    )
};


export default SearchBus;