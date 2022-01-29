import { ActionTypes } from '../constants/actions.types';
export const setBlogs = (blogs) => {
    return {
        type: ActionTypes.SET_BLOGS,
        payload: blogs,
    }
}
export const selectedBlogs = (blog) => {
    return {
        type: ActionTypes.SELECTED_BLOG,
        payload: blog,
    }
}
export const removeSelectedBlogs = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_BLOG,
    }
}