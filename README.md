#
## React
#

## 링크
- [React concpet](#React-concept)
- [React 핵심 모듈(React와 ReactDOM)](#React-핵심-모듈)
- [class Component와 function Component](#class-Component와-function-Component)
- [React.CreateElement()](#React.CreateElement())
- [JSX](#JSX)

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

> React에서 컴포넌트를 만들어내는 메서드이다 파라미터 첫번째 인자로 리액트 컴포넌트,
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




  
    
