//jsx를 사용하기위해 import React 를 해줘야 했었지만
//버전이 올라가면서 index.js에만 import React 를 선언하고
//함수로 정의된 컴포넌트에서는 따로 import React를 선언하지 않아도 된다.

import "./App.scss";
import "./Notification.css";
import Wrapper from "./components/Wrapper";
import TodoStateProvider from "./providers/TodoStateProvider";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Links from "./components/Links";
import LoginForm from "./components/MemberList/LoginForm";
import Date from "./pages/Date";
import Notification from "./components/Notification";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TodoStateProvider>
          <Wrapper>
            <LoginForm />
            <Links />
            <Route path="/" exact component={Home} />
            <Route path="/date" exact component={Date} />
            <Route path="/about" component={About} />
          </Wrapper>
        </TodoStateProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
