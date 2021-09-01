import {withRouter} from 'react-router-dom'
//withRouter 하위 컴포넌트에서 
//라우터가 연결된 최상위 컴포넌트의 props(history,location,match..)를 사용하고싶다면
export default withRouter(function LoginButton(props) {
    console.log(props);
    function login() {
        setTimeout(()=>{
            props.history.push('/');
            alert("로그인성공");
        },1000);
    }
    return(
        <button onClick={login}>로그인</button>
    );
});