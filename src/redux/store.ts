import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {usersPageReducer} from "./users-page/usersPageReducer";
import {modalWindowDataReducer} from "./modal/modalWindowReducer";
import {loadingAppReducer} from "./app/appReducer";


const rootReducer = combineReducers({
    users: usersPageReducer,
    dataModalWindow: modalWindowDataReducer,
    loading: loadingAppReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

//types
export type AppRootStateType = ReturnType<typeof rootReducer>

