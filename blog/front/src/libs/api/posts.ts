import qs from 'qs'
import client from "./client";
import {IWriteState} from "../../modules/write/writeReducer";
import {IPosts} from "../../modules/posts/postsType";

export const writePost = ({title, body, tags}:IWriteState) => client.post('/api/posts', {title, body, tags})

export const readPost = (id:string) => client.get(`/api/posts/${id}`)

export const listPosts = ({ page, username, tag }: IPosts) => {
    const querystring = qs.stringify({ page, username, tag })
    return client.get(`/api/posts?${querystring}`)
}