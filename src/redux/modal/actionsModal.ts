import {modalDataType} from "./modalWindowReducer";

//actions
export const setDataModalAC = (data: modalDataType) => ({type: 'ModalWindow/SET-DATA', data} as const)

//actions types
export type ActionsModalWindowType = setUsersActionType

type setUsersActionType = ReturnType<typeof setDataModalAC>

