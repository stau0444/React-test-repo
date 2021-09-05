import React from 'react'

//useState => {count:0}으로 사용

export default function HookExample3() {

    const [state , setState] = React.useState({ count : 0 });

    return(
        <div>
            <p>clicked {state.count} times</p>
            <button onClick={click}>Click</button>
        </div>
    );

    //click이 호출되면 state인 count가 변경되어 
    //re render가 일어난다.
    //아래의 방식은 setState에 함수를 전달하고 이전 state값을 함수에서 관리하기 때문에
    //useState로 지정된 state 값에 의존적이지 않게된다.

    function click() {
        setState((state) => ({count :state.count +1}));
    }
}