
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

    const ls_des = localStorage.getItem("destination");
    const ls_dep = localStorage.getItem("departure");


    const exchangeHandler = ()=>{
        const destination = ls_des === null ? "" : ls_des;
        const departure = ls_dep === null ? "" : ls_dep;

        localStorage.setItem("departure", destination);
        localStorage.setItem("destination", departure);

        setDep(destination);
        setDes(departure);
    }

    const isFormValid = () => {

        const destination = ls_des === null ? "" : ls_des;
        const departure = ls_dep === null ? "" : ls_dep;
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

    const desChangeHandler = (e)=>{
        const destination = e.target.value;
        localStorage.setItem("destination", destination);
        setDes(destination);
    }

    const depChangeHandler = (e)=>{
        const departure = e.target.value;
        localStorage.setItem("departure", departure);
        setDep(departure);
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
                <input placeholder="departure station" value={ls_dep === null ? "" : ls_dep} onChange={depChangeHandler} />
                {!isDepValid && <p>Please  enter the departure stattion</p>}
            </div>

            <div className={Classes["exchange-icon"]}>
                <CgArrowsExchangeAltV onClick={exchangeHandler}/>
            </div>

            <div className={Classes['input-div']}>
                <input placeholder="destination station" value={ls_des === null ? "" : ls_des} onChange={desChangeHandler}  />
                {!isDesValid && <p>Please  enter the destionation station</p>}
            </div>

            <button>Submit</button>
        </form>

    )
};


export default SearchBus;