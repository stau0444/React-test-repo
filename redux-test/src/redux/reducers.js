//state 
//['가' , '나' , '다'];
import { ADD_TODO } from './actions';

const initialState = [1,2,3];

//리듀서 함수 생성

export function todoApp(prevState = initialState, action){
    // 초기값 설정 해주는 부분
    // if(prevState === undefined ){
    //     return [];
    // }

    //ADD_TODO 타입일 경우의 로직
    if(action.type === ADD_TODO){
        return[...prevState , action.todo];
    }

    //immutable 하지 않은 코드
    //prevState.push(''); 

    return prevState;
}