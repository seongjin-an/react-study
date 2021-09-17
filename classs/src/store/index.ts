import {combineReducers, Reducer} from "redux";
import info, {IInfo} from "./base/infoReducer";
export interface IRootState {
    info: IInfo
}
const rootReducer = combineReducers<IRootState>({
    info
})
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer