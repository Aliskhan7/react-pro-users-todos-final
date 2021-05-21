import reducer from "./reducer";
import thunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import {createLogger} from "redux-logger";

const logger = createLogger({
    diff: true,
    collapsed: true
})

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;