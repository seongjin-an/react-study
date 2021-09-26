import React from "react";
import './Hello.css'
const MyApp = ({age}) => {
    return(
        <div className='myApp'>
            hello halo {age}
            <ul>
                <li>
                    <label>이름: <input/></label>
                </li>
                <li>
                    <label>나이: <input/></label>
                </li>
            </ul>
        </div>
    )
}
export default MyApp