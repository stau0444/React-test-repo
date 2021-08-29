#
## React
#

## 링크
- [React concpet](#React-concept)
- [React 핵심 모듈(React와 ReactDOM)](#React-핵심-모듈)
- [class Component와 function Component](#class-Component와-function-Component)
- [React.CreateElement()](#React.CreateElement())
- [JSX](#JSX)
- [Props 와 State](#Props와-State)
- [Event Handling](#Event-Handling)

<br/>

> 프레임워크 별 비교

종류|angular | react | vue
--|--|--|--
특징|거의 모든기능(인증 , 테스트 등등 ..)이 프레임워크 안에 들어있다|View를 업데이트 하는 것에 초점이 맞춰져 있다.|angular의 특징과 react의 특징을 모두 실현하려한다.
지향|framework지향 | library지향 | 둘다 지향sCode

#

#
### React concept
#

>1.Component based development   
-내장되어 있는 태그들을 조합하여 컴포넌트를 만들고 그 안에 동작(js),스타일(css),문서(html)을    
조합하여 재활용하는 방식을 말한다.

</br>

 
 ```html
//component란?

<!-- HTMLElement -->
<!-- img 태크의 src 속성을 정의해 표현한다 -->
<img src="이미지 주소">
<!-- button의 class 속성을 정의해 button을 표현한다. -->
<button class="클래스 이름">버튼</button>

<!--Component-->
<!-- 컴포넌트는 태그를 정의하고 속성을 설정하여 표현할 수 있는 하나의 구성을 말한다 -->

<컴포넌트이름 name = 'Ugo'>
<컴포넌트이름 prop = {false}>내용</컴포넌트이름>
 ```

 >2.Virtual DOM    
 -DOM에대한 제어를 React에 맡기고 React는 가상의 돔 트리를 사용해서   
 이전과 이후 상태를 비교하여 바뀐 부분(diff)를 찾아내어 Re-render 한다.

</br>


![virtual dom](https://i2.wp.com/programmingwithmosh.com/wp-content/uploads/2018/11/lnrn_0201.png?fit=1173%2C785&ssl=1) 

</br>

 >3.React Client Side Rendering(CSR)   
  React는 javascript로 이루어진 애플리케이션이기 때문에 리액트로 만들어진 웹서비스에   
  접근할때 js 파일이 다운 받아져야지 실행이 가능하다 이루어진다   
  
  -CSR 과정

  1.유저가 ReactApp에 접근시 빈 Html이 먼저 다운 받아지고   
  2.다음으로 Html에 정의된 JS파일을 요청한다.   
  3.브라우저는 다운받은 js 파일(리액트앱)을 실행하고    
  4.리액트 컴포넌트들이 화면에 그려진다   
  5.Page  Viewable Interactable .   

#
### React 핵심 모듈
#

```js
//1. 리액트 컴포넌트 => HTMLElement 연결
import ReactDOM from 'react-dom';

//2. 리액트 컴포넌트 생성
import React from 'react';

//js , jsx 로 만들어진 컴포넌트를 
//HTMLElement에 연결
ReactDOM.render(
    <HelloMsg name = "Ugo"/>
    document.getElementById('hello');
);

//컴포넌트 생성
class HelloMsg extends React.Component{
    render(){
        return(
            <div>
                Hello {this.props.name}
            </div>
        )
    }
}

```

#
### class Component와 function Component
#

>1.컴포넌트 생성 , 사용

```js
//1.class 컴포넌트 정의
//React 컴포넌트로 선언 (React.Compent 상속)
class ClassComponent extends React.Component{
    render(){
        return <div>ClassComponent</div>;
    }
}

//컴포넌트 사용
ReactDOM.render(<ClassComponent/>,document.querySelector('#root'));

//2.function 컴포넌트 정의

//정의1 
function FunctionComponent(){
    //jsx를 리턴해줘야 한다.
    return <div>Hello</div>;
}

//정의2
const FunctionComponent = () => <div>Hello</div>;

//컴포넌트 사용
ReactDOM.render(<FunctionComponent/>,document.querySelector('#root'));
        
```

#
### React.CreateElement()
#

> React에서 요소를 만들어내는 메서드이다 파라미터 첫번째 인자로 리액트 컴포넌트,
두번째로 props, 세번째는 자식으로 넣어줄 요소들이 들어간다.

```js
React.createElement(
    type, //태그 이름 문자열 | 리액트 컴포넌트 자체 | React.Fragment
    [props], //리액트 컴포넌트에 넣을 데이터 객체
    [...children] //자식으로 넣어주는 요소들
)

//1. 태그이름 문자열으로 컴포넌트 생성 
ReactDOM.render(
    React.createElement('h1',null,`태그이름 문자열 타입`),
    document.querySelector('#root')
)

//2.리액트 컴포넌트 타입
const Component = () => <h1>리액트 컴포넌트 타입</h1>;

ReactDOM.render(
    <Component/>,
    document.querySelector('#root')
)

//3.React.Fragment
//특정 요소를 만들어내지 않고 
//원하는 위치에 바로 자식요소를 배열쳐렴 녛고 싶을 때 
//Fragment를 사용한다.
ReactDOM.render(
    React.createElement(
        React.Fragment,
        null,
        `<button>1</button>`,
        `<button>2</button>`,
        `<button>3</button>`
    ),
    document.querySelector('#root')
)

// 4. 복잡한 리액트 엘리먼트 모임 (createElement의 한계)
// <div>
//     <ul>
//         <li>React</li>
//         <li>Vue</li>
//     </ul>
// </div>
// 위와 같은 HTML 을 컴포넌트로 만들어 내려면?

//같은 코드가 반복된다
//가독성이 낮다
ReactDOM.render(
    React.createElement('div',null,
        React.createElement('ul',null,
            React.createElement(React.Fragment,null,
                React.createElement('li',null,`REACT`),
                React.createElement('li',null,`VUE`),
            )
        )
    ),
    document.querySelector('#root')
)

//위와 같은 문제를 해결하기 위해 JSX를 사용한다
```

#
### JSX
#

> 리액트에서 요소를 만들때 사용하는 문법이다 . 가독성이 좋다. jsx 는 바벨을 통해 js로 컴파일되기 때문에 문법적 오류를 인지하기 쉽다.

```js
//jsx

ReactDOM.render(
    <div>
        <ul>
            <li>React</li>
            <li>Vue</li>
        </ul>
    </div>
    ,
    document.querySelector('#root')
)
//아래 사이트에서 babel을 통해 jsx가 js 로 변환되는 것을 확인할 수 있다
https://babeljs.io/
```
<br/>

>JSX 문법 정리

```js
1. 최상위 요소는 하나여야 한다.
2. 최상위 요소를 리턴하는 경우 , ()로 감싸야한다.
3. 자식들을 바로 랜더링 하고 싶으면 ,<>자식들</>를 사용한다 => Fragment
4. 자바스크립트 표현식을 사용하려면 ,{표현식}을 이용한다.
5. if문은 사용할 수 없다 (삼항연산자 혹은 &&를 사용한다)
6. style을 이용해 인라인 스타일링이 가능하다 .
7. class 대신 className을 사용해야 class를 적용할 수 있다.
8. 자식요소가 있으면 ,꼭 닫아야 하고, 자식요소가 없으면 열면서 닫아야 한다.

```

#
### Props와 State
#

>Props는 컴포넌트 외부에서 컴포넌트에게 전달하는 데이터를 말하고 , 
State는 컴포넌트 내부에서 변경할 수 있는 데이터를 말한다. Props 와 State에 변경이 일어날 시 컴포넌트는 해당 변경 사항을  re-render 하려한다.

<br/>

#### Render 함수

<br/>

> Props와 State를 바탕으로 컴포넌트를 그려내는 함수이다. Props와 State의 변경이 감지되면 해당 컴포넌트는 Render 함수를 다시 실행하여 변경 사항을 update 한다.

<br/>

#### Props 전달과 사용  
<br/>

```js
//----funtion Component Props----
//함수 컴포넌트에서는 Props가 파라미터로 들어온다
function Component(props){
    return(
            <div>
                <h1>
                    {props.message} 함수 컴포넌트
                </h1>
            </div>
        );
}
ReactDOM.render(<Component message = "gege"/> ,document.querySelector('#root'));


//----class Compent Props----
//클래스 컴포넌트에서는 this의 props라는 필드로 props가 들어온다,
class Component extends React.Component{
    render(){
        return(
            <div>
                <h1>
                    {this.props.message} 클래스 컴포넌트
                </h1>
            </div>
        );
    }
}
ReactDOM.render(<Component message='hihi'/> , document.querySelector('#root'))


//----default Props 정의----

//클래스 , 함수 모두 사용가능
Component.defaultProps = {
    message:'default message'
}
ReactDOM.render(<Component /> , document.querySelector('#root'))

//클래스에서만 사용가능
class Component extends React.Component{
    render(){
        return(
            <div>
                <h1>
                    {this.props.message} 클래스 컴포넌트
                </h1>
                </div>
        );
    }
    static defaultProps = {
        message : 'static default'
    }
}
```

<br/>

### State 

<br/>

```js

//클래스 컴포넌트에서 state 정의, 사용  ,수정

class Component extends React.Component{
    //state 정의
    //클래스에서 컴포넌트에서 state는 객체 형태이다
    state = {
        count : 0 
    };

    render(){
        return(
            <div>
                <h1>
                    {this.props.message} 클래스 컴포넌트
                </h1>
                //state 사용
                <p>{this.state.count}</p>
                </div>
        );
    }
    componentDidMount(){
        setTimeout(()=>{
            //state 수정 시에는 setState를 통해 수정해야한다.

            //state 수정 방식 1
            this.setState({
                count : this.state.count +1
            })

            //state 수정 방식 2
            //이전의 값을 활용해서 새로운 값을 만든다.
            this.setState((old)=>{
                const newState = {count : old.count +1}
                return newState;
            })
        },1000)
    };
}
ReactDOM.render(<Component message="기본값 아님"/> , document.querySelector('#root'))

```
<br/>

#
### Event Handling
#

> HTML DOM 에 클릭하면 이벤트가 발생하고, 그에 맞는 변경이 일어나도록 이벤트를 Handling 한다. Recat에서는 JSX에 이벤트를 설정할 수 있다.    

<br/>

    특징
    1.이벤트 명을 camelCase 로만 사용할 수 있다
    2.이벤트에 연결된 자바스크립트 코드는 함수이다 . 
    3.실제 DOM 요소에만 사용 간으하다.


<br/>

```js

//function Component EventHandling
function Comp(){
    return (
            <div>
                <button onClick={()=>{
                    console.log('clicked')
                }}>클릭</button>
            </div>
            )
}

ReactDOM.render(<Comp/> , document.querySelector('#root'));

//class Component EventHandling
class Comp2 extends React.Component{
    state = {
        count :0
    }
    //일반 함수 click()에 this를 바인딩하기 위한 방법 1
    constructor(props){
        super(props);
        //클래스의 this 를 click()의 this에 바인딩 시킨다.
        this.click = this.click.bind(this);
    }

    render(){
        return(
            <div>
                <p>{this.state.count}</p>
                <button onClick = {this.click}>
                plus
                </button>
            </div>
        )    
    }


    /*
    일반 함수는 호출 위치에 따라 this 가 정의되고
    화살표 함수는 자신이 선언된 함수 범위에서 this가 정의된다.
    */

    click=()=>{
        this.setState((old)=>{
            const newCount = {
                count: old.count +1
            };
            return newCount;
        })
    }
}
ReactDOM.render(<Comp2/> , document.querySelector('#root2'))
```
<br/>





  
    
