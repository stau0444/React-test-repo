#
## React
#

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
ReactDom.render(
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


  
    
