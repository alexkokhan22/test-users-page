import {ActionsType} from "./actionsUsersPage";


const initialState: InitialStateType = {
    usersList: []
}

export const usersPageReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'UsersPage/SET-USERS':
            return {
                ...state,
                usersList: action.users
            }
        default:
            return state
    }
}


//types
type InitialStateType = { usersList: Array<UsersType> | undefined }

export type UsersType = {
    id: number
    name: string
    username: string
    email: string
    address: AddressType
    phone: string
    website: string
    company: CompanyType
}

type AddressType = {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: GeoType
}

type GeoType = {
    lat: string
    lng: string
}

type CompanyType = {
    name: string
    catchPhrase: string
    bs: string
}
