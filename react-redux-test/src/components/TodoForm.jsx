import { useRef } from "react";

export default function TodoForm({add}) {
    const todoInputRef = useRef();
    const click = () => {
        add(todoInputRef.current.value);
    }

    return(
        <div>
            <input ref = {todoInputRef} type="text" />
            <button onClick ={ click }>추가</button>
        </div>
    );

}