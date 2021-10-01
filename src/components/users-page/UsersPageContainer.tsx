import React, {ChangeEvent, useState} from "react";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {UsersType} from "../../redux/usersPageReducer";
import {UsersPage} from "./UsersPage";
import {HightlightText} from "../hightlight-text/HightlightText";


export const UsersPageContainer = () => {
    const users = useSelector<AppRootStateType, Array<UsersType> | undefined>(state => state.users.usersList)

    const [filter, setFilter] = useState('')

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

    return (
        <div>
            <input value={filter} onChange={onChangeFilter}/>
            <button onClick={reset}>reset</button>
            <UsersPage users={filteredUsers} backlight={backlight}/>
        </div>
    )
}
