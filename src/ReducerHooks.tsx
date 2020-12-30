import React, { useReducer } from 'react';

type Color = 'red' | 'orange' | 'yellow';

type State = {
    count: number,
    text: string,
    color: Color,
    isGood: boolean;
};

type Action = { type: 'SET_COUNT'; count: number }
    | { type: 'SET_TEXT'; text: string; }
    | { type: 'SET_COLOR'; color: Color; }
    | { type: 'TOGGLE_GOOD'; }

const reducer = (state: State, action: Action): State => {
    // 리듀서를 만들 땐 이렇게 파라미터로 받아오는 상태의 타입과 함수가 리턴하는 타입을 동일하게(State) 하는 것이 매우 중요.
    switch (action.type) {
        case "SET_COUNT":
            return {
                ...state,
                count: action.count
            };
        case "SET_TEXT":
            return {
                ...state,
                text: action.text
            };
        case "SET_COLOR":
            return {
                ...state,
                color: action.color
            };
        case 'TOGGLE_GOOD':
            return {
                ...state,
                isGood: !state.isGood
            }
        default:
            return state;
    }
}

const ReducerHooks = () => {

    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        text: 'hello',
        color: 'red',
        isGood: true
    });

    const setCount = () => dispatch({type: 'SET_COUNT', count: state.count + 1}); // count 를 넣지 않으면 에러발생
    const setText = () => dispatch({type: 'SET_TEXT', text: 'bye'}); // text 를 넣지 않으면 에러 발생
    const setColor = () => dispatch({type: 'SET_COLOR', color: 'orange'}); // orange 를 넣지 않으면 에러 발생
    const toggleGood = () => dispatch({type: 'TOGGLE_GOOD'});

    return (
        <div>
            <p>
                <code>count: </code> {state.count}
            </p>
            <p>
                <code>text: </code> {state.text}
            </p>
            <p>
                <code>color: </code> {state.color}
            </p>
            <p>
                <code>isGood: </code> {state.isGood ? 'true' : 'false'}
            </p>
            <div>
                <button onClick={setCount}>SET_COUNT</button>
                <button onClick={setText}>SET_TEXT</button>
                <button onClick={setColor}>SET_COLOR</button>
                <button onClick={toggleGood}>TOGGLE_GOOD</button>
            </div>
        </div>
    );
};

export default ReducerHooks;
