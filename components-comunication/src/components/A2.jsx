//하위에서 상위 컴포넌트로의 값 변경

import { useState } from 'react';

export default function A() {
    const [value , setValue] = useState("안 바뀜")
    return(
        <div>
            <p>{value}</p>
            <B setValue={setValue}/>
        </div>
    );
}

function B({setValue}) {
    return(
        <div>
            <p>B</p>
            <C setValue={setValue}/>
        </div>
    )
}

function C({setValue}) {
    return(
        <div>
            <p>C</p>
            <D setValue={setValue}/>
        </div>
    )
}

function D({setValue}) {
    return(
        <div>
            <p>D</p>
            <E setValue={setValue}/>
        </div>
    )
}

function E({setValue}) {
    return(
        <div>
            <p>E</p>
            <button onClick={click}>click</button>
        </div>
    )
    function click() {
        setValue('A값 변경')
    }
}