import { useState } from "react"

const Counter = ({kind, tigers, handleIncreaseTiger, handleDecreaseTiger}) => {
    const [cats, setCats] = useState(0)
    const [dogs, setDogs] = useState(0)
    const handleIncreaseCat = () => {
        setCats(cats + 1)
    }
    const handleDecreaseCat = () => {
        setCats(cats - 1)
    }
    const handleIncreaseDog = () => {
        setDogs(dogs + 1)
    }
    const handleDecreaseDog = () => {
        setDogs(dogs - 1)
    }
    return <div>
        <div>
            <div>props area(states from parent component)</div>
            <div>
                {kind} world
            </div>
            <div>tigers: {tigers}</div>
            <div>
                <button onClick={() => handleIncreaseTiger()}>+</button>
                <button onClick={() => handleDecreaseTiger()}>-</button>
            </div>
            <hr/>
            <div>states area(states of this component)</div>
            <div>cats: {cats}</div>
            <div>
                <button onClick={() => handleIncreaseCat()}>+</button>
                <button onClick={() => handleDecreaseCat()}>-</button>
            </div>
            <div>dogs: {dogs}</div>
            <div>
                <button onClick={() => handleIncreaseDog()}>+</button>
                <button onClick={() => handleDecreaseDog()}>-</button>
            </div>
        </div>
</div>
}
export default Counter