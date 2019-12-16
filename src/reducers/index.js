import { combineReducers } from 'redux';
import postReducer from './postReducer';
import albumsReducer from './albumsReducer';

export default combineReducers({
    posts: postReducer,
    albums: albumsReducer
});