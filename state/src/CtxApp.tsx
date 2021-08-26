import Ctx from "./contexts/ctx";
import CtxBox from "./components/CtxBox";

const CtxApp = () => {
    return(
        <Ctx.Provider value={{color: 'red'}}>
            <div>
                <CtxBox/>
            </div>
        </Ctx.Provider>
    )
}