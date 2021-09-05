//Uncontrolled Component는 Ref라는 api를 사용한다.
import React from 'react'
class UncontrolledComp extends React.Component{
    //아래 선언한 ref는 컴포넌트 생성시 한번 생성된다.
    inputRef = React.createRef();

    render(){
        console.log('initial render', this.inputRef);
        return(
            <div>
                <input ref = {this.inputRef}/>
                <button onClick={this.click}>전송</button>
            </div>
        );
    }

    componentDidMount(){
        console.log('componentDidMount',this.inputRef )
    }

    click = () => {
        //input의 현재 상태값 (value) 를 꺼내 전송
        //virtual DOM을 거치지 않고 DOM에서 직접 값을 꺼내고있다.
        //리액트에서 지양하는 방식이다.
        // const input =document.querySelector('#my-input');
        // console.log(input.value);
        console.log(this.inputRef.current.value)
    }
}

export default UncontrolledComp;