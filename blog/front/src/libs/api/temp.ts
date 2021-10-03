import axios from "axios";
import {TempPost} from "../../types/TempPost";
import {useQuery} from "react-query";

const getPostById = async (id: number): Promise<TempPost> => {
    const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
    );
    return data;
};

export const usePost = (postId: number) => {
    return useQuery(['post', postId], () => getPostById(postId), {
        enabled: !!postId,
    });
};

const getPosts = async (): Promise<Array<TempPost>> => {
    const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
    );
    return data;
};

export const usePosts = () => {
    return useQuery('posts', getPosts);
};