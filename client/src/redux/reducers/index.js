import { combineReducers } from 'redux';
import { blogReducer, selectedBlogReducer, logInReducer, listingBlogReducer } from './blogs.reduser';

const reducer = combineReducers({
    Allposts: blogReducer,
    post: selectedBlogReducer,
    Log: logInReducer,
    Listing: listingBlogReducer,
})
export default reducer;