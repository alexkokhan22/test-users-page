import {ActionsAppReducerType} from "./appReducerActions";


const initialState: InitialStateType = {
    loading: true
}

export const loadingAppReducer = (state: InitialStateType = initialState, action: ActionsAppReducerType): InitialStateType => {
    switch (action.type) {
        case 'APP/LOADING-DATA':
            return {
                ...state,
                loading: action.loading
            }
        default:
            return state
    }
}


//types
type InitialStateType = {loading: boolean}

