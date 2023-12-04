
import Classes from "./NoBusAvailable.module.scss";

const NoBusAvailable = (props)=>{

    return (
        <>
            <div className={Classes.div}>
                <p> No bus available for {props.day}</p>
            </div>
        </>
    );
};

export default NoBusAvailable;