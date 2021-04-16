import React from 'react';
import MyComponent from "./components/MyComponent";
import SomeComponent from "./components/MyClassComponent";
import Counter from "./components/Counter";

function App() {
    return <>
        <MyComponent name={'성진'}/>
        <SomeComponent name={'aa'}  favoriteNumber={10}/>
        <Counter num={0}/>
    </>
}

export default App;
