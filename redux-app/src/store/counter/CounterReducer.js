import {DECREASE, INCREASE} from "./CounterType";

const initialState = {
    number: 0
}

const counter = (state = initialState, action) => {
    switch(action.type){
        case INCREASE:
            return{
                ...state,
                number: state.number + action.payload
            }
        case DECREASE:
            return{
                ...state,
                number: state.number - action.payload
            }
        default:
            return state;
    }
}
export default counter