import { useRef, useState } from "react";

export default function SignUpForm() {

    const usernameInput = useRef();
    const emailInput = useRef();
    const [userInfo , setUserInfo] = useState({
        username:'',
        email:'',
    });

    const onReset = () => {
         setUserInfo({
            username:'',
            email:'',
        });
        emailInput.current.focus();
    };

    const onChange = (e) => {
        const {value,name} = e.target;
        setUserInfo({
            ...userInfo, 
            [name]: value 
        });
        
   };

    const onSubmit = () => {
        console.log(userInfo);
    };
    return(
        <div>
            <input ref={usernameInput} name="username" onChange={onChange} placeholder="이름" value={userInfo.username} />
            <input ref={emailInput} name="email" onChange={onChange} placeholder="이메일" value={userInfo.email}/>
            <button onClick={onSubmit}>전송</button>
            <button onClick={onReset}>초기화</button>
        </div>
    );
}