import React from 'react'
import {ColorConsumer} from "../contexts/color";
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const SelectColors = () => {
    return(
        <div>
            <ColorConsumer>
                {({actions}) => (
                    <div style={{display: 'flex'}}>
                        {colors.map(color => (
                            <div key={color} style={{background: color, width: '20px', height: '20px', cursor: 'pointer'}}
                                 onClick={() => actions.setColor(color)}
                                 onContextMenu={event => {
                                     event.preventDefault()
                                     actions.setSubcolor(color)
                                 }}
                            />
                        ))}
                    </div>
                )}
            </ColorConsumer>
            <hr/>
        </div>
    )
}
export default SelectColors