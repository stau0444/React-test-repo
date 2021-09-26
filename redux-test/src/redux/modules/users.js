
//github api 호출 시작
const GET_USERS_START = 'redux-test/users/GET_USERS_START'; 

//github api 호출 SUCCESS
const GET_USERS_SUCCESS = 'redux-test/users/GET_USERS_SUCCESS'; 

//github api 호출 FAIL
const GET_USERS_FAIL = 'redux-test/users/GET_USERS_FAIL'; 

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


const initialState = {
    loading : false,
    data:[],
    error:null
};

export default function reducer(state = initialState , action) {
    if(action.type === GET_USERS_START){
        return{
            ...state ,
            loading : true,
            error:null
        }
    }

    if(action.type === GET_USERS_SUCCESS){
        return{
            ...state ,
            loading : false,
            data:action.data,
        }
    }

    if(action.type === GET_USERS_FAIL){
        return{
            ...state ,
            loading : false,
            error:action.error,
        }
    }
    return state;
}