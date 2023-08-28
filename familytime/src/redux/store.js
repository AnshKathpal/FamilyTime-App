import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Authentication/reducer"
import {postReducer} from "./PostReducer/reducer"

const rootReducer = combineReducers({
  authReducer,postReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
