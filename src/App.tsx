import React, {ChangeEvent, useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchUsersTC} from "./redux/users-page/thunksUsersPage";
import {UsersPageContainer} from "./components/users-page/UsersPageContainer";
import {Preloader} from "./components/preloader/Preloader";
import {AppRootStateType} from "./redux/store";
import {SearchField} from "./components/search-field/SearchField";
import {UsersType} from "./redux/users-page/usersPageReducer";
import {searchUsersAC} from "./redux/users-page/actionsUsersPage";


function App() {
    const loading = useSelector<AppRootStateType, boolean>(el => el.loading.loading)

    const filteredUsers = useSelector<AppRootStateType, Array<UsersType> | undefined>(state => state.users.filteredUsers)

    const filter = useSelector<AppRootStateType, string>(state => state.users.value)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsersTC())
    }, [])

    const onChangeFilter = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(searchUsersAC(e.currentTarget.value))
    }

    const reset = () => {
        dispatch(searchUsersAC(''))
        dispatch(fetchUsersTC())
    }

    if (loading) {
        return <Preloader/>
    }

    return (
        <div className="App">
            <SearchField filter={filter} onChangeFilter={onChangeFilter} reset={reset}/>
            <UsersPageContainer filter={filter} filteredUsers={filteredUsers}/>
        </div>
    );
}

export default App;
