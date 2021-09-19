import {ColorProvider} from "./contexts/Color";
import ColorBox from "./components/ColorBox";
import SelectColors from "./components/SelectColors";
import SelectColorsClass from "./components/SelectColorsClass";

const App = () => {
    return(
        <ColorProvider>
                <SelectColorsClass/>
                <ColorBox/>
        </ColorProvider>
    )
}
export default App