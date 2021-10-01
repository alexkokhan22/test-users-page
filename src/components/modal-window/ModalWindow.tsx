import React, {Dispatch, SetStateAction} from "react";
import styles from "./ModalWindow.module.css"

export const ModalWindow: React.FC<ModalWindowPropsType> = (props) => {
    return <div
        className={props.activeModal ? styles.modal + ' ' + styles.modalActive : styles.modal}
        onClick={() => props.setActiveModal(false)}
    >
        <div
            className={props.activeModal ? styles.modalContent + ' ' + styles.modalActiveContent : styles.modalContent}
            onClick={(event => event.stopPropagation())}
        >
            <button onClick={() => props.setActiveModal(false)} className={styles.closeButton}>x</button>
            <div>{props.children}</div>
        </div>
    </div>
}

//types
type ModalWindowPropsType = {
    children: React.ReactNode
    activeModal: boolean
    setActiveModal: Dispatch<SetStateAction<boolean>>
}
