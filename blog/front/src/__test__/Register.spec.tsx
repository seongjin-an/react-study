import {Store} from "@reduxjs/toolkit";
import React from "react";
import {configure, mount} from "enzyme";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
// import createMockStore from "redux-mock-store";
import configureMockStore from "redux-mock-store";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import * as redux from 'react-redux'
import {RegisterPage} from "../pages/register";
import toJson from "enzyme-to-json";
import {EFormType} from "../components/organisms/auth/AuthArea";


let store: Store
const setup = (WrappedComponent: React.ComponentProps<any>, props = {}) => {
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

describe('register component', () => {
    let spyOnUseSelector
    let spyOnUseDispatch
    let mockDispatch: jest.Mock
    let mockStore = configureMockStore()
    beforeEach(() => {
        store = mockStore()
        configure({adapter: new Adapter()})
        spyOnUseSelector = jest.spyOn(redux, 'useSelector')
        spyOnUseDispatch = jest.spyOn(redux, 'useDispatch')
        mockDispatch = jest.fn()
        spyOnUseSelector.mockImplementation(selectorFn => selectorFn({
            auth: {
                register: {
                    username: '',
                    password: '',
                    passwordConfirm: ''
                }
            },
            authError: null,
            user:{
                _id: '',
                username: ''
            }
        }))
        spyOnUseDispatch.mockReturnValue(mockDispatch)
    })
    it('should match snapshot', () => {
        const {wrapper} = setup(RegisterPage, {
            type: EFormType.register
        })

        expect(toJson(wrapper)).toMatchSnapshot()
    })
    it('should render properly', () => {
        const { wrapper } = setup(RegisterPage, {
            type: EFormType.register
        })
        const header = wrapper.find('.logo-area')
        expect(header.text()).toBe('REACTERS')
        const signup = wrapper.find('h3')
        expect(signup.text()).toBe('회원가입')
        const authInput = wrapper.find('AuthInput')
        expect(authInput).toHaveLength(3)
        const commonButton = wrapper.find('CommonButton')
        expect(commonButton.text()).toBe('회원가입')
        const footerButton = wrapper.find('AuthFooter')
        expect(footerButton.text()).toBe('로그인')
    })
    it('should fill', () => {
        const { wrapper } = setup(RegisterPage, {
            type: EFormType.register
        })
        const authInput = wrapper.find('AuthInput')
        authInput.at(0).simulate('change', { target: { name: 'username', value: 'imsi11' } })
        expect(mockDispatch.mock.calls[1][0]).toEqual({ type: 'auth/CHANGE_FIELD', payload: { form: 1, key: 'username', value: 'imsi11'}})
        authInput.at(1).simulate('change', { target: { name: 'password', value: '1234' } })
        expect(mockDispatch.mock.calls[2][0]).toEqual({ type: 'auth/CHANGE_FIELD', payload: { form: 1, key: 'password', value: '1234' }})
        authInput.at(2).simulate('change', { target: { name: 'passwordConfirm', value: '1234' } })
        expect(mockDispatch.mock.calls[3][0]).toEqual({ type: 'auth/CHANGE_FIELD', payload: { form: 1, key: 'passwordConfirm', value: '1234' }})
        console.log('STORE:', store.getState())
        // const usernameInput = wrapper.find('input[name="username"]')
        // console.log('usernameInput prop:', usernameInput.props())
    })
})