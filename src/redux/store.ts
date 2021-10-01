import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {usersPageReducer} from "./usersPageReducer";


const rootReducer = combineReducers({
    users: usersPageReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

//types
export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;
