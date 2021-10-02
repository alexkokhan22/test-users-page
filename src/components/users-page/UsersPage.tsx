import React, {ReactNode} from "react";
import {UsersType} from "../../redux/users-page/usersPageReducer";
import styles from "./UsersPage.module.css"
import {modalDataType} from "../../redux/modal/modalWindowReducer";


export const UsersPage: React.FC<UsersPagePropsType> = ({users, backlight, activateModal}) => {

    return (
        <div className={styles.usersList}>

            {users?.map(u => {
                return <div onClick={() => activateModal({
                    city: u.address.city,
                    suite: u.address.suite,
                    street: u.address.street,
                    nameCompany: u.company.name
                })} className={styles.users} key={u.id}>
                    <div><span className={styles.textBold}>name: </span> {backlight(u.name)}</div>
                    <div><span className={styles.textBold}>username: </span> {backlight(u.username)}</div>
                    <div><span className={styles.textBold}>email: </span> {backlight(u.email)}</div>
                </div>
            })}
        </div>
    )
}

//types
type UsersPagePropsType = {
    users: Array<UsersType> | undefined
    backlight: (value: string) => ReactNode
    activateModal: (value: modalDataType) => void
}
