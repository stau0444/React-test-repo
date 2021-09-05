import React from 'react';

//function Component
//React.useEffect()를 활용하여 라이프 사이클 hook 처럼 사용하기
//useEffect는 의존 dependency의 상태에 따라 값이 바뀌기 때문에 
//라이프 사이클 hook과 동일하다 할 수는 없다.
//componentDidMount,componentDidUpdate,componentWillUnmount
//세가지 라이프사이클 훅처럼 동작할 수 있다.
export default function HookExample2() {

    const [count , setCount] = React.useState(0);


    // //useEffect는 componentDidMount 시점과 componentDidUpdate시점에 모두 실행된다
    // //useEffect의 2번째 인수로는 useEffect를 시정할 수 있다.
    // //두번째 인수가 없으면 render(re-render포함)시에 항상 useEffect가 실행되며
    // //두번째 인수로 [](빈 배열)를 주면 최초에 render시(componentDidMount)에만 함수가 실행된다
    // //배열안에 디펜던시 (의존하는 상태값 )를 주고 
    // //해당 디펜던시에 상태가 변경되었을 시에 useEffect가 실행되도록 할 수 있다.
    // React.useEffect(()=>{
    //     console.log('componentDidMount & componentDidUpdate by count',count)
    // },[count]);

    // //useEffect는 여러개를 사용할 수 있다.
    // React.useEffect(()=>{
    //     console.log('componentDidMount & componentDidUpdate',count)
    // },[]);

    // //useEffect의 첫번째 인자인 함수는 return을 해줄 수 있는데
    // //해당 부분을 cleanUp이라 한다.
    // React.useEffect(()=>{
    //     //이 부분은 render가 된 직후를 의미한다.
    //     console.log('componentDidMount & componentDidUpdate',count)
    //     //리턴되는 함수는 다시 render가 일어날 때 호출 되는데
    //     //아래와 같이 useEffect의 두번재 인자가 빈배열 일 경우 
    //     //최초에만 useEffect가 실행되고 다음으론 컴포넌트가 사라질 호출되기때문에 
    //     //componentWillUnmount과 같은 시점에 해당 함수가 실행된다.
    //     return()=>{
    //         //cleanUp
    //     };
    // },[]);

    //useEffect는 여러개를 사용할 수 있다.
    React.useEffect(()=>{
        console.log('componentDidMount & componentDidUpdate',count)
        return ()=>{
            console.log('cleanup by count',count);
        }
    },[count]);

    return(
        <div>
            <p>clicked {count} times</p>
            <button onClick={click}>Click</button>
        </div>
    );

    function click() {
        setCount(count +1);
    }
}