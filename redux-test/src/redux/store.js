import { applyMiddleware, createStore } from 'redux';
import todoApp from './modules/reducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools'
import history from '../history';


//thunk의 agrs 로 사용
const store  = createStore(
    todoApp,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument({history}))
        )
    );
export default store;