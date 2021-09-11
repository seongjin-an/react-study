import {useState} from "react";

const EventFunctionHandle = (event) =>{

    const [example, setExample] = useState({a:'alph', b:'go'})
    const handleChange = (event) => {
        //prev => ({...prev, b:'gggg'})
        setExample({aaa: event.target.value})
        console.log(example)
    }
    return(
        <div >
            <button onClick={handleChange}>hello</button>
        </div>
    )
}
export default EventFunctionHandle