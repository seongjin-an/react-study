import {useState} from "react";

const FunctionComponent = () => {

    const [num, setNum] = useState(0)
    const handleIncrease = () =>{
        setNum(num+1)
    }
    const handleDecrease = () => {
        setNum(num-1)
    }
    return(
        <>
            <div>
                <h1>{num}</h1>
            </div>
            <div>
                <button onClick={handleIncrease}>+1</button>
                <button onClick={handleDecrease}>-1</button>
            </div>
        </>
    )
}
export default FunctionComponent