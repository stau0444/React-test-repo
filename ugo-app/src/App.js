//jsx를 사용하기위해 import React 를 해줘야 했었지만
//버전이 올라가면서 index.js에만 import React 를 선언하고
//함수로 정의된 컴포넌트에서는 따로 import React를 선언하지 않아도 된다.
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
