import { combineReducers } from 'redux';
import filter from './filter';
import todos from './todos';
import books from './books';

const mainReducer = combineReducers(
    {
     books,
     todos,
     filter,
    }
)

export default mainReducer;