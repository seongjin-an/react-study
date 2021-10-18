import React from "react";
import {Store} from "@reduxjs/toolkit";
import {configure, mount} from "enzyme";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {createStore} from "../modules";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import ImsiCompo from "../components/ImsiCompo";
import {act} from "react-dom/test-utils";
import toJson from "enzyme-to-json";

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
describe('imsi', () => {
    beforeEach(async () => {
        store = await createStore();
        configure({ adapter: new Adapter() });
    })
    it('match', () => {
        const {wrapper} = setup(ImsiCompo)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    it('imsi....', async () => {
        act(() => {
            const {wrapper} = setup(ImsiCompo)
            const imsi = wrapper.find('.imsi')
            console.log("imsi:", imsi)
            expect(imsi).toHaveLength(100)
        })



    })
})