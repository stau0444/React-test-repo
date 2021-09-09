import { useReducer } from "react";

//reducer => state를 변경하는 로직이 담겨있는 함수
//state는 이전 상태값 , action은 state안에 조작하려는 객체를 의미
const reducer = (state ,action) => {
    if(action.type === 'PLUS'){
        return ({count : state.count +1 });
    }
    if(action.type === 'MINUS'){
        return ({count : state.count - 1 });
    }
    return state;
}
//dispatch => action 객체를 넣어서 실행

//actiom => 객체이고 필수 프로퍼티로 type을 갖는다.

export default function Example6() {
    
    const [state , dispatch ] = useReducer(reducer , {count : 0})
    
    return (
      <div>
        <p>clicked {state.count} times</p>
        <button onClick={clickP}>ClickP</button>
        <button onClick={clickM}>ClickM</button>
      </div>
    );

    function clickP(){
        dispatch({type:'PLUS'});
    }

    function clickM(){
        dispatch({type:'MINUS'});
    }
}