import { ADD_TODO , COMPLETE_TODO } from '../actions';

const initialState =[];

//todos 관련 reducer
export default function todos(prevState = initialState , action){
    //ADD_TODO 타입일 경우의 로직
    if(action.type === ADD_TODO){
        return [...prevState , {text : action.text , done: false}];
    }

    if(action.type === COMPLETE_TODO){
        return  prevState.map((todo , index) => {
            if(index === action.index){
                return {...todo , done: true };
            }
            return todo;
        });
    }
    return prevState;
}
