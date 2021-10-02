import {ActionsModalWindowType} from "./actionsModal";

const InitialState: InitialStateType = {
    data: {
        street: '',
        city: '',
        suite: '',
        nameCompany: ''
    }
}

export const modalWindowDataReducer = (state: InitialStateType = InitialState, action: ActionsModalWindowType): InitialStateType => {
    switch (action.type) {
        case 'ModalWindow/SET-DATA':
            return {
                ...state,
                data: action.data
            }

        default:
            return state
    }
}


//types
type InitialStateType = { data: modalDataType}

export type modalDataType = {
    street: string
    suite: string
    city: string
    nameCompany: string
}

