import { createStore } from 'redux';
import mainReducer from './modules/reducer';

const store = createStore(
    mainReducer
)

export default store;
