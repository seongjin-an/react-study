import React, {useEffect, useState} from "react";
import fetch from 'cross-fetch'
interface IImsi{
    userId: number
    id: number
    title: string,
    body: string
}
async function api<T>(url: string): Promise<T> {
    const temp = await fetch(url)
        .then(response => {
            console.log('response:', response);
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json()
        })
        .catch(error=>console.log(error))
    return temp
}
const ImsiCompo =  () => {
    const [list, setList] = useState<IImsi[]>()


    useEffect(() => {
        const response =  api<IImsi[]>('https://jsonplaceholder.typicode.com/posts')
        response.then(i => {
            if(i !== undefined){
                setList(i)
            }
        });
    }, [])
    return(
        <div className="imsi">
            {list?.map(data => {
                return<div>
                    <div>{data.userId}</div>
                    <div>{data.id}</div>
                    <div>{data.title}</div>
                    <div>{data.body}</div>
                </div>
            })}
        </div>
    )
}
export default ImsiCompo