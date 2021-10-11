export interface IPosts{
    page: number,
    username: string,
    tag: string
}
export const LIST_POSTS = 'posts/LIST_POSTS'
export const LIST_POSTS_REQUEST = 'posts/LIST_POSTS_REQUEST'
export const LIST_POSTS_SUCCESS = 'posts/LIST_POSTS_SUCCESS'
export const LIST_POSTS_FAILURE = 'posts/LIST_POSTS_FAILURE'