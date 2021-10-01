import React, {ChangeEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {UsersType} from "../../redux/users-page/usersPageReducer";
import {UsersPage} from "./UsersPage";
import {HightlightText} from "../hightlight-text/HightlightText";
import {ModalWindow} from "../modal-window/ModalWindow";
import styles from "./UsersPage.module.css";
import {modalDataType} from "../../redux/modal/modalWindowReducer";
import {setDataModalAC} from "../../redux/modal/actionsModal";


export const UsersPageContainer = () => {
    const users = useSelector<AppRootStateType, Array<UsersType> | undefined>(state => state.users.usersList)
    const data = useSelector<AppRootStateType, Array<modalDataType> | undefined>(state => state.dataModalWindow.data)
    const dispatch = useDispatch()

    const [filter, setFilter] = useState('')
    const [activeModal, setActiveModal] = useState<boolean>(false)

    const search = (value: string) => value.toLowerCase().includes(filter.toLowerCase())

    const backlight = (str: string) => {
        return <HightlightText filter={filter} str={str}/>
    }

    const filteredUsers = users?.filter((u => {
            return search(u.name) || search(u.username) || search(u.email)
        }
    ))

    const onChangeFilter = (e: ChangeEvent<HTMLInputElement>) => {
        setFilter(e.currentTarget.value)
    }

    const reset = () => {
        setFilter('')
    }

    const activateModal = (value: Array<modalDataType>) => {
        setActiveModal(true)
        dispatch(setDataModalAC(value))
    }


    return (
        <div>
            <div className={styles.inputContainer}>
                <input className={styles.input} value={filter} onChange={onChangeFilter} placeholder={'search...'}/>
                <button className={styles.button} onClick={reset}>reset</button>
            </div>
            <UsersPage users={filteredUsers} backlight={backlight} activateModal={activateModal}/>
            <ModalWindow activeModal={activeModal} setActiveModal={setActiveModal}>
                {data?.map(el => {
                    return <div>
                        <div className={styles.modalStyle}>
                            <span className={styles.textBold}>Adress:</span>
                            <div>city: {el.city}</div>
                            <div>street: {el.street}</div>
                            <div>suite: {el.suite}</div>
                        </div>
                        <div className={styles.modalStyle}>
                            <div>
                                <span className={styles.textBold}>Company name: </span>
                                {el.name}
                            </div>
                        </div>
                    </div>
                })}
            </ModalWindow>
        </div>
    )
}
