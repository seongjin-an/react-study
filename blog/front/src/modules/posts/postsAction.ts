import {createAction} from "@reduxjs/toolkit";
import {IPosts, LIST_POSTS_REQUEST} from "./postsType";
import {ParsedQs} from "qs";

export const listPostsAction = createAction<IPosts|ParsedQs>(LIST_POSTS_REQUEST)