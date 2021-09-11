import {useState} from "react";

const Iteration = () => {
    const [names, setNames]=useState([
        {id:1, text:'snowman'},
        {id:2, text:'ice'},
        {id:3, text:'snow'},
    ])
    const [text, setText] = useState('')
    const [nextId, setNextId] = useState(4)
    const onChange=(event)=>setText(event.target.value)
    const onClick=()=>{
        const nextName = names.concat({
            id: nextId,
            text: text
        })
        setNames(nextName)
        setNextId(prev => prev+1)
        setText('')
    }
    const namesList = names.map(name => <li key={name.id}>{name.text}</li>)
    return<>
        <input value={text} onChange={onChange}/>
        <button onClick={onClick}>add</button>
        <ul>{namesList}</ul>
    </>
}
export default Iteration