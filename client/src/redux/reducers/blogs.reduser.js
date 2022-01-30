import { ActionTypes } from '../constants/actions.types';
const initialSate = {
    posts: []
}
export const blogReducer = (state = initialSate, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_BLOGS:
            return {...state, posts: payload };

        default:
            return state;
    }
}
export const selectedBlogReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_BLOG:
            return {...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_BLOG:
            return {};
        default:
            return state;
    }
}
export const logInReducer = (state = false, { type }) => {
    switch (type) {
        case ActionTypes.IS_LOG_IN:
            return !state;
        default:
            return state;
    }
}