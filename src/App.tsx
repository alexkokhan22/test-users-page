import React, {useEffect} from 'react';
import './App.css';
import {useDispatch} from "react-redux";
import {fetchUsersTC} from "./redux/thunks";
import {UsersPageContainer} from "./components/users-page/UsersPageContainer";

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsersTC())
    }, [])

    return (
        <div className="App">
            <UsersPageContainer/>
        </div>
    );
}

export default App;
