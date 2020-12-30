import React, { useReducer, useState } from 'react';

//Todo -> useReducer

type Action = { type: 'INCREASE' } | { type: 'DECREASE' } //Action을 |(OR) 로 연결

const reducer = (state: number, action: Action): number => {
    // 리듀서를 만들 땐 이렇게 파라미터로 받아오는 상태의 타입과 함수가 리턴하는 타입을 동일하게(number) 하는 것이 매우 중요.
    switch (action.type) {
        case 'INCREASE':
            return state + 1;
        case 'DECREASE':
            return state - 1;
        default:
            throw new Error('Unhandled action');
    }
}

const Counter = () => {

    //Todo -> useReducer

    const [count, dispatch] = useReducer(reducer, 0);
    const onIncrease = () => dispatch({type: 'INCREASE'});
    const onDecrease = () => dispatch({type: 'DECREASE'});

    //Todo -> useState

    // const [count, setCount] = useState(0);
    // const onIncrease = () => setCount(count + 1);
    // const onDecrease = () => setCount(count - 1);
    //
    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    );
};

export default Counter;
