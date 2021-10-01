import {ActionsType} from "./actions";


const initialState: InitialStateType = []

export const usersPageReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'UsersPage/SET-USERS':
            return action.users.map(m => m)
        case 'UsersPage/FILTERED-USERS':
            return action.users.filter((u) => {
                return (u.name && u.email.toLowerCase().includes(action.value.toLowerCase()))
                    || (u.username.toLowerCase().includes(action.value.toLowerCase()))
            })
        default:
            return state
    }
}


//types
type InitialStateType = Array<UsersType> | null

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
