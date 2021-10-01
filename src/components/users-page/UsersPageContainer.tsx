import React from "react";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {UsersType} from "../../redux/usersPageReducer";



export const UsersPageContainer = () => {
    const users = useSelector<AppRootStateType, Array<UsersType> | null>(state => state.users.usersList)
    console.log(users)

    return (
        <div>
            {users?.map( u => {
                return <div key={u.id}>
                    <div>{u.name}</div>
                    <div>{u.username}</div>
                    <div>{u.email}</div>
                </div>
            })}
        </div>
    )
}
