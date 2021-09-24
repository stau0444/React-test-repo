import { useRef } from 'react';

//presentational Component
//리덕스 관련 코드는 없고 화면 태그만 가지고 있는 컴포넌트이다
//컨테이너에서 props로 

export default function TodoForm({add}) {
    const inputRef  = useRef();
    return(
        <div><input ref={inputRef} /> <button onClick = {click}> 추가 </button></div>
    );

    function click(e){
        console.log(e);
        add(inputRef.current.value);
    }
}




