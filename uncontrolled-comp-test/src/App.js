import logo from './logo.svg';
import './App.css';
import ControlledComp from './components/ControlledComp';
import UncontrolledComp from './components/UncontrolledComp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ControlledComp/>
        <UncontrolledComp/>
      </header>
    </div>
  );
}

export default App;
