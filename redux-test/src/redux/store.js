import { createStore } from 'redux';
import todoApp from './modules/reducer';


//thunk의 agrs 로 사용
const store  = createStore(
    todoApp,
    );
export default store;