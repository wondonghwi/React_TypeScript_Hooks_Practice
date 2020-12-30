import React from 'react';
import Greetings from './Greetings';
import MyForm from "./MyForm";
import ReducerHooks from "./ReducerHooks";

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
            <ReducerHooks/>
            <hr/>
            <MyForm onSubmit={onSubmit}/>
            <hr/>
        </>
    )
};

export default App;

