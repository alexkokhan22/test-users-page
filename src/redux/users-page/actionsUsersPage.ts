import {UsersType} from "./usersPageReducer";


//actions
export const setUsersAC = (users: Array<UsersType> | undefined) => ({type: 'UsersPage/SET-USERS', users} as const)


//actions types
export type ActionsType = setUsersActionType

type setUsersActionType = ReturnType<typeof setUsersAC>

