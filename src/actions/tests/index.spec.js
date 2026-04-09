import { saveComment } from '../index';
import { SAVE_COMMENT } from '../types';

test('has the correct type', () => {
    const action = saveComment('Test Comment');
    expect(action.type).toEqual(SAVE_COMMENT);
});

test('has the correct payload', () => {
    const action = saveComment('Test Comment');
    expect(action.payload).toEqual('Test Comment');
});