import React from 'react'

export default class HookExample extends React.Component{
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