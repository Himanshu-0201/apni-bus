
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Back = () => {

    const navigate = useNavigate();

    return (
        <span onClick={()=>{navigate(-1)}}
        >
            <IoMdArrowRoundBack />
        </span>
    );
};


export default Back;