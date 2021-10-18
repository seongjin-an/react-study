import {configure, mount, shallow} from 'enzyme'
import React from "react";
import {LoginPage} from "../pages/login";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {BrowserRouter} from "react-router-dom";
import {Store} from "@reduxjs/toolkit";
import {createStore} from "../modules";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import "@testing-library/jest-dom/extend-expect";
import {listPosts} from "../libs/api/posts";

let store: Store
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

describe('auth component', () => {

    beforeEach(async () => {
        store = await createStore()
        configure({ adapter: new Adapter() });
    })
    it('should match snapshot', async () => {
        const {wrapper} = await setup(LoginPage)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    it('should render', async () => {
        const {wrapper} = await setup(LoginPage)
        const header=wrapper.find('.logo-area')
        expect(header.text()).toBe('REACTERS')
        const loginButton = wrapper.find('AuthForm').find('CommonButton')
        expect(loginButton.text()).toBe('로그인')
        expect(loginButton.text()).not.toBe('회원가입')
    })
    it('should login', async () => {
        const {wrapper} = await setup(LoginPage)
        wrapper.find('input[name="username"]')
            .simulate('change', {target: {value: 'imsi11'}})
        wrapper.find('input[name="password"]')
            .simulate('change', {target: {value: '123411'}})
        wrapper.find('button').simulate('click')
    })
})
