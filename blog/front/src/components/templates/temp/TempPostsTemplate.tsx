import React, {useState} from "react";
import {QueryClient, QueryClientProvider} from "react-query";
import {TempPosts} from "../../organisms/temp/TempPosts";
import {TempPost} from "../../organisms/temp/TempPost";
const queryClient = new QueryClient()
export const TempPostsTemplate = () => {
    const [postId, setPostId] = useState<number>(-1);
    return(
        <QueryClientProvider client={queryClient}>
            {postId > -1 ?
                <TempPost postId={postId} setPostId={setPostId} /> :
                <TempPosts setPostId={setPostId}/>
            }
        </QueryClientProvider>
    )
}