import React from "react";
import {configureStore, Store} from "@reduxjs/toolkit";
import {configure, mount} from "enzyme";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {PostListPage} from "../pages/postList";
import toJson from "enzyme-to-json";
import "@testing-library/jest-dom/extend-expect";
import {PostListArea} from "../components/organisms/postList";
import configureMockStore from 'redux-mock-store'
import * as redux from 'react-redux'
import {RootState} from "../modules";

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
    let spyOnUseSelector
    let spyOnUseDispatch
    let mockDispatch
    const mockStore = configureMockStore()
    beforeEach(async () => {


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
        store = mockStore({
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
        } as RootState)
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
    // it('should render', async () => {
    //     const { wrapper } = await setup(PostListPage);
    //     const header=wrapper.find('.post-list-header');
    //     expect(header.text()).toBe('REACTERS')
    //     const writeButton = wrapper.find("CommonButton")
    //     expect(writeButton.text()).toBe('로그인')
    // })
    // it('should render post list area', async () => {
    //     const props = {
    //         location:{
    //             search: ''
    //         },
    //         match:{
    //             params: {
    //                 username: ''
    //             }
    //         }
    //     }
    //
    //     const { wrapper } = await setup(PostListArea, props)
    //     const postItems = wrapper.find('div[className="real-post-list"]')
    //     console.log('real-post-list:', postItems)
    //     // expect(postItems).toHaveLength(3)
    //     // expect(postItems.length).toEqual(3)
    // })
})
