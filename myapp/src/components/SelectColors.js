import ColorContext, {ColorConsumer} from "../contexts/Color";
import {useContext} from "react";

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
const SelectColors = () => {
    const {actions} = useContext(ColorContext)
    return(
        <div>
            <h2>choose color</h2>
            {/*<ColorConsumer>*/}
            {/*    {value =>*/}
                    <div style={{display: 'flex'}}>
                        {colors.map(color=>
                            <div key={color}
                                 style={{background:color, width: '24px', height: '24px', cursor: 'pointer'}}
                                 onClick={() => actions.setColor(color)}
                                 onContextMenu={e=>{
                                     e.preventDefault()
                                     actions.setSubColor(color)
                                 }}
                            />
                        )}
                    </div>
            {/*    }*/}
            {/*</ColorConsumer>*/}
        </div>
    )
}
export default SelectColors