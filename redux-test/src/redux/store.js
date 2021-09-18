import { createStore } from 'redux';
import { todoApp } from './reducers';


const store  = createStore(todoApp,[1,2,3]);

export default store;