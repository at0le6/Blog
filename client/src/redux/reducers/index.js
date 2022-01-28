import { combineReducers } from 'redux';
import { blogReducer, selectedBlogReducer } from './blogs.reduser';

const reducer = combineReducers({
    Allposts: blogReducer,
    post: selectedBlogReducer,
})
export default reducer;