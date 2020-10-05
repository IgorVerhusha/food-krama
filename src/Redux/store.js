import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {items} from "./items";
import {filters} from "./filters";
import thunk from "redux-thunk";
import {cart} from "./cart";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const rootReducer = combineReducers({
    items,
    filters,
    cart
})

export const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))
window.store = store