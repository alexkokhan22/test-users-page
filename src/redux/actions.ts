import {UsersType} from "./usersPageReducer";

export const setUsersAC = (users: Array<UsersType> | undefined) => ({type: 'UsersPage/SET-USERS', users} as const)

export const filteredUsersAC = (filteredUsers: Array<UsersType> | undefined) => ({
    type: 'UsersPage/FILTERED-USERS',
    filteredUsers
} as const)

//actions types
export type ActionsType = setUsersActionType | filteredUsersActionType

type setUsersActionType = ReturnType<typeof setUsersAC>

type filteredUsersActionType = ReturnType<typeof filteredUsersAC>
