import axios from "axios";

const xhr = axios.create()

export const getPost = (id) => {
    const options = {
        url: `https://jsonplaceholder.typicode.com/posts/${id}`,
        method: 'GET',
    }
    return xhr(options)
}