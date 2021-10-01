import {UsersType} from "./usersPageReducer";

export const setUsersAC = (users: Array<UsersType>) => ({type: 'UsersPage/SET-USERS', users} as const)

export const filteredUsersAC = (users: Array<UsersType>, value: string) => ({
    type: 'UsersPage/FILTERED-USERS',
    users,
    value
} as const)

//actions types
export type ActionsType = setUsersActionType | filteredUsersActionType

type setUsersActionType = ReturnType<typeof setUsersAC>

type filteredUsersActionType = ReturnType<typeof filteredUsersAC>
