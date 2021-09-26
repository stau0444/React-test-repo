//액션 타입 
const ADD_TODO = 'redux-test/todos/ADD_TODO';
const COMPLETE_TODO = 'redux-test/todos/COMPLETE_TODO';

//액션 생성자
//{type : ADD_TODO , text : 'todo'}
export function addTodo(text){
    return {
        type:ADD_TODO,
        text,
    };
}

export function completeTodo(index){
    return {
        type:COMPLETE_TODO,
        index
    }
}

//초기값
const initialState =[];

//todos 관련 reducer
export default function reducer(prevState = initialState , action){
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
