import React from "react";
import {Action, configureStore, Dispatch, Store} from "@reduxjs/toolkit";
import {configure, mount} from "enzyme";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {PostListPage} from "../pages/postList";
import toJson from "enzyme-to-json";
import "@testing-library/jest-dom/extend-expect";
import configureMockStore from 'redux-mock-store'
import * as redux from 'react-redux'
import * as userActions from '../modules/user/userAction'

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

describe('post list component', () => {
    let spyOnUseSelector
    let spyOnUseDispatch
    let mockDispatch: jest.Mock
    const mockStore = configureMockStore()
    beforeEach(async () => {

        store = mockStore()
        configure({ adapter: new Adapter() });
        // Mock useSelector hook
        spyOnUseSelector = jest.spyOn(redux, 'useSelector');
        // // Mock useDispatch hook
        spyOnUseDispatch = jest.spyOn(redux, 'useDispatch');
        // Mock dispatch function returned from useDispatch
        mockDispatch = jest.fn();
        spyOnUseSelector.mockImplementation((selectorFn) => selectorFn({
            user: {
                user: {
                    username: 'ansj'
                }
            },
            posts: {
                posts: [
                    {
                        body: 'body test',
                        publishedDate: '20211111',
                        tags: ['tag1 test', 'tag2 test'],
                        title: 'title test',
                        user: {
                            username: 'ansjUsername',
                            _id: 'ansjId'
                        },
                        __v: 111,
                        _id: 'ansjId'
                    },
                    {
                        body: 'body test2',
                        publishedDate: '20211112',
                        tags: ['tag1 test2', 'tag2 test2'],
                        title: 'title test2',
                        user: {
                            username: 'ansjUsername2',
                            _id: 'ansjId2'
                        },
                        __v: 1112,
                        _id: 'ansjId2'
                    }
                ],
                error: null
            },
            loading:{
                "posts/LIST_POSTS": false
            }
        }));
        spyOnUseDispatch.mockReturnValue(mockDispatch);
    })
    afterEach(() => {
        jest.restoreAllMocks();
    });
    it('should match snapshot', () => {

        const { wrapper } = setup(PostListPage, {
            location:{
                search: ''
            },
            match:{
                params: {
                    username: ''
                }
            }
        })
        expect(toJson(wrapper)).toMatchSnapshot();
    })
    it('should render properly...', () => {
        const {wrapper} = setup(PostListPage, {
            location:{
                search: ''
            },
            match:{
                params: {
                    username: ''
                }
            }
        })
        const commonHeader = wrapper.find('.common-header')
        expect(commonHeader.text()).toBe("REACTERS");

        const commonButton = wrapper.find('CommonButton')
        expect(commonButton).toHaveLength(4)

        const commonButtonBetter = wrapper.findWhere(n =>
            n.name() === 'CommonButton'
        )
        expect(commonButtonBetter).toHaveLength(4)

        const logoutButton = wrapper.findWhere(n=>n.name()==='CommonButton'&&n.text()==='로그아웃')
        logoutButton.simulate('click')
        wrapper.update()
        console.log('mockDispatch.mock:', mockDispatch.mock)
        console.log('mockDispatch.mock.calls:', mockDispatch.mock.calls);
        expect(mockDispatch.mock.calls[1][0]).toEqual({"payload": undefined, "type": "user/LOGOUT"})

        const loginButton = wrapper.findWhere(n=>n.name()==='CommonButton'&&n.text()==='로그인');

    })
})
