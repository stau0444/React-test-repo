import './App.css';
import {Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Todos from './pages/Todos';
import Users from './pages/Users';
import history from './history';
import "react-tiger-transition/styles/main.min.css";
import Example from './pages/Example';

function App() {
  
  return (
    //전역으로 생성된 history를 사용하고 있다
        <Router history={history}>
           <Example/>
          <Route path ="/" exact component={Home}/>
          <Route path ="/todos" exact component={Todos}/>
          <Route path ="/users" exact component={Users}/>
        </Router>
  );
}

export default App;
