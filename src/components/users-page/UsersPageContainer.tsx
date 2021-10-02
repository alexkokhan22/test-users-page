import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {UsersType} from "../../redux/users-page/usersPageReducer";
import {UsersPage} from "./UsersPage";
import {HightlightText} from "../hightlight-text/HightlightText";
import {ModalWindow} from "../modal-window/ModalWindow";
import styles from "./UsersPage.module.css";
import {modalDataType} from "../../redux/modal/modalWindowReducer";
import {setDataModalAC} from "../../redux/modal/actionsModal";


export const UsersPageContainer: React.FC<UsersPageContainerPropsType> = ({filter, filteredUsers}) => {

    const data = useSelector<AppRootStateType, modalDataType>(state => state.dataModalWindow.data)

    const dispatch = useDispatch()

    const [activeModal, setActiveModal] = useState<boolean>(false)

    const backlight = (str: string) => {
        return <HightlightText filter={filter} str={str}/>
    }

    const activateModal = (value: modalDataType) => {
        setActiveModal(true)
        dispatch(setDataModalAC(value))
    }


    return (
        <div>
            <UsersPage users={filteredUsers} backlight={backlight} activateModal={activateModal}/>
            <ModalWindow activeModal={activeModal} setActiveModal={setActiveModal}>
                <div>
                    <div className={styles.modalStyle}>
                        <span className={styles.textBold}>Adress:</span>
                        <div>city: {data.city}</div>
                        <div>street: {data.street}</div>
                        <div>suite: {data.suite}</div>
                    </div>
                    <div className={styles.modalStyle}>
                        <div>
                            <span className={styles.textBold}>Company name: </span>
                            {data.nameCompany}
                        </div>
                    </div>
                </div>
            </ModalWindow>
        </div>
    )
}


//types
type UsersPageContainerPropsType = {
    filter: string
    filteredUsers: Array<UsersType> | undefined
}
