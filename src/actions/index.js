import { SAVE_COMMENT } from "./types";
import { FETCH_COMMENTS } from "./types";
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
        payload: axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .catch(error => console.log(error))
    }
}