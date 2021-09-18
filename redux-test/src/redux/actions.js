
//액션 타입 
export const ADD_TODO = 'ADD_TODO';

//액션 생성자
function addTodo(todo){
    return {
        type:ADD_TODO,
        todo: todo
    };
}

