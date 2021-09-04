import React from "react";
import styles from './Button.module.css'
import classNames from 'classnames/bind'

//classNames.bind를 사용하면 module.css에서 변환된 값이 바인드된다. 
//style에는 해당 module.css 안에 모든 
//선택자가 {"선택자1":"변환된값","선택자2":"변환된값" ....} 형태로 들어온다.
const cx = classNames.bind(styles);
//cx에는 함수가 담긴다
console.log('cx=',cx)
//cx함수에 파라미터로 선택자 이름을 전달하면
//매칭되는 키값(변환값)이 리턴된다.
//출력값 -> 'Button_button__2Ce79 Button_loading__XEngF'
console.log(cx('button','loading'))

class Button extends React.Component{

    //loading 이라는 상태값을 갖는다.
    state = {
        loading: false
    };
    
    render(){
        //this.state에서 loading을 꺼내온다.
        const {loading} = this.state;
        return (
          <button
            //버튼 클릭시에 startLoading함수가 호출된다.
            onClick={this.startLoading}
            //loading이라는 값이 true 일때 파라미터로 'loading'이 들어간다.
            //파라미터로 들어가는 선택자명에 매칭되는 value가 출력된다
            //출력값->'Button_button__2Ce79 Button_loading__XEngF'
            className={cx('button',{loading})}
            {...this.props}
          />
        );
    }

    startLoading = () => {
        this.setState({
            loading:true
        })
        setTimeout(()=>{
            this.setState({
                loading:false
            })
        },1000)
    }
}

export default Button;