import {UsersType} from "./usersPageReducer";

//actions
export const setUsersAC = (users: Array<UsersType> | undefined) => ({type: 'UsersPage/SET-USERS', users} as const)

export const searchUsersAC = (value: string) => ({type: 'UserPage/SEARCH', value} as const)


//actions types
export type ActionsUsersPageType = setUsersActionType | SearchActionType

type setUsersActionType = ReturnType<typeof setUsersAC>

type SearchActionType = ReturnType<typeof searchUsersAC>

