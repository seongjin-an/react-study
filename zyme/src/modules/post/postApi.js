import axios from "axios";

export const getList = () => axios.get('https://jsonplaceholder.typicode.com/posts')