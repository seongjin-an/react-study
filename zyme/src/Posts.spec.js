import {configure, mount} from "enzyme";
import {Provider} from "react-redux";
import {createStore} from "./modules";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Posts from "./Posts";
import toJson from "enzyme-to-json";

let store
const setup = (WrappedComponent, props={}) => {
    const wrapper = mount(
        <Provider store={store}>
            <WrappedComponent {...props}/>
        </Provider>
    )
    return {wrapper}
}
describe('enzyme saga test', () => {
    beforeEach(() => {
        store = createStore()
        configure({ adapter: new Adapter() });
    })
    it('should match snapshot', () => {
        const { wrapper } = setup(Posts)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})