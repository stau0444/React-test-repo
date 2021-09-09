import {useState} from 'react';

export default function Input() {
    
    const [text , setText] = useState('');

    const change = (e) => {
        setText(e.target.value);
    };
    
    const reset = () => {
        setText('');
    };
    
    return(
        <div>
            <p>{text}</p>
            <input onChange={change} value={text}/>
            <button onClick={reset}>리셋</button>
        </div>
    );
}