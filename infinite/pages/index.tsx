import axios from 'axios'
import {useCallback, useEffect, useRef, useState} from "react";
import ScrollBars from 'rc-scrollbars'
import useIntersectionObserver from "./api/useIntersectionObserver";
interface post{
    userId: number,
    id: number,
    title: string,
    body: string
}
const index = () => {
    const currentPage = useRef(1);
    const totalPage = useRef(0);

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);

    const [list, setList] = useState<post[]>(null);

    const rootRef = useRef(null);
    const targetRef = useRef(null);

    const [data, setData] = useState<post[]>(null)
    const fun = async () => {
        const {data}= await axios.get('http://jsonplaceholder.typicode.com/posts')
        return data
    }
    useEffect(()=>{
        fun().then(posts=>{
            setData(posts)
            setList(posts.slice(0, 10))
            totalPage.current = posts.length/10
            console.log(posts.length)
            console.log("iii:", posts)
        })
    },[])
    const loadMore = useCallback(()=>{
        if(data){
            console.log("loadMore!!!")
            console.log('list:', list);
            console.log('data:', data);
            currentPage.current++
            const page = (currentPage.current-1)*10
            const tempData = data.slice(page,page+10)
            setList([...list, ...tempData])
        }
    },[list, data])
    useIntersectionObserver({
        root: rootRef.current,
        target: targetRef.current,
        onIntersect: ([{isIntersecting}]) => {
            console.log('isIntersecting:',isIntersecting)
            if(
                isIntersecting &&
                currentPage.current < totalPage.current
            ) {
                console.log("...")
                loadMore();
            }
        }
    });
    return <div ref={rootRef}>
        <ScrollBars universal={true} style={{width: 350, height: 800 }}>
            {list && list.map((li, index) => {
                return <div key={index}>
                    <div>userId: {li.userId}</div>
                    <div>id: {li.id}</div>
                    <div>title: {li.title}</div>
                    <div>body: {li.body}</div>
                </div>
            })}
    `       <div ref={targetRef}/>

        </ScrollBars>
    </div>
}
export default index