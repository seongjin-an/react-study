import React from "react";
// import {applyMiddleware, createStore} from 'redux'
import {createStore} from "../modules";
import {configureStore, Store} from "@reduxjs/toolkit";
import {configure, mount} from "enzyme";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {PostListPage} from "../pages/postList";
import toJson from "enzyme-to-json";
import "@testing-library/jest-dom/extend-expect";
import {PostListArea} from "../components/organisms/postList";
import {PostItem} from "../components/molecules/postList";
import rootReducer, {rootSaga} from "../modules";
import createSagaMiddleware from "@redux-saga/core";

let store:Store
const setup = (WrappedComponent: React.ComponentProps<any>, props={}) => {
    const wrapper = mount(
        <Provider store={store}>
            <BrowserRouter>
                <WrappedComponent {...props} />
            </BrowserRouter>
        </Provider>
    )
    return {
        wrapper
    }
}
describe('post list component', () => {
    beforeEach(async () => {
        // store = createStore()
        const sagaMiddleware = createSagaMiddleware();
        const _store = configureStore({
            reducer: rootReducer,
            middleware: [sagaMiddleware],
            devTools: process.env.NODE_ENV !== "production",
        })
        sagaMiddleware.run(rootSaga);
        store = _store
        configure({ adapter: new Adapter() });
    })
    it('should match snapshot', async () => {
        const props = {
            location:{
                search: ''
            },
            match:{
                params: {
                    username: ''
                }
            }
        }
        const { wrapper } = await setup(PostListPage)
        expect(toJson(wrapper)).toMatchSnapshot();
    })
    it('should render', async () => {
        const props = {
            location:{
                search: ''
            },
            match:{
                params: {
                    username: ''
                }
            }
        }
        const { wrapper } = await setup(PostListPage, props);
        const header=wrapper.find('.post-list-header');
        expect(header.text()).toBe('REACTERS')
        const writeButton = wrapper.find("CommonButton")
        expect(writeButton.text()).toBe('로그인')
    })
    it('should render post list area', async () => {
        const props = {
            location:{
                search: ''
            },
            match:{
                params: {
                    username: ''
                }
            }
        }

        const { wrapper } = await setup(PostListArea, props)
        const postItems = wrapper.find('div[className="real-post-list"]')
        console.log('real-post-list:', postItems)
        // expect(postItems).toHaveLength(3)
        // expect(postItems.length).toEqual(3)
    })
})
