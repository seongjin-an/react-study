import axios from "axios";

export const getInfo = (id: any) => {
    console.log('request')
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
}