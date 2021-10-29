import axios from "axios";

export const getList = () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
}