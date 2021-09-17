import {GET_INFO_FAIL, GET_INFO_REQUEST, GET_INFO_SUCCESS} from "./infoType";
import {Actions} from "./infoAction";
export interface IPerson{
    name:string
    age:string
    email:string
    phone:string
}
export interface IPost{
    userId:string
    id: string
    title:string
    body:string
}
export interface IInfo{
    posts: IPost[]
    progress: boolean
    error: any
}

const intialState = {
    posts: [],
    progress: false,
    error: false
} as IInfo

type RootAction = Actions[keyof Actions]

const info = (state = intialState, action: RootAction) => {
    switch(action.type){
        case GET_INFO_REQUEST:
            console.log('reducer request:', action)
            return {
                ...state,
                progress: action.payload
            }
        case GET_INFO_SUCCESS:
            return {
                ...state,
                posts: [action.payload, ...state.posts],
                progress: false
            }
        case GET_INFO_FAIL:
            return{
                ...state,
                progress: false,
                error: action.payload
            }
        default:
            return state
    }
}
export default info;