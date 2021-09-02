import React from 'react';
import MyComponent from "./components/MyComponent";
import SomeComponent from "./components/MyClassComponent";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";

function App() {
    return <>
        <MyComponent name={'성진'}/>
        <SomeComponent name={'aa'}  favoriteNumber={10}/>
        <Counter num={0}/>
        <Counter2 counter={5}/>
    </>
}

export default App;
