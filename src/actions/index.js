import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from "./types";
import axios from "axios";

export const saveComment = (comment) => {
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
}

export const fetchComments = () => {
    return {
        type: FETCH_COMMENTS,
        payload: axios.get('http://jsonplaceholder.typicode.com/comments')
    }
}

export const changeAuth = (isLoggedIn) => {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    }
};