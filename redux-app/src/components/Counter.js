const Counter = ({ number, onIncrease, onDecrease }) => {
    return(
        <div>
            <h1>{number}</h1>
            <div>
                <button onClick={() => onIncrease(2)}>+</button>
                <button onClick={() => onDecrease(3)}>-</button>
            </div>
        </div>
    )
}
export default Counter