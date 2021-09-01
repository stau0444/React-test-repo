
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
