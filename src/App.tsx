import React from 'react';
import MyComponent from "./components/MyComponent";
import SomeComponent from "./components/MyClassComponent";

function App() {
    return <>
        <MyComponent name={'성진'}/>
        <SomeComponent name={'aa'}  favoriteNumber={10}/>
    </>
}

export default App;
