import logo from './logo.svg';
import './App.css';
import StyledButton from './components/StyledButton';
import StyledTitle from './components/StyledTitle';
import styled, { createGlobalStyle } from 'styled-components';
import StyledA from './components/StyledA';


//이미 있는 컴포넌트의 스타일을 상속받아  다른 컴포넌트에서 재사용
const PrimaryStyledButton = styled(StyledButton)`
    border-radius : 10px;
    border: 1px solid green;
    margin: 4px 20px;
    
    :hover {
      background-color: gray;
    }

    ::before{
      content: "@";
    }
`;

//테스트용 컴포넌트
const UppercaseButton = (props) => (<button {...props} children ={`MyButton ${props.children}`} />);
//테스트용 컴포넌트
const MyButton = props =>(
  <button {...props} children ={`MyButton ${props.children}`} />
)

//이미 만들어진 컴포넌트에 스타일을 적용시킬 수 있다.
const StyledMyButton = styled(MyButton)`
  background:tomato;
`;
//createGlobalStyle은 global css 속성을 지정해 준다.
//GlobalStyle도 컴포넌트임으로 다른 컴포넌트들과 마찬가지로 render 해줘야한다. 
const GlobalStyle = createGlobalStyle`
  button{
    color : yellow;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <StyledTitle>Styled Title</StyledTitle>
        <p>
          <StyledButton> 버튼 </StyledButton>
          {/* primary라는 props를 넘기고 해당 컴포넌트에서 
            primary가 넘어오는 경우 다른 css를 적용시킬 수 있다.*/}
          <StyledButton primary> 버튼 </StyledButton>
          {/* as를 통해 다른 태그를 지정할 수도 있다 */}
          <StyledButton as="a"> 버튼 </StyledButton>
          {/* as를 통해 다른 컴포넌트를 지정할 수도 있다 */}
          <StyledButton as={UppercaseButton}> button </StyledButton>
          <StyledMyButton>asd</StyledMyButton>
          {/* 컴포넌트 선언시 styled.태그명.attr(props=>{props.속성명})으로 
              원하는 속성을 미리 지정할 수 있다. */}
          <StyledA href="https://google.com" > 태그 </StyledA>
        </p>
      </header>
    </div>
  );
}

export default App;
