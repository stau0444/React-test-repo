
//하위 컴포넌트 변경

import { useState } from "react";

export default function A() {
    const [value , setValue] = useState('안바뀜')
    //value 값을 props로 내려주고 있다.
    return(
        <div>
            <B value = {value}/>
            <button onClick={click}>E 값을바꾼다.</button>
        </div>
    );
    
    //state 변경이 일어나면서 
    //하위 컴포넌트로는 props의 변경이 연쇄적으로 일어난다.
    function click() {
        setValue('E의 값을 변경');
    }
}

function B({value}) {
    return(
        <div>
            <p>B</p>
            <C value = {value}/>
        </div>
    )
}
function C({value}) {
    return(
        <div>
            <p>C</p>
            <D value = {value}/>
        </div>
    )
}
function D({value}) {
    return(
        <div>
            <p>D</p>
            <E value = {value}/>
        </div>
    )
}
function E({value}) {
    return(
        <div>
            <p>E</p>
            <h3>{value}</h3>
        </div>
    )
}