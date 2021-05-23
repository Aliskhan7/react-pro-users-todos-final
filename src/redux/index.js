import thunk from "redux-thunk";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {createLogger} from "redux-logger";
import alboms from "./alboms";
import users from "./users";

const logger = createLogger({
    diff: true,
    collapsed: true
});

const rootReducers = combineReducers({
    users: users,
    alboms: alboms
})

const store = createStore(rootReducers, applyMiddleware(thunk, logger));

export default store;