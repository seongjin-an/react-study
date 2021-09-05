import { useState } from "react"
import Counter from "./components/basic/FunctionCounter"

const FunctionApp = () => {
    const [kind, setKind] = useState('animal')
    const [tigers, setTigers] = useState(0)
    const handleIncreaseTiger = () => {
        setTigers(tigers + 1)
    }
    const handleDecreaseTiger = () => {
        setTigers(tigers - 1)
    }
    return(
        <Counter kind={kind} tigers={tigers} 
            handleIncreaseTiger={handleIncreaseTiger} handleDecreaseTiger={handleDecreaseTiger}/>
    )
}
export default FunctionApp