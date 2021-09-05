import React from 'react'

export default class HookExample4 extends React.Component{
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

    //최초 렌더 직후
    componentDidMount(){
        console.log('componentDidMount' , this.state.count);
    }

    //컴포넌트 업데이트 직후
    componentDidUpdate(){
        console.log('componentDidUpdate' , this.state.count);
    }



    click = () =>{
        this.setState({count: this.state.count + 1});
    }

}