import Classes from "./Modal1.module.scss";

export const Modal1 = (props) => {

    return <>
        <div className={Classes['modal-wrapper']} onClick={props.onClick}></div>
        <div className={Classes["modal-container"]}>{props.children}</div>
    </>
};
