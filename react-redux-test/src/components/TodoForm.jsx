import { useRef } from "react";

export default function TodoForm({add}) {
    const inputRef = useRef();
    const click = () => {
        add(inputRef.current.value);
    }

    return(
        <div>
            <input ref = {inputRef} type="text" />
            <button onClick ={ click }>추가</button>
        </div>
    );

}