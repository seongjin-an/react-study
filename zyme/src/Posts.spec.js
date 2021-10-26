import React from "react";
import {configure, shallow, mount} from "enzyme";
import {Provider} from "react-redux";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Posts from "./Posts";
import toJson from "enzyme-to-json";
import "@testing-library/jest-dom/extend-expect"
import configureMockStore from 'redux-mock-store'
import {createStore, rootReducer, rootSaga} from "./modules";
import * as actions from "./modules/post/postAction";


let store
const setup2 = (WrappedComponent, props={}) => {
    const wrapper = mount(
        <Provider store={store}>
            <WrappedComponent {...props}/>
        </Provider>
    )
    return {wrapper}
}

const mockStore = configureMockStore()
store = mockStore()
describe('enzyme saga test', () => {

    beforeEach(() => {
        // store = createStore()

        // const _store = configureStore({
        //     reducer: rootReducer,
        //     middleware: [sagaMiddleware],
        // })
        // sagaMiddleware.run(rootSaga)
        // store = _store
        store = mockStore({
            post: {
                list: [
                    {"userId": 11, "id": 11, "title": 'hello', "body": 'world'}
                ]
            }
        })
        configure({ adapter: new Adapter() });
    })
    it('should match snapshot', () => {
        // const wrapper = render(<Provider store={store}><Posts/></Provider>)
        // expect(await screen.findByText('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')).toBeInTheDocument()


        const { wrapper } = setup2(Posts)
        expect(toJson(wrapper)).toMatchSnapshot()
   })
    it('should store', ()=>{
        store = createStore()
        const {wrapper} = setup2(Posts)
        console.log('store.getState()...:', store.getState())
    })
    it('should match actions', () => {
        const expectedActions = {
            readPostRequest:{
                'payload': undefined,
                'type': 'post/READ_POST_REQUEST',
            },
            readPostSuccess:{
                'payload': [{userId:1, id:1, title: 'hello', body: 'world'}],
                'type': 'post/READ_POST_SUCCESS'
            },
            readPostFailure:{
                'payload': undefined,
                'type': 'post/READ_POST_FAILURE'
            }
        };
        expect(actions.readPostRequest()).toEqual(expectedActions.readPostRequest)
        expect(actions.readPostSuccess([{userId:1,id:1,title:'hello',body:'world'}])).toEqual(expectedActions.readPostSuccess)
        expect(actions.readPostFailure()).toEqual(expectedActions.readPostFailure)
    });
})