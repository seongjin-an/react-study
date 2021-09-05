import ClassApp from "./ClassApp"
import FunctionApp from './FunctionApp'
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
        </>
    )
}
export default App