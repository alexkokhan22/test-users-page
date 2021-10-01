import axios from "axios";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',

})

export const usersAPI = {
    getUsers() {
        const promise = instance.get('users');
        return promise;
    }
}
