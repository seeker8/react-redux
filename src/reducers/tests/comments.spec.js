import { commentsReducer } from "../comments";
import { SAVE_COMMENT } from "../../actions/types";

test('handles actions of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
    };

    const newState = commentsReducer([], action);
    expect(newState).toEqual(newState)
});

test('handles action with unknown type', () => {
    const newState = commentsReducer([], {type:''});
    expect(newState).toEqual([])
});