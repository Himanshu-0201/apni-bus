
import { useNavigate } from "react-router-dom";
import Classes from "./SearchBus.module.scss";
import { useRef, useState } from "react";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import Dropdown from "../Dropdown/Dropdown";
import { LiaCircle } from "react-icons/lia";
import { IoIosArrowRoundDown } from "react-icons/io";
import { Modal1 } from "../Modal1/Modal1";

const SearchBus = () => {

    const navigate = useNavigate();
    const [isDesValid, setIsDesValid] = useState(true);
    const [isDepValid, setIsDepValid] = useState(true);
    const [dep, setDep] = useState("");
    const [des, setDes] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [refresh, setRefresh] = useState(false);

    const localStorage_des = localStorage.getItem("destination");
    const localStorage_dep = localStorage.getItem("departure");

    const refreshPage = () => {
        setRefresh(pre => !pre);
    }

    const closeModalHandler = ()=>{setIsModalOpen(false)};

    const isFormValid = () => {

        const destination = localStorage_des === null ? "" : localStorage_des;
        const departure = localStorage_dep === null ? "" : localStorage_dep;
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

        if (departure.toLowerCase() === destination.toLowerCase() && (destination.trim().length != 0 )) {
            setIsModalOpen(true);
            fomValid = false;
        }


        return fomValid;

    }

    const selectDepVal = (departure) => {
        localStorage.setItem("departure", departure);
        refreshPage();
    }

    const selectDesVal = (destination) => {
        localStorage.setItem("destination", destination);
        refreshPage();
    }

    const exchangeStationHandler = () => {

        const destination = localStorage_des === null ? "" : localStorage_des;
        const departure = localStorage_dep === null ? "" : localStorage_dep;

        if(!destination || !departure ) return; 

        localStorage.setItem("departure", destination);
        localStorage.setItem("destination", departure);

        refreshPage();

    }


    const submitHandler = async (event) => {
        event.preventDefault();


        if (!isFormValid()) {
            return;
        }


        const destination = localStorage_des;
        const departure = localStorage_dep;

        const baseUrl = "bus-list";
        const apiUrl = `${baseUrl}?destination=${destination}&departure=${departure}`;

        navigate(apiUrl);


    };




    return (

        <>

            {isModalOpen 
            ? 
            <Modal1 onClick = {closeModalHandler}>
                <div className={Classes["modal-child"]}>
                    <p className={Classes["modal-child-info"]}>Please select the different station</p>
                    <button onClick={closeModalHandler} className={Classes["modal-child-btn"]}>Ok</button>
                </div>
            </Modal1> 
            : 
            ""}

            <form className={Classes.form} onSubmit={submitHandler}>

                <div className={Classes.container}>

                    <div className={Classes.symbols}>

                        <div>
                            <LiaCircle />
                        </div>

                        <div className={Classes.arrow}>
                            <IoIosArrowRoundDown />
                        </div>

                        <div>
                            <LiaCircle />
                        </div>
                    </div>


                    <div>
                        <div className={Classes['input-div']}>


                            <Dropdown
                                placeholder="departure station"
                                selectVal={selectDepVal}
                                selectedVal={localStorage_dep}
                            />

                            {!isDepValid && <p className={Classes.warning}>Please  enter the departure stattion</p>}
                        </div>

                        <div className={Classes["exchange-station"]}>
                            <CgArrowsExchangeAltV onClick={exchangeStationHandler} />
                        </div>

                        <div className={Classes['input-div']}>

                            <Dropdown
                                placeholder="destination station"
                                selectVal={selectDesVal}
                                selectedVal={localStorage_des}
                            />
                            {!isDesValid && <p className={Classes.warning}>Please  enter the destionation station</p>}
                        </div>
                    </div>

                </div>



                <button>Submit</button>
            </form>

        </>
    )
};


export default SearchBus;