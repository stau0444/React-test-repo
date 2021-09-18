//jsx를 사용하기위해 import React 를 해줘야 했었지만
//버전이 올라가면서 index.js에만 import React 를 선언하고
//함수로 정의된 컴포넌트에서는 따로 import React를 선언하지 않아도 된다.

import "./App.scss";
import "./Notification.css";
import Wrapper from "./components/Wrapper";
import TodoStateProvider from "./providers/TodoStateProvider";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Links from "./components/Header/Links";
import LoginForm from "./components/Header/LoginForm";
import Date from "./pages/Date";
import AddNoticeTest from "./components/Notice/AddNoticeTest";
import Notice from "./pages/Notice";

function App() {
  return (
    <BrowserRouter>
      <TodoStateProvider>
        <AddNoticeTest />
        <div className="App">
          <Wrapper>
            <LoginForm />
            <Links />
            <Route path="/" exact component={Home} />
            <Route path="/date" exact component={Date} />
            <Route path="/notice" component={Notice} />
          </Wrapper>
        </div>
      </TodoStateProvider>
    </BrowserRouter>
  );
}

export default App;
