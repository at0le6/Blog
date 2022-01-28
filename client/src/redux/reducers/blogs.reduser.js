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
        case ActionTypes.SELECTED_PRODUCTS:
            return {...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_PRODUCTS:
            return {};
        default:
            return state;
    }
}