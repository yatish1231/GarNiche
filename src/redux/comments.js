import { COMMENTS } from '../shared/comments';
import * as ACTION_TYPES from './ActionTypes'

export const Comments = (state = {
    errMess: null,
    comments: []
}, action) => {

    switch (action.type) {
        case ACTION_TYPES.ADD_COMMENTS:
            return {...state, isLoading: false, errMess: null, comments: action.payload}
        
        case ACTION_TYPES.COMMENTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, comments: []}
        
        case ACTION_TYPES.ADD_COMMENT:
            var comment = action.payload;
            comment.date = new Date().toISOString();
            console.log("Comment: ", comment);
            return {...state, comments: state.comments.concat(comment)};

        default: return state;
    }

}