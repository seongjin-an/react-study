import Counter from "./Counter";
import {useDispatch, useSelector} from "react-redux";
import {decrease, increase} from "../store/counter/CounterAction";

const CounterContainer = () => {
    const num = useSelector((state) => state.counter.number)
    const dispatch = useDispatch()
    const increaseNum = (req) => dispatch(increase(req))
    const decreaseNum = (req) => dispatch(decrease(req))
    return <Counter number={num} onIncrease={increaseNum} onDecrease={decreaseNum}/>
}
export default CounterContainer