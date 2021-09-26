/*
    Ducks 패턴 규칙
    - 액션 타입과 액션 생성함수, 리듀서를 하나의 모듈로 관리한다.
    - 액션타입에는 namespace를 명시한다. 프로젝트명 / 리듀서명 / 액션명 
    - 모듈에서 export default 하는 리듀서의 이름은 reducer로 통일한다.

    //장점
    -같은 관심사의 코드들이 한군데 모여 있기 때문에 유지보수에 용이하다.
*/


//action 타입 정의
const SHOW_ALL = 'redux-test/filter/SHOW_ALL';
const SHOW_COMPLETE = 'redux-test/filter/SHOW_COMPLETE';


//액션 생성 함수
export function showAll(){
    return{type: SHOW_ALL };
}
export function showComplete(){
    return{type: SHOW_COMPLETE };
}

//초기값
const initialState = 'ALL';

//reducer
export default function reducer(prevState = initialState, action){
    
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