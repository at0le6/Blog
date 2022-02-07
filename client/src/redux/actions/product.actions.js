import { ActionTypes } from '../constants/actions.types';
export const setBlogs = (blogs) => {
    return {
        type: ActionTypes.SET_BLOGS,
        payload: blogs,
    }
}
export const setListBlogs = (blogs) => {
    return {
        type: ActionTypes.SET_LISTING_BLOGS,
        payload: blogs,
    }
}
export const RemovesetListBlogs = () => {
    return {
        type: ActionTypes.SET_LISTING_BLOGS,
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
export const login = () => {
    return {
        type: ActionTypes.IS_LOG_IN,
    }
}