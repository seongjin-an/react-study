import Scrollbar from "react-scrollbars-custom";
import {useRef} from "react";
const Scroll = () => {
    const scrollbarRef = useRef(null)

    return<div>
        <Scrollbar ref={scrollbarRef} />
    </div>
}
export default Scroll