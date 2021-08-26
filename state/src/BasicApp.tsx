import Basic from "./contexts/basic";
import BasicBox from "./components/BasicBox";

const BasicApp = () => {
    return(
        <Basic.Provider value={{color: 'red'}}>
            <div>
                <BasicBox/>
            </div>
        </Basic.Provider>
    )
}