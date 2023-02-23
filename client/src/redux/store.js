import rootReducer from "./reducer";
import {  createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import thunk from 'redux-thunk';

// composeEnhacer hace que funcione reduxDevTools y que funcionen con el middleware las funciones asíncronas.

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhacer(applyMiddleware(thunkMiddleware,thunk))
    );

export default store; 