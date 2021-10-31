import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {readPostRequest} from "./modules/post/postAction";

const Posts = () => {
    const dispatch = useDispatch()
    const list = useSelector((state) => state.post.list)
    useEffect(() => {
        dispatch(readPostRequest())
    },[])
    return(
        <div className="postArea">
            {list && list.length>0 &&
            list.map((item, index) => <div key={index}>
                <div>{item.userId}</div>
                <div>{item.id}</div>
                <div>{item.title}</div>
                <div>{item.body}</div>
            </div>)
            }
        </div>
    )
}
export default Posts