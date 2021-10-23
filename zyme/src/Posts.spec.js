import React from "react";
import {configure, mount, shallow} from "enzyme";
import {Provider} from "react-redux";
import {createStore, rootReducer, rootSaga} from "./modules";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Posts from "./Posts";
import toJson from "enzyme-to-json";
import createSagaMiddleware from "@redux-saga/core";
import {configureStore} from "@reduxjs/toolkit";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"

let store;
const setup = (WrappedComponent, props={}) => {
    const wrapper = mount(
        <Provider store={store}>
            <WrappedComponent {...props}/>
        </Provider>,
        { context: { store }}
    )
    return {wrapper}
}
describe('enzyme saga test', () => {

    beforeEach(() => {
        // store = createStore()
        const sagaMiddleware = createSagaMiddleware()
        const _store = configureStore({
            reducer: rootReducer,
            middleware: [sagaMiddleware],
        })
        sagaMiddleware.run(rootSaga)
        store = _store
        configure({ adapter: new Adapter() });
    })
    it('should match snapshot', async () => {
        // const wrapper = render(<Provider store={store}><Posts/></Provider>)
        // expect(await screen.findByText('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')).toBeInTheDocument()
        const { wrapper } = await setup(Posts)
        expect(toJson(wrapper)).toMatchSnapshot()
        // console.log('wrapper:', toJson(wrapper.children().children()))
        // const div = await wrapper.findWhere(node => {
        //     return node.text()==='sunt aut facere repellat provident occaecati excepturi optio reprehenderit\n' +
        //         'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
        // })
        // console.log('findWhere:', div)
   })
})