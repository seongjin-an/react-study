import {useState} from "react";

const FunctionEvent = () => {
    const [num, setNum] = useState(0)
    const [text, setText] = useState('')
    const handleNumberChange = (event) => {
        setNum(event.target.value)
    }
    const handleTextChange = (event) => {
        setText(event.target.value)
    }
    return(
        <div>
            <div>
                <input type="number" defaultValue={num}
                       onChange={(event) => {
                           console.log(num)
                           handleNumberChange(event)
                       }}/>
            </div>
            <div>
                <input type='text' defaultValue={text}
                       onChange={(event)=>{
                           console.log(text)
                           handleTextChange(event)
                       }}/>
            </div>
        </div>
    )
}
export default FunctionEvent