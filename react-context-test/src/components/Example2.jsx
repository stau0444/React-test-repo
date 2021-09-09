import React from 'react'
import PersonContext from '../contexts/PersonContext';

export default class Example2 extends React.Component{
    //static 변수에 context를 담아서 사용하고 있다.
    static contextType = PersonContext;
    
    render(){
        const persons = this.context;
        return(
            <ul>
                {persons.map((p) => (
                    <li>{p.name}</li>
                ))}
            </ul>
        )
    }
}