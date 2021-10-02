import {ActionsUsersPageType, searchUsersAC} from "./actionsUsersPage";


const initialState: InitialStateType = {
    usersList: [],
    value: '',
    filteredUsers: []
}



export const usersPageReducer = (state: InitialStateType = initialState, action: ActionsUsersPageType): InitialStateType => {
    switch (action.type) {
        case 'UsersPage/SET-USERS':
            return {
                ...state,
                usersList: action.users,
                filteredUsers: action.users
            }
        case 'UserPage/SEARCH': {
            const {value} = action;
            const filteredUsers = state.usersList?.filter(u => {
                return u.name.toLowerCase().includes(value.toLowerCase())
                    || u.username.toLowerCase().includes(value.toLowerCase())
                    || u.email.toLowerCase().includes(value.toLowerCase())
            })
            return {...state, value, filteredUsers};
        }
        default:
            return state
    }
}


//types
type InitialStateType = {
    usersList: Array<UsersType> | undefined,
    value: string,
    filteredUsers: Array<UsersType> | undefined
}

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
