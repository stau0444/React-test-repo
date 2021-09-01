#

## React

#

### 개념

- [React concpet](#React-concept)
- [React 핵심 모듈(React와 ReactDOM)](#React-핵심-모듈)
- [class Component와 function Component](#class-Component와-function-Component)
- [React.CreateElement()](<#React.CreateElement()>)
- [JSX](#JSX)
- [Props 와 State](#Props와-State)
- [Event Handling](#Event-Handling)
- [Component LifeCycle](#Component-LifeCycle)
- [React Developer tools](#React-Developer-tools)

### 리액트 프로젝트 생성

- [Create React App](#Create-React-App)
- [의존 라이브러리들](#Create-React-App-dependencies)
- [Create React App 시작 코드 이해하기](#Create-React-App-시작-코드-이해하기) (나중에 추가)
- [React Developer tools](#React-Developer-tools)(나중에 추가)

### 리액트 라우터
- [리액트 라우터 이해하기](#리액트-라우터-이해하기)
- [Dynamic routing](#Dynamic-routing)
- [Switch와 "Not Found" 처리](#Switch와-"404-Not-Found"-처리)
- [JSX 링크 라우팅 이동](#JSX-링크-라우팅-이동)
- [JS 에서 라우팅 이동](#JS-에서-라우팅-이동)

### 컴포넌트 스타일링
- [Style Loaders](#Style-Loaders)
- [](#)
- [](#)

#

<br/>

> 프레임워크 별 비교

| 종류 | angular                                                         | react                                         | vue                                                |
| ---- | --------------------------------------------------------------- | --------------------------------------------- | -------------------------------------------------- |
| 특징 | 거의 모든기능(인증 , 테스트 등등 ..)이 프레임워크 안에 들어있다 | View를 업데이트 하는 것에 초점이 맞춰져 있다. | angular의 특징과 react의 특징을 모두 실현하려한다. |
| 지향 | framework지향                                                   | library지향                                   | 둘다 지향sCode                                     |

#

#

### React concept

#

> 1.Component based development  
> -내장되어 있는 태그들을 조합하여 컴포넌트를 만들고 그 안에 동작(js),스타일(css),문서(html)을 조합하여 재활용하는 방식을 말한다.

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

> 2.Virtual DOM  
>  -DOM에 대한 제어를 React에 맡기고 React는 가상의 돔 트리를 사용해서  
>  이전과 이후 상태를 비교하여 바뀐 부분(diff)를 찾아내어 Re-render 한다.

</br>

![virtual dom](https://i2.wp.com/programmingwithmosh.com/wp-content/uploads/2018/11/lnrn_0201.png?fit=1173%2C785&ssl=1)

</br>

> 3.React Client Side Rendering(CSR)  
>  React는 javascript로 이루어진 애플리케이션이기 때문에 리액트로 만들어진 웹서비스에  
>  접근할때 js 파일이 다운 받아져야지 실행이 가능하다 이루어진다

-CSR 과정

1.유저가 ReactApp에 접근시 빈 Html이 먼저 다운 받아지고  
 2.다음으로 Html에 정의된 JS파일을 요청한다.  
 3.브라우저는 다운받은 js 파일(리액트앱)을 실행하고  
 4.리액트 컴포넌트들이 화면에 그려진다  
 5.Page Viewable Interactable .

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

> 1.컴포넌트 생성 , 사용

```js
//1.class 컴포넌트 정의
//React 컴포넌트로 선언 (React.Compent 상속)
class ClassComponent extends React.Component {
  render() {
    return <div>ClassComponent</div>;
  }
}

//컴포넌트 사용
ReactDOM.render(<ClassComponent />, document.querySelector("#root"));

//2.function 컴포넌트 정의

//정의1
function FunctionComponent() {
  //jsx를 리턴해줘야 한다.
  return <div>Hello</div>;
}

//정의2
const FunctionComponent = () => <div>Hello</div>;

//컴포넌트 사용
ReactDOM.render(<FunctionComponent />, document.querySelector("#root"));
```

#

### React.CreateElement()

#

> React에서 요소를 만들어내는 메서드이다 파라미터 첫번째 인자로 리액트 컴포넌트,
> 두번째로 props, 세번째는 자식으로 넣어줄 요소들이 들어간다.

```js
React.createElement(
  type, //태그 이름 문자열 | 리액트 컴포넌트 자체 | React.Fragment
  [props], //리액트 컴포넌트에 넣을 데이터 객체
  [...children] //자식으로 넣어주는 요소들
);

//1. 태그이름 문자열으로 컴포넌트 생성
ReactDOM.render(
  React.createElement("h1", null, `태그이름 문자열 타입`),
  document.querySelector("#root")
);

//2.리액트 컴포넌트 타입
const Component = () => <h1>리액트 컴포넌트 타입</h1>;

ReactDOM.render(<Component />, document.querySelector("#root"));

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
  document.querySelector("#root")
);

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
  React.createElement(
    "div",
    null,
    React.createElement(
      "ul",
      null,
      React.createElement(
        React.Fragment,
        null,
        React.createElement("li", null, `REACT`),
        React.createElement("li", null, `VUE`)
      )
    )
  ),
  document.querySelector("#root")
);

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

> JSX 문법 정리

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

> Props는 컴포넌트 외부에서 컴포넌트에게 전달하는 데이터를 말하고 ,
> State는 컴포넌트 내부에서 변경할 수 있는 데이터를 말한다. Props 와 State에 변경이 일어날 시 컴포넌트는 해당 변경 사항을 re-render 하려한다.

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
function Component(props) {
  return (
    <div>
      <h1>{props.message} 함수 컴포넌트</h1>
    </div>
  );
}
ReactDOM.render(<Component message="gege" />, document.querySelector("#root"));

//----class Compent Props----
//클래스 컴포넌트에서는 this의 props라는 필드로 props가 들어온다,
class Component extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.message} 클래스 컴포넌트</h1>
      </div>
    );
  }
}
ReactDOM.render(<Component message="hihi" />, document.querySelector("#root"));

//----default Props 정의----

//클래스 , 함수 모두 사용가능
Component.defaultProps = {
  message: "default message",
};
ReactDOM.render(<Component />, document.querySelector("#root"));

//클래스에서만 사용가능
class Component extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.message} 클래스 컴포넌트</h1>
      </div>
    );
  }
  static defaultProps = {
    message: "static default",
  };
}
```

<br/>

### State

<br/>

```js
//클래스 컴포넌트에서 state 정의, 사용  ,수정

class Component extends React.Component {
  //state 정의
  //클래스에서 컴포넌트에서 state는 객체 형태이다
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        <h1>{this.props.message} 클래스 컴포넌트</h1>
        //state 사용
        <p>{this.state.count}</p>
      </div>
    );
  }
  componentDidMount() {
    setTimeout(() => {
      //state 수정 시에는 setState를 통해 수정해야한다.

      //state 수정 방식 1
      this.setState({
        count: this.state.count + 1,
      });

      //state 수정 방식 2
      //이전의 값을 활용해서 새로운 값을 만든다.
      this.setState((old) => {
        const newState = { count: old.count + 1 };
        return newState;
      });
    }, 1000);
  }
}
ReactDOM.render(
  <Component message="기본값 아님" />,
  document.querySelector("#root")
);
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
function Comp() {
  return (
    <div>
      <button
        onClick={() => {
          console.log("clicked");
        }}
      >
        클릭
      </button>
    </div>
  );
}

ReactDOM.render(<Comp />, document.querySelector("#root"));

//class Component EventHandling
class Comp2 extends React.Component {
  state = {
    count: 0,
  };
  //일반 함수 click()에 this를 바인딩하기 위한 방법 1
  constructor(props) {
    super(props);
    //클래스의 this 를 click()의 this에 바인딩 시킨다.
    this.click = this.click.bind(this);
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.click}>plus</button>
      </div>
    );
  }

  /*
    일반 함수는 호출 위치에 따라 this 가 정의되고
    화살표 함수는 자신이 선언된 함수 범위에서 this가 정의된다.
    */

  click = () => {
    this.setState((old) => {
      const newCount = {
        count: old.count + 1,
      };
      return newCount;
    });
  };
}
ReactDOM.render(<Comp2 />, document.querySelector("#root2"));
```

<br/>

#

### Component LifeCycle

#

> 리액트 컴포넌트는 생성부터 소멸까지 여러지점에서 개발자가 작업이 가능하도록 메서드를 오버라이딩 할 수 있게 해준다.

<br/>

![declarative](https://miro.medium.com/max/1400/1*fdGC22mqWBAQ7jOFPPAvIg.png)

(출처 : https://medium.com/@ralph1786/intro-to-react-component-lifecycle-ac52bf6340c)

    * React v16.3 이전의 Lifecycle

    1.initialization
    - 생성자 함수가 호출되면서 props가 셋팅되고 state의 초기값이 설정됨 컴포넌트가 객체화 되는 시점

    2.Mounting
    - 실제로 컴포넌트가 그려지는 구간
    - componentWillMount: render 직전
    - render: 화면에 컴포넌트가 그려짐
    - componentDidMount: render 직후

    3.updation
    -컴포넌트의 props 혹은 state가 변경되어 render가 다시 호출됨
    - componentWillReceiveProps : props가 변경되면 가장 먼저 호출된다.(state 변경때는 호출 안됨)
    - shouldCOmpnentUpdate : 컴포넌트가 업데이터 되어야할지 말아야할지 결정하는 시점
    - componentWillUpdate : 컴포넌트 업데이트 되기 직전
    - render : 변경된값으로 컴포넌트가 다시 render됨
    - componentWillUpdate : 컴포넌트 업데이트 되기 직전

    4.unmounting
    - componentWillUnmount: 컴포넌트가 사라지기 직전

<br/>

```js
//initialization && Mounting

class Comp extends React.Component {
  state = {
    age: 200,
  };

  interval = null;

  /*1.initialization && Mounting*/

  constructor(props) {
    super(props);
    console.log("constructor", props);
  }

  render() {
    console.log("render");
    return (
      <div>
        <h2>render()</h2>
        <h3>
          hello {this.props.name} - {this.state.age}
        </h3>
      </div>
    );
  }
  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidMount() {
    console.log("componentDitMount");
    //타이머 , api 요청등을 한다.

    this.interval = setInterval(() => {
      //state가 변경되면 render()가 다시 실행된다.
      this.setState((old) => ({ age: old.age + 1 }));
    }, 1000);
  }

  /*2. updation*/

  //바뀔 Props를 받는 시점
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps", nextProps);
    //만약 이안에서 state를 변경하게된다면
    //하나의 변경으로 state와 props가 함께 변경된다.
  }

  // 컴포넌트가 업데이트될지 말지를 결정하는 시점
  // boolean 값을 리턴하여 결정해줘야한다.
  // 랜더가 발생할지를 효율적으로 관리할 수 있다.
  // false 면 값은 바뀌지만 화면은 바뀌지 않는다
  // default 리턴값은 true 이다.
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    return false;
  }

  //컴포넌트 업데이트 직전 시점
  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate", nextProps, nextState);
  }

  //컴포넌트 업데이트 이후 시점
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", prevProps, prevState);
  }

  /*3.Unmount*/

  //메모리상에 컴포넌트가 사용하고 있는 것을 정리하거나
  //컴포넌트에서 api 요청이 일어나고 응답을 받기전에
  //컴포넌트가 unmount 된다면 요청을 abort시키는 것을
  //정의할 수 있다
  componentWillUnmount() {
    clearInterval(this.interval);
  }
}
ReactDOM.render(<Comp name="UGO" />, document.querySelector("#root"));
```

<br/>

    * React v16.3 이후의 Lifecycle 변경사항

```js
  /*
     1.componentWillMount,componentWillReceiveProps => getDerivedStateFromProps

     - 일반 메서드가 아니라 클래스 컴포넌트의 static 메서드로 지정해 줘야한다.
     - 파라미터로 바뀔 props 값과 이전 state값을 갖는다.
     - 시간의 흐름에 따라 변경되는 Props에 state가 의존하는 경우에 사용한다.
     - return 값이 필요하고 아무것도 하지 않을 경우 undefind가 아닌 null
       이 리턴되야한다.
     - componentWillReceiveProps는 props 변경시에만 호출 되었지만
     getDerivedStateFromProps는 props , state 변경시에
     호출된다.

     *16.3 이전 훅과 이후 훅을 함께 쓸 수 없다.
 */

 // componentWillMount(){
 //     console.log('componentWillMount')
 // }

 static getDerivedStateFromProps(nextProps,prevState){
     console.log(nextProps,prevState);
     return null;
 }

 /*
     2.componentWillUpdate => getSnapshotBeforeUpdate

     - getSnapshotBeforeUpdate는 업데이트된 내용이 re-render
      되기 이전에  update 이전의 값에 대해서 snapshot을 찍어 놓는다.

     - getSnapshotBeforeUpdate에서 찍힌 snapshot은 업데이트 이후
      시점을 관리하는 훅인 componentDidUpdate의 파라미터로 받아서
      사용할 수 있다.
 */

 // getSnapshotBeforeUpdate 예시

 //업데이트 이전의 마우스 스크롤 값을 스냅샷 하고 있다.
 getSnapshotBeforeUpdate(prevProps, prevState){
     if(prevState.list.length === this.state.list.length) return null;
     const list = document.querySelector('#list');
     return list.scrollHeight -list.scrollTop;
 }
 //업데이트 이후의 스크롤 값을 업데이트 이전값(snapshot)과 비교하여
 //scrollTop을 설정해주고 있다.
 componentDidUpdate(prevProps,prevState , snapshot){
     if(snapshot === null) return;
     const list = document.querySelector('#list');
     list.scrollTop = list.scrollHeight - snapshot;
 }

 /*
     3.componentDidCatch 추가

     - componentDidCatch를 이용하면 componentDidCatch가 일어난
       하위 컴포넌트에서 에러가 발생했을 때 부모 컴포넌트에서 error를 처리할 수 있다.

 */

 // componentDidCatch 예시
 //App 컴포넌트의 하위 컴포넌트인 WebService에 에러가 발생하면
 //componentDidCatch가 호출된다.
 //this.state의 hasError는 true가 되고
 //render()에서 if 문 안으로 들어가게 된다.

 //상위 컴포넌트에서 하위 컴포넌트의 에러가 관리되는 범위를 Error Bounderies라고 하고
 //Error Bounderies는 최상위 컴포넌트에 위치하는 것이 좋다.
class App extends React.Component{
 state = {
     hasError: false
 };

 render(){
     if(this.state.hasError){
         return <div>예상치 못한 에러 발생</div>
     }
     return <WebService/>;
 }
 /
 componentDidCatch(error, info){
     this.setState({hasError : true})
 }
}
```

#

### Create React App

#

> React , ReactDOM을 편하게 사용할 수 있도록 프로젝트를 생성하고 , 개발에 필요한 여러가지 기능을 제공하는 역할을 한다.

<br/>

npx

> npm 5.2.0 이상부터 함께 설치되는 커맨드라인 명령어로 라이브러리를 현재 최신버전으로 확인하여 받아주고 , 실행해주는 역할을 한다.

<br/>

```js
//리액트 앱 생성 명령어
//node js 기반의 react project가 생성된다.
npx create-react-app ugo-app

/*
    create-react-app 으로 프로젝트 생성시
    기본적으로 추가되는 dependency
*/

"dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",

    //react 핵심 모듈
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    /*
        - react-scripts

        개발환경으로 띄우거나 배포를 위한 빌드작업등
        프로젝트 react-create-app에서
        프로젝트 관리역할을 하는 라이브러리
        react-scripts의 버전은
        react-create-app의 버전과 같다,
    */
    "react-scripts": "4.0.3",
    //google에서 사이트 경험을 측정하고 개선할 수 있도록
    //정보를 얻어내는 역할을 하는 라이브러리
    "web-vitals": "^1.1.2"
}


/*
    create-react-app의 명령어
*/

"scripts": {
    //로컬에 개발 서버를 띄워준다.
    "start": "react-scripts start",
    /*
        - 프로젝트를 build 한다.
        - build 라는 폴더가 생성되며 프로덕션용 파일이 저장된다.
        - 아래 명령어로 build 폴더를 파일서버에 띄워 프로덕션 모드로 확인할 수 있다.
        - npx serve -s build
        (-s 는 어떤 요청에도 index.html을 응답하도록 하는 설정이며
        SPA를 의미한다)
    */
    "build": "react-scripts build",
    /*
        -test 코드를 실행한다
        -create-react-app  jest 라이브러리를 기반으로 테스트를 한다.
    */
    "test": "react-scripts test",
    /*
       - create-react-app의 관리를 받지고 싶을때 eject 한다.
       - 커스텀한 설정이 필요할 경우에 사용한다.
       - eject 할 경우 config 폴더가 생성되고 여러가지 라이브러리에 대한
         설정 파일들이 들어가 있다.
    */
    "eject": "react-scripts eject"

}
```

<br/>

#

### Create React App dependencies

#

### 1.ESLint

<br/>

lint란?

> 린트(lint) 또는 린터(linter)는 소스 코드를 분석하여 프로그램 오류, 버그, 스타일 오류, 의심스러운 구조체에 표시(flag)를 달아놓기 위한 도구들을 가리킨다.[1] 이 용어는 C 언어 소스 코드를 검사하는 유닉스 유틸리티에서 기원한다.  
> 참조 : https://ko.wikipedia.org/wiki/%EB%A6%B0%ED%8A%B8_(%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4)

> ESLint는 리액트 뿐만 아니라 자바스크립트로 쓰여진 모든 파일에서 코드상 오류 체크 해주는 유틸리티이다. 설정파일을 통해 어떤 오류를 잡아낼 것인지를 커스텀하게 설정할 수 있다.  
>  Create-React-App에서는 package.json 파일에 "eslintConfig"에 eslint를 설정한다.

<br/>

Create-react-app package.json ESLint 설정

```json
"eslintConfig": {
    //기본적으로 react-app의 eslint config를 상속받고있다.
    "extends": [
      "react-app",
      "react-app/jest"
    ],
    //추가적인 설정은 rules에 설정해준다
    "rules": [
        "semi" : "error"
    ]
}
```

<br/>

### 2.Prettier

<br/>

> 코드를 포멧팅하는 code fomatter이다. ide에서 plugin을 설치하고 기본 fomatter를 Prettier로 설정한 후에 저장시 코드변경을 체크해주면 저장할 때 설정한대로 코드가 포멧팅된다. ide에서 뿐만 아니라  ESLint, husky , lint-staged 같은 라이브러리와 연동해서 git 특정 동작시에 오류를 잡아내고 수정하도록 설정할 수도 있다.
> ESLint와 충돌날 수 있는 기능이 있기 떄문에 겹치는 기능을 끄거나 ESLint에서 Prettier를 상속받으면 충돌 날수 있는 기능을 자동으로 꺼준다.

<br/>

아래의 링크에서 Prettier의 자세한 설정 옵션들을 확인할 수 있다.
https://prettier.io/docs/en/options.html

 <br/>

### 3.Husky

<br/>

> Git Hook을 쉽게 처리할 수 있도록 해주는 라이브러리이다 . git을 통한 특정 동작시(push 전후 , commit 전후 등등..)에 원하는 동작을 실행시킬 수 있다록 해준다. 프로젝트에 git이 설치된 후에 husky를 셋팅해야한다.

```js
//husky를 통해 git hook을 인스톨하는 명령어
 npx husky install

//commit 이전에 "npm test" 스크립트를 실행시키는 훅을 add 한다.
//husky로 설정한 동작에 에러가 있을시 git의 동작도 취소된다.
//안전하게 커밋할 수 있다
npx husky add .husky/pre-commit "npm test"
```

<br/>

### 4.lint-staged

<br/>

> git에서 stage에 올라간 파일들을 lint 해주는 패키지이다.

```js
husky - lint-staged 연동

1.프로젝트에 git init 해준다.
2.prettier,husky 패키지 인스톨한다.
3.npx husky install로 git hook을 활성화 시킨다.
4.프로젝트 package.json에 "husky install "scipt를 추가해준다
(다른 환경에서 프로젝트 실행시에 스크립트로 husky를 준비할 수 있다.)
5.npx husky add 로 git hook 추가
(예시 )npx husky add .husky/pre-commit "npx lint-staged")
6.packge.json lint-staged 설정추가 
ex)
"lint-staged": {
  //stage에 올라간 js 확장자 파일을 배열안 순서대로 명령한다.
    "**/*.js": [
      //코드오류를 찾아내고
      "eslint --fix",
      //코드를 포메팅한다
      "prettier --write",
      //변경사항을 add 한다.
      "git add"
    ]
},

동작) git commit전에 eslint로 코드오류를 검사받고 , 
잘못된 부분이 prettier로 포메팅되고
다시 git add 된후에 commit 된다 . 
* 팀내에서 일관된 코드 스타일로 코드 작성이 가능해 진다.
```

#
### Create React App 시작 코드 이해하기
#

> (나중에 추가)


#
### React Developer tools
#

> 개발 모드로 리액트를 띄우고 브라우저에서 extendtion으로 Devtools를 설치하면 Devtools가 React component를 디버깅하는 기능을 제공해준다.

> (나중에 추가)
 


#
## React Router
#

#
### 리액트 라우터 이해하기
#

SPA 라우팅 과정(Single Page Application)

```js
1. 브라우저에서 최초에 '/' 경로로 요청하면
2. React Web App을 내려준다.
3.내려받은 React App에서 '/' 경로에 맞는 컴포넌트를 보여준다.
5.Reat App에서 다른 페이지로 이동하는 동작을 수행하면 
6.새로운 경로에 맞는 컴포넌트를 보여준다.

//react-router-dom은 facebook의 공식 패키지가 아니지만 가장 대표적이고 많이 사용된다..
//npm 리액트 라우터 설치 명령어
npm i react-router-dom
```


React router dom 사용

```js

import {BrowserRouter , Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component ={Home}/>
      <Route path="/profile" component ={Profile}/>
      <Route path="/about" component ={About}/>
    </BrowserRouter>
  );
}

export default App;
//react-router-dom에서는 BrowserRouter , Router과 같이 router 기능 사용에 필요한 여러가 컴포넌트를 제공한다
//BrowserRouter 로 Route들을 감싸 줘야한다.
//Route 컴포넌트에 경로 (path)와 컴포넌트(component)를 설정하여 나열해준다.
//브라우저에서 요청한 경로에 Route의 path가 들어있으면 해당 component를 보여준다.
//리액트 라우터 돔의 매칭 알고리즘 상 '/'는 다른 경로에 포함이 되어도 개별적인 경로로 해석되기 떄문에 
//exact 프로퍼티를 설정하여 완전한 매칭에만 컴포넌트를 보여줄 수도 있다.

```

#
### Dynamic routing
#

> 브라우저에서 값을 받아와서  동적으로 컴포넌트를 처리할 수 있게 한다.

```js

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component ={Home}/>
      <Route path="/profile" exact component ={Profile}/>
      <Route path="/profile/:id"  component ={Profile}/>
      <Route path="/about" component ={About}/>
    </BrowserRouter>
  );
}

// 1.pathvariable 사용

// 경로에 '/: '로 pathvariable를 사용할 수 있다.
// Route를 통해 연결된 component는 아래와 같은 형태의 props를 전달받는다.

{
  history: {…}, 
  location: {…}, 
  match: {…}, 
  staticContext: undefined
}

//컴포넌트에서는 해당 props를 활용해 동적으로 컴포넌트를 표현할 수 있다.

export default function Profile(props){
    const id = props.match.params.id;
    return(
            <div> 
                <h2> profile page 입니다</h2>
                {id &&<p>id 는 {id} 입니다</p>}
            </div>
        );
}

// 2. queryString 사용

import queryString from 'query-string'
export default function About(props){
    const params = props.location.search;
    //URLSearchParams 사용
    //쿼리스트링을 분석하는 여러가지 기능을 제공
    //브라우저에 따라 작동하지 않을 수 있다.(ie에서 작동 안됨)
    const obj = new URLSearchParams(queryString);
    console.log(obj.get('name'));


    //query-string 사용 
    //객체 형식으로 쿼리스트링을 변환해준다.
    const query = queryString.parse(params)
    console.log(query);
    return <div>about page 입니다.</div>;
}

```

#
### Switch와 "404 Not Found" 처리
#
<br/>

### `<Switch>`
<br/>
>1.Switch 문 처럼 여러 Route 중 순서대로 먼저 맞는 하나만 보여준다.   
2.exact 를 뺄 수 있는 로직을 만들 수 있다 .   
3.가장 마지막에 어느 path 와도 맞지 않으면 보여지는 컴포넌트를 설정해서 not found 페이지를 만들 수 있다.

<br/>

```js

function App() {
  return (
    <BrowserRouter>
    // Switch 컴포넌트를 사용하면 위에서 아래로 매칭되는 경로를 찾는다.
      <Switch>
        <Route path="/profile/:id"  component ={Profile}/>
        <Route path="/profile"  component ={Profile}/>
        <Route path="/about" component ={About}/>
        <Route path="/"  exact component ={Home}/>
        //가장 큰 범위 경로인 / 에도 match 되지 않는다면 NotFound 페이지로 매칭된다
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}
```

#
### JSX 링크 라우팅 이동
#

### `<Link>`
<br/>

> 링크 이동할 때에 a 태그 대신 리액트 라우터 돔의 컴포넌트인 Link를 사용하여 페이지에 새로운 요청을 하는 것이 아닌 , 라우터상의 경로를 통해 경로가 이동된다. 

<br/>

```js
function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link> 
      <Switch>
        <Route path="/profile/:id"  component ={Profile}/>
        <Route path="/profile"  component ={Profile}/>
        <Route path="/about" component ={About}/>
        <Route path="/"  exact component ={Home}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
    
  );
}
```
<br/>

### `<NavLink>`
<br/>

> activeClassName ,activeStyle 처럼  active 상태에 대한 스타일 지정이 가능하다.   
  Route의 path 처럼 동작하기 때문에 exact가 제공된다.   
  to 라는 props 와 현재 브라우저의 경로가 일치하는 상태에 대한 처리를 해준다.

<br/>

NavLink 예시

```ts
import { NavLink } from "react-router-dom";
const activeStyle = {backgroundColor:'tomato'};
export default function NavLinks(){
    return (
      <ul>
        <li>
        // activeStyle에 css 객체를 넣어 active시 스타일을 지정할 수 있다
        // exact를 사용할 수 있다.
          <NavLink to="/" exact activeStyle={activeStyle}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" exact activeStyle={activeStyle}>
            PROFILE
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile/1" activeStyle={activeStyle}>
            PROFILE/1
          </NavLink>
        </li>
        <li>
        //isActive 라는 props에 함수를 정의하여
        //어떤 경우 active 상태를 줄지를 함수를 통해 지정할 수 있다.
        //첫번째 인자로는 match(to와 현재경로가 일치하는지)
        //두번째 인자로는 location(경로정보)
        //match가 맞지 않는다면 다른 경로에도 영향을 주기 때문에 
        //match와 location을 조합하여 코드를 작성해야한다
          <NavLink
            to="/about"
            activeStyle={activeStyle}
            isActive={(match, location) => {
              console.log("3", l);
              return match !== null && location.search === "";
            }}
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about?name=ugo"
            activeStyle={activeStyle}
            isActive={(m, l) => {
              console.log("3", l);
              return m !== null && l.search === "?name=ugo";
            }}
          >
            ABOUT?name=UGO
          </NavLink>
        </li>
      </ul>
    );
};

```

<br/>

#
### JS 에서 라우팅 이동
#
>  button을 누른다던가 특정 이벤트가 작동하여 자바스크립트가 동작할때 라우팅 을 이동 시키고 싶다면 , 아래와 같은 방법으로 해결할 수 있다.

```jsx
//js routing 예시

//로그인을 하는 상황이라고 가정하고 route 컴포넌트를 추가했다 
<Route path="/login"  exact component ={Login}/>

// ' /login ' 요청에 대하여 아래의 <Login> 컴포넌트가 불려올 것이다.
import LoginButton from '../components/LoginButton';

export default function Login(props) {    
    return(
        <div>
            <h2>Login Page</h2>
            {/*
              <Login>는 페이지로서 router와 직접 연결되어있기
              떄문에 라우터에서 제공하는 history,location,match 등의 
              기능 props로 전달받는다 하지만 <LoginButton>는 라우터와 
              직접 연결된 컴포넌트가 아니기 때문에 부모(Login)의 props를
               자식에게 전달 해줘야한다. 
            */}
            <LoginButton {...props}/>
        </div>
    );
}
```
```js
// <Login>은 <LoginButton>를 사용하고 있다
// 로그인 버튼은 클릭시 로그인 로직을 수행하고 '/' 경로로 넘어가도록 되어있다.
export default function LoginButton(props) {
    console.log(props);
    function login() {
        setTimeout(()=>{
            //로그인 로직 수행
            alert("로그인성공");
            // 부모의 props를 전달 받아 아래의 기능을 사용할 수 있다.
            props.history.push('/');
            
        },1000);
    }
    return(
        <button onClick={login}>로그인</button>
    );
});
```
<br/>

> 위의 코드는 Login 에서 LoginButton이 바로 아래 컴포넌트이기 때문에 가능하지만 여러 뎁스 아래의 컴포넌트라면 위와 같이 전달하기 힘들 것이다 . 이를 해결하기 위해 react-router-dom에서는
HOC(High Order Component)라는 것을 제공한다.    
*일단은 간단히만 살펴보자


<br/>

```jsx
import {withRouter} from 'react-router-dom'
// 하위 컴포넌트에서 라우터가 연결된 최상위 컴포넌트의 
// props(history,location,match..)를 사용하고 싶다면
// 아래와 같이 정의한 컴포넌트를 withRouter()안으로 넣어서
// export default 해주면 된다.
export default withRouter(function LoginButton(props) {
    console.log(props);
    function login() {
        setTimeout(()=>{
            props.history.push('/');
            alert("로그인성공");
        },1000);
    }
    return(
        <button onClick={login}>
          로그인
        </button>
      );
});


```
<br/>

### `<Redirect>`
<br/>

>react-router-dom 에서 제공하는 리다일렉트 처리를 할때 사용하는 컴포넌트이다  

```jsx

import {BrowserRouter , Redirect, Route ,Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';

const isLogin = false ;

function App() {
  return (
    <BrowserRouter>
      <Links/>
      <NavLinks/>
      <Switch>
        {/*Route의 reder에 정의한 jsx가 렌더된다*/}
        <Route 
          path="/login"  
          render={()=>(isLogin ? <Redirect to='/'/> : <Login />)}
          />
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
```

#
## 컴포넌트 스타일링
#



#
### Style Loaders
#

#### 리액트의 작동 방식

<br/>

![react 작동 방식](./image/react.png)

> webpack은 각 확장자에 맞는 loader에게 comile을 위임한다. 각 확장자의 loader들은 각자의 config 파일을 통해 컴파일 작동 방식에 대해 설정할 수 있다. 

<br/>

#### 리액트의 작동 방식


