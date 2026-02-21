import { combineReducers } from "redux";
import { commentsReducer } from "./comments";
import { authReducer } from "./auth";

export const rootReducer = combineReducers({
    comments: commentsReducer,
    auth: authReducer
});