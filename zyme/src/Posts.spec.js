import React from "react";
import {configure, mount} from "enzyme";
import {Provider} from "react-redux";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Posts from "./Posts";
import toJson from "enzyme-to-json";
import "@testing-library/jest-dom/extend-expect"
import configureMockStore from 'redux-mock-store'
import * as actions from "./modules/post/postAction";
import * as redux from 'react-redux'
import {READ_POST_REQUEST} from "./modules/post/postTypes";
import axios from "axios";
import * as api from "./modules/post/postApi";

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
jest.mock('axios')
describe('enzyme saga test', () => {
    let spyOnUseSelector;
    let spyOnUseDispatch;
    let mockDispatch;
    beforeEach(() => {
        store = mockStore({
            post: {
                list: [
                    {"userId": 11, "id": 11, "title": 'hello', "body": 'world'}
                ]
            }
        })
        configure({ adapter: new Adapter() });
    })
    afterEach(() => {
        jest.restoreAllMocks();
    });
    it('should match snapshot', () => {
        // const wrapper = render(<Provider store={store}><Posts/></Provider>)
        // expect(await screen.findByText('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')).toBeInTheDocument()

        // Mock useSelector hook
        spyOnUseSelector = jest.spyOn(redux, 'useSelector');
        // // Mock useDispatch hook
        spyOnUseDispatch = jest.spyOn(redux, 'useDispatch');
        // Mock dispatch function returned from useDispatch
        mockDispatch = jest.fn();

        spyOnUseSelector.mockImplementation((selectorFn) => selectorFn({
            post:{ list: [{userId: 2, id: 2, title: '2', body: '22'}]}
        }));
        spyOnUseDispatch.mockReturnValue(mockDispatch);
        const { wrapper } = setup2(Posts)
        expect(toJson(wrapper)).toMatchSnapshot()
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

    it('should spy on useSelector and useDispatch', () => {
        // Mock useSelector hook
        spyOnUseSelector = jest.spyOn(redux, 'useSelector');
        spyOnUseSelector.mockReturnValue({
            post: {
                list: [
                    {"userId": 11, "id": 11, "title": 'hello', "body": 'world'}
                ]
            }
        });
        //
        // // Mock useDispatch hook
        spyOnUseDispatch = jest.spyOn(redux, 'useDispatch');
        // Mock dispatch function returned from useDispatch
        mockDispatch = jest.fn();
        spyOnUseDispatch.mockReturnValue(mockDispatch);
        const { wrapper } = setup2(Posts)

        expect(spyOnUseSelector).toBeCalledTimes(1);
        expect(spyOnUseDispatch).toBeCalledTimes(1);
        actions.readPostRequest(mockDispatch)
        expect(mockDispatch.mock.calls.length).toBe(1)
        expect(mockDispatch.mock.calls[0][0]).toEqual({
            type: READ_POST_REQUEST,
            value: undefined
        })
        console.log('...................mockDispatch.mock.calls:', mockDispatch.mock.calls)
        console.log('...................store.getActions():', store.getActions())
    })

    it("should return", async () => {
        const spyOnGetList = jest.spyOn(api, "getList");
        spyOnGetList.mockReturnValue({
            data: [
                {
                    userId: 1,
                    id: 1,
                    title: 'My First Album'
                },
                {
                    userId: 1,
                    id: 2,
                    title: 'Album: The Sequel'
                }
            ]
        })
        // axios.get.mockResolvedValue({
        //     data: [
        //         {
        //             userId: 1,
        //             id: 1,
        //             title: 'My First Album'
        //         },
        //         {
        //             userId: 1,
        //             id: 2,
        //             title: 'Album: The Sequel'
        //         }
        //     ]
        // });
        const list = await api.getList();
        console.log('list....:', list);
        /*
        const user = {
      login: 'user 1',
      password: 'password'
    };
    const dispatch = jest.fn();
    await actions.signInUser(user)(dispatch);  // <= call the function on a user, then call the resulting function on a dispatch
    expect(dispatch).toHaveBeenCalledTimes(2);  // Success!
    expect(dispatch).toHaveBeenNthCalledWith(1, { type: START_SIGNIN_REQUEST });  // Success!
    expect(dispatch).toHaveBeenNthCalledWith(2, { type: SIGNIN_USER_SUCCEEDED, user: 'the username' });  // Success!
         */
    })

    it("should spy", async () => {
        // Mock useSelector hook
        spyOnUseSelector = jest.spyOn(redux, 'useSelector');
        // // Mock useDispatch hook
        spyOnUseDispatch = jest.spyOn(redux, 'useDispatch');
        // Mock dispatch function returned from useDispatch
        mockDispatch = jest.fn();

        spyOnUseSelector.mockImplementation((selectorFn) => selectorFn({
            post:{ list: [{userId: 2, id: 2, title: '2', body: '22'}]}
        }));
        spyOnUseDispatch.mockReturnValue(mockDispatch);
        const { wrapper } = setup2(Posts)
        expect(mockDispatch).toHaveBeenCalledWith({
            'payload': undefined,
            'type': 'post/READ_POST_REQUEST',
        });

        console.log('wrapper::::', toJson(wrapper));
    })
})