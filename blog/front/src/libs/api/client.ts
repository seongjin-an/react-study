import axios from "axios";

const client = axios.create()
/*
client.defaults.baseURL = 'url'
client.defaults.headers.common['Authorization'] = 'B'
axios.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.reject(error)
    }
)
*/
export default client