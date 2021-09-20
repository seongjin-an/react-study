import {DECREASE, INCREASE} from "./CounterType";

export const increase = (payload) => {
    return{
        type: INCREASE,
        payload: payload
    }
}
export const decrease = (payload) => {
    return{
        type: DECREASE,
        payload: payload
    }
}