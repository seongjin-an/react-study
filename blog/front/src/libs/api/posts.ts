import client from "./client";
import {IWriteState} from "../../modules/write/writeReducer";

export const writePost = ({title, body, tags}:IWriteState) => client.post('/api/posts', {title, body, tags})