import { useState } from "react";
import { baseUrl } from "../../Data/UrlFile";

import Classes from "./Dropdown.module.scss";
import { useLoaderData } from "react-router-dom";


const Dropdown = ({ selectVal, selectedVal, placeholder }) => {


    const [query, setQuery] = useState("");
    const [open, setOpen] = useState(false);
    const [dropDownElement, setDropDownElement] = useState([]);
    const busStations = useLoaderData();


    const inputChangeHandler = async (e) => {
        const inputVal = e.target.value;
        setQuery(inputVal);

        const filteredBusStations = busStations.filter((animal) => {
            return (animal["name"].toLowerCase().indexOf(inputVal.toLowerCase()) > -1);
        });

        if(filteredBusStations.length === 1 && inputVal.toLowerCase() === filteredBusStations[0].name.toLowerCase()){
            selectVal(inputVal);
        }
        else{
            selectVal("");
        }

        setDropDownElement(filteredBusStations);

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



export const busStationLoader = async ()=>{

    const route = "bus-stations";
    const apiUrl = `${baseUrl}/${route}`;
    let data=null;

    try {

        const response = await fetch(apiUrl);
        data = await response.json();

    } catch (error) {
        console.log(error);
    }


    return data;

};