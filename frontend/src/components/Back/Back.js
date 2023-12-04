
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Back = ()=>{
    const navigate = useNavigate();

    return (
        <span  onClick={()=>{navigate(-1)}}>
            <IoArrowBackSharp />
        </span>
    )
};

export default Back;