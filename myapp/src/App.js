import ClassApp from "./ClassApp"
import FunctionApp from './FunctionApp'
import ClassEventApp from "./ClassEventApp";
import FunctionEventApp from "./FunctionEventApp";
const App = () => {
    return(
        <>
            <div>
                클래스형 컴포넌트
            </div>
            <ClassApp />
            <hr/>
            <div>
                함수형 컴포넌트
            </div>
            <FunctionApp />
            <hr/>
            <div>클래스 이벤트</div>
            <ClassEventApp />
            <hr/>
            <div>함수 이벤트</div>
            <FunctionEventApp/>
        </>
    )
}
export default App