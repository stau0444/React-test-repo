
//액션 타입 
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETE = 'SHOW_COMPLETE';
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

export function showAll(){
    return{type: SHOW_ALL };
}
export function showComplete(){
    return{type: SHOW_COMPLETE };
}


//users
//github api 호출 시작
export const GET_USERS_START = 'GET_USERS_START'; 

//github api 호출 SUCCESS
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'; 

//github api 호출 FAIL
export const GET_USERS_FAIL = 'GET_USERS_FAIL'; 

export function getUsersStart(){
    return {
        type:GET_USERS_START
    };
}

//성공시 데이터를 가져온다
export function getUsersSucess(data){
    return {
        type:GET_USERS_SUCCESS,
        data,
    };
}

//실패시 error를 가져온다.
export function getUsersFail(error){
    return {
        type:GET_USERS_FAIL,
        error
    };
}





