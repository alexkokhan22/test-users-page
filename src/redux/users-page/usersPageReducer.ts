import {ActionsUsersPageType} from "./actionsUsersPage";


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

            const search = (item: string) => item.toLowerCase().includes(value.toLowerCase())

            const filteredUsers = state.usersList?.filter(u => {
                return search(u.name) || search(u.username) || search(u.email)
            })

            return {...state, value, filteredUsers};
        }

        case "UserPage/DELETE-USER": {
            const {id} = action
            const deleteUsers = state.usersList?.filter(el => el.id !== id)
            return {...state,  filteredUsers: deleteUsers, usersList: deleteUsers}
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
