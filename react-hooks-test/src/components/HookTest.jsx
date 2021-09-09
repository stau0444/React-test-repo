import React from 'react'

export default function HookTest(){
    const [state , setState ] = React.useState({count:0});

    console.log('1',state)
    
    function click(){
        console.log('2',state)
        setState((state)=>{
            console.log('3',state)
            return ({count:state.count + 1})
        })
    }

    function pushAlert(){
        setTimeout(()=>{
            alert(`you clicked ${state.count} times !`)
        },3000)
    }

    return(
        <div>
            <p>you clicked {state.count} time ! </p>
            <button onClick={click}>click!</button>
            <button onClick={pushAlert}>alert!</button>
        </div>
    )
}