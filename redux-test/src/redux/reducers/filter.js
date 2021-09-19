
import {SHOW_COMPLETE, SHOW_ALL } from '../actions';
const initialState = 'ALL';

export default function filter(prevState = initialState, action){
    
    if(action.type === SHOW_COMPLETE){
        return {
            filter: 'COMPLETE'
        };
    }

    if(action.type === SHOW_ALL){
        return {
            filter: 'ALL'
        };
    }
    return prevState;
}