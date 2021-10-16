import React from "react";
import {Store} from "@reduxjs/toolkit";
import {configure, mount} from "enzyme";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {createStore} from "../modules";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {PostListPage} from "../pages/postList";
import toJson from "enzyme-to-json";
import "@testing-library/jest-dom/extend-expect";

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
    beforeEach(() => {
        store = createStore()
        configure({ adapter: new Adapter() });
    })
    it('should match snapshot', () => {
        const {wrapper} = setup(PostListPage)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    it('should render', () => {
        const { wrapper } = setup(PostListPage)
        const header=wrapper.find('.post-list-header')
        expect(header.text()).toBe('REACTERS')
        const writeButton = wrapper.find('CommonButton')

    })
})