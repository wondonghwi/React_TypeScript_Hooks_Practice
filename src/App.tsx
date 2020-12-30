import React from 'react';
import Greetings from './Greetings';
import Counter from "./Counter";

const App = () => {
    const onClick = (name: string) => {
        console.log(`${name} says hello`);
    };
    return (
        <>
            <Greetings name="Donghwi" onClick={onClick}/>
            <hr/>
            <Counter/>
            <hr/>
        </>
    )
};

export default App;

