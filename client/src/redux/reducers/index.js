import { combineReducers } from 'redux';
import { blogReducer, selectedBlogReducer, logInReducer } from './blogs.reduser';

const reducer = combineReducers({
    Allposts: blogReducer,
    post: selectedBlogReducer,
    Log: logInReducer,
})
export default reducer;