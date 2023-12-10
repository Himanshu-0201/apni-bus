
import Classes from "./FormSubmiting.module.scss";

const FormSubmiting = (props)=>{

    return (
        <div className={Classes.wrapper}>
            <div className={Classes.container}>{props.children}</div>
        </div>
    );
};


export default FormSubmiting;