import {UsersType} from "./usersPageReducer";

//actions
export const setUsersAC = (users: Array<UsersType> | undefined) => ({type: 'UsersPage/SET-USERS', users} as const)

export const searchUsersAC = (value: string) => ({type: 'UserPage/SEARCH', value} as const)

export const deleteUsersAC = (id: number) => ({type: 'UserPage/DELETE-USER', id} as const)


//actions types
export type ActionsUsersPageType = SetUsersActionType | SearchActionType | DeleteUsersActionType

type SetUsersActionType = ReturnType<typeof setUsersAC>

type SearchActionType = ReturnType<typeof searchUsersAC>

type DeleteUsersActionType = ReturnType<typeof deleteUsersAC>

