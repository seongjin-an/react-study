import {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPostRequest} from "../../store/post/PostAction";

const Post = () => {
    const dispatch = useDispatch()
    const boards = useSelector((state) => state.post.boards)
    const postRef = useRef(1)

    const handleClickPostButton = () => {
        console.log('handle click post button')
        dispatch(getPostRequest(postRef.current))
        postRef.current++
    }
    return<div  style={{width: '100vw', height: '100vh'}}>
        <button onClick={handleClickPostButton}>불러오기</button>
        <div style={{width: '100vw', height: '100vh'}}>
            {boards.loading && <div>로딩중...</div>}
            {!boards.error && !boards.loading && boards.list && boards.list.map((board,index) =>
                <div key={index} style={{width: '50vw', height: 'auto'}}>
                    <h2>id: {board.id}, userId: {board.userId}</h2>
                    <h3>title: {board.title}</h3>
                    <div>{board.body}</div>
                </div>
            )}
        </div>
    </div>
}
export default Post