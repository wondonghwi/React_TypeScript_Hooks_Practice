import React from 'react';
import Greetings from './Greetings';
import Counter from "./Counter";
import MyForm from "./MyForm";

const App = () => {
    const onClick = (name: string) => {
        console.log(`${name} says hello`);
    };

    const onSubmit = (form: { name: string; description: string }) => {
        console.log(form)
    }

    return (
        <>
            <Greetings name="Donghwi" onClick={onClick}/>
            <hr/>
            <Counter/>
            <hr/>
            <MyForm onSubmit={onSubmit}/>
            <hr/>
        </>
    )
};

export default App;

