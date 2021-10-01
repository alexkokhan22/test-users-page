import {Dispatch} from "redux";
import {usersAPI} from "../api/usersPageApi";
import {setUsersAC} from "./actions";


export const fetchUsersTC = () => {
    return async (dispatch: Dispatch) => {
        const response = await usersAPI.getUsers()
        try {
            dispatch(setUsersAC(response.data))
        } catch (e) {
            console.log(e)
        }
    }
}
