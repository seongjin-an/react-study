import ContextBox from "./components/ContextBox";
import ColorContext, {ColorProvider} from "./contexts/context";
import SelectContext from "./components/SelectContext";
const App = () => {
  return(
      <ColorProvider>
          <div>
              <SelectContext/>
              <ContextBox/>
          </div>
      </ColorProvider>
  )
}
export default App