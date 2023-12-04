import { useState } from "react";
import { animals } from "../../Data/Data";

import Classes from "./Dropdown.module.scss";
let val = 1;


const Dropdown = ({ selectVal, selectedVal, placeholder }) => {


    const [query, setQuery] = useState("");
    const [open, setOpen] = useState(false);
    const [dropDownElement, setDropDownElement] = useState([]);


    const inputChangeHandler = async (e) => {
        const inputVal = e.target.value;
        setQuery(inputVal);


        // do for backend api

        // const baseUrl = "http//localhost:1000/bus-station";
        // const apiUrl = `${baseUrl}/${inputVal}`

        // const response = await fetch(apiUrl);
        // const data = await response.json();

        // return data;

        const filetedAnimals = animals.filter((animal) => {
            return (animal["name"].toLowerCase().indexOf(inputVal.toLowerCase()) > -1);
        });

        if(filetedAnimals.length === 1 && inputVal.toLowerCase() === filetedAnimals[0].name.toLowerCase()){
            selectVal(inputVal);
        }
        else{
            selectVal("");
        }

        setDropDownElement(filetedAnimals);

    };


    const seletOption = (option) => {
        selectVal(option);
        setQuery("");
        setOpen(pre => !pre)
    }

    const getDisplayVal = () => {

        if (query) return query;
        if (selectedVal) return selectedVal;
        return "";
    }

    const toggle = (val) => {
        setOpen(val);
    }


    const dropdownItems = dropDownElement.map((element, ind) => {

        return (
            <>
                <p key={ind} className={Classes["drop-down-element"]} onClick={() => { seletOption(element["name"]) }}>{element.name}</p>
            </>
        )
    })

    return (

        <div className={Classes.wrapper}>

            <input
                placeholder={placeholder}
                className={Classes.input}
                value={getDisplayVal()}
                onChange={inputChangeHandler}
                onClick={() => toggle(true)}
            />

            {open ?
                <div className={Classes["drop-down"]}>
                    {dropdownItems}
                </div>
                :
                null
            }

        </div>

    )
}


export default Dropdown;