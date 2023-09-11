import React from 'react';
import ReactDOM from 'react-dom'; // исправлено на правильный импорт

import App from './App';
import { createStore } from "redux";
import { Provider } from "react-redux";

const defaultState = {
    cash: 0,
}

//action = {type: "", payload: ""}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_CASH":
            return { ...state, cash: state.cash + action.payload }
        case "GET_CASH":
            return { ...state, cash: state.cash - action.payload }
        default:
            return state
    }
}

const store = createStore(reducer);

ReactDOM.render(  // исправлено на правильный вызов
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
