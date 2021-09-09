import {useState} from 'react';

export default function Counter() {
    const [num , setNum] = useState(0);

    return(
        <div>
            <p>{num}</p>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
        </div>
    );

    function plus(){
        setNum(prev=>prev+1);
    }
    function minus(){
        setNum(prev=>prev-1);
    }
}