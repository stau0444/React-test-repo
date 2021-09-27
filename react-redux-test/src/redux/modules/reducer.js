import { combineReducers } from 'redux';
import filter from './filter';
import todos from './todos';

const mainReducer = combineReducers(
    {
     todos,
     filter,
    }
)

export default mainReducer;