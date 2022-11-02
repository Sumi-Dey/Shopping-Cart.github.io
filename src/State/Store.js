import { legacy_createStore as createStore } from 'redux';
import { applyMiddleware } from "redux";
import reducers from './Reducers/Index';
import thunk from "redux-thunk";


export const store = createStore(reducers,{},applyMiddleware(thunk))