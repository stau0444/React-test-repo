import React from 'react'

 class HookExample extends React.Component{
    state = {count : 0};

    render(){
        const {count} = this.state;
        return(
            <div>
                <p>clicked {count} times</p>
                <button onClick={this.click}>Click</button>
            </div>
        );
    }

    click = () =>{
        this.setState({count: this.state.count + 1});
    }
}

//function Component
export default function HookExample2() {

    //function Component에서는 useState()로 state를 설정할 수 있다
    //useState()의 첫번째 인자로 초기값이 들어가고
    //React.useState(); 은 배열을 리턴하는데 첫번째 원소는 상태값 , 
    //두번째 원소는 상태값을 바꾸는 함수가 들어 있다.
    const [count , setCount] = React.useState(0);

    return(
        <div>
            <p>clicked {count} times</p>
            <button onClick={click}>Click</button>
        </div>
    );

    //click이 호출되면 state인 count가 변경되어 
    //re render가 일어난다.
    function click() {
        setCount(count +1);
    }
}