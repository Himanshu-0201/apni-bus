import "./Search.scss";

import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown.js";
import { animals } from "./animals.js";

const Search = () => {

    const [value, setValue] = useState("Select option...");

    return (
        <div className="App">
            <Dropdown
                options={animals}
                label="name"
                // id="id"
                // selectedVal={value}
                // handleChange={(val) => setValue(val)}
            />
        </div>

    )
};

export default Search;