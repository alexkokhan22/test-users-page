import React, {ReactNode} from "react";
import {UsersType} from "../../redux/usersPageReducer";


export const UsersPage: React.FC <UsersPagePropsType> = ({users, backlight}) => {

    return (
        <div>
            {users?.map( u => {
                return <div key={u.id}>
                    <div>{backlight(u.name)}</div>
                    <div>{backlight(u.username)}</div>
                    <div>{backlight(u.email)}</div>
                </div>
            })}
        </div>
    )
}

//types
type UsersPagePropsType = {
    users: Array<UsersType> | undefined
    backlight: (value: string) => ReactNode
}
