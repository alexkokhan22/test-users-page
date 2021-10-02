import {Dispatch} from "redux";
import {usersAPI} from "../../api/usersPageApi";
import {setUsersAC} from "./actionsUsersPage";
import {loadingDataAC} from "../app/appReducerActions";


export const fetchUsersTC = () => {
    return async (dispatch: Dispatch) => {
        const response = await usersAPI.getUsers()
        try {
            dispatch(setUsersAC(response.data))
            dispatch(loadingDataAC(false))
        } catch (e) {
            console.log(e)
        }
    }
}
