import {combineReducers} from "redux";
import auth from "./auth/authReducer";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    auth
})
// export const rootSaga = function*(){
//     yield all([
//         fork(postSaga)
//     ])
// }
export type RootState = ReturnType<typeof rootReducer>
export const createStore = () => {
    // const sagaMiddleware = createSagaMiddleware();
    const store = configureStore({
        reducer: rootReducer,
        // middleware: [sagaMiddleware],
        devTools: process.env.NODE_ENV !== "production",
    })
    // sagaMiddleware.run(rootSaga);
    return store
}

export default rootReducer