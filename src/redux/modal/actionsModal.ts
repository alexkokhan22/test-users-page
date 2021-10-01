import {modalDataType} from "./modalWindowReducer";

export const setDataModalAC = (data: Array<modalDataType> | undefined) => ({type: 'ModalWindow/SET-DATA', data} as const)

//actions types
export type ActionsModalWindowType = setUsersActionType

type setUsersActionType = ReturnType<typeof setDataModalAC>

