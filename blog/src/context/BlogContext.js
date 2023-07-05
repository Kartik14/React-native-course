import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'get_blogposts':
            return action.payload;
        case 'edit_blogpost':
            return state.map(blogpost => 
                blogpost.id === action.payload.id
                ? action.payload
                : blogpost
            );
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload)
        default:
            return state;
    }
}

const getBlogPosts = (dispatch) => {
    return async () => {
        try {
            const response = await jsonServer.get('/blogposts');
            dispatch({type: 'get_blogposts', payload: response.data});
        }
        catch (error) {
            console.log(`Could not fetch data: ${error}`);
        }
        
    }
}

const addBlogPosts = (dispatch) => {
    return async (title, content, callback) => {
        try {
            const response = await jsonServer.post('/blogposts', {title, content});
            if (callback) {
                callback();
            }
        }
        catch (error) {
            console.log(`Unable to post data: ${error}`);
        }
    };
}

const deleteBlogPosts = (dispatch) => {
    return async (id) => { 
        await jsonServer.delete(`/blogposts/${id}`);
        dispatch({ type: 'delete_blogpost', payload: id });
    }
}

const editBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`, {title, content});
        dispatch({ type: 'edit_blogpost', payload: {id, title, content}});
        if (callback) {
            callback();
        }
    }
}
export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPosts, deleteBlogPosts, editBlogPost, getBlogPosts },
    []
);


