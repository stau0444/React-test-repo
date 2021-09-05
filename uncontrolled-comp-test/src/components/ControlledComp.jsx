//상태를 컴포넌트가 관리하며 
//상태는 컴포넌트 내부에 존재한다.
//컴포넌트안의 상태와 연결된 DOM의 상태가 sync를 유지한다.

import React from 'react';

class ControlledComp extends React.Component{
    state = {
        value:"",
    }

    render(){
        const {value} = this.state;
        return(
            <div>
                <input value={value} onChange={this.change} />
            </div>
        );
    }  
    
    change = (e) => {
        console.log(e.target.value);

        this.setState(
            {
                value:e.target.value
            }
        );
    }
}

export default ControlledComp;