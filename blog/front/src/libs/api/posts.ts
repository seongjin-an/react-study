import client from "./client";
import {IWriteState} from "../../modules/write/writeReducer";

export const writePost = ({title, body, tags}:IWriteState) => client.post('/api/posts', {title, body, tags})

export const readPost = (id:string) => client.get(`/api/posts/${id}`)