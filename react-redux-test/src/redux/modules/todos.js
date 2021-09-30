const ADD_TODO = "react-redux-test/filter/ADD_TODO";
const COMPLETE_TODO = "react-redux-test/filter/COMPLETE_TODO";

export function addTodo(text) {
    return{
        type: ADD_TODO,
        text,
    }    
}

export function completeTodo(index) {
    return{
        type: COMPLETE_TODO,
        index
    }   
}

const initialState = [];

export default function reducer(prevstate = initialState , action) {
    if(action.type === ADD_TODO){
        console.log('addtodo')
        return [...prevstate, {text:action.text , done:false}]
    }

    if(action.type === COMPLETE_TODO){
        return prevstate.map((todo , index ) => {
            if(index === action.index && todo.done === false){
                return {...todo , done:true}
            }
            if(index === action.index && todo.done === true){
                return {...todo , done:false}
            }
            return todo;
        })
    }
    

    return prevstate;
}