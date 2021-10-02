import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchUsersTC} from "./redux/users-page/thunksUsersPage";
import {UsersPageContainer} from "./components/users-page/UsersPageContainer";
import {Preloader} from "./components/preloader/Preloader";
import {AppRootStateType} from "./redux/store";
import {SearchField} from "./components/search-field/SearchField";
import {UsersType} from "./redux/users-page/usersPageReducer";

function App() {
    const dispatch = useDispatch()

    const loading = useSelector<AppRootStateType, boolean>(el => el.loading.loading)

    const users = useSelector<AppRootStateType, Array<UsersType> | undefined>(state => state.users.usersList)

    const [filter, setFilter] = useState('')

    useEffect(() => {
        dispatch(fetchUsersTC())
    }, [])

    const search = (value: string) => value.toLowerCase().includes(filter.toLowerCase())

    const filteredUsers = users?.filter((u => {
            return search(u.name) || search(u.username) || search(u.email)
        }
    ))

    const onChangeFilter = (e: ChangeEvent<HTMLInputElement>) => {
        setFilter(e.currentTarget.value)
    }

    const reset = () => {
        setFilter('')
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
