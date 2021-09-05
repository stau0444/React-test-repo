import logo from './logo.svg';
import './App.css';
import HookExample from './components/HookExample';
import HookExample2 from './components/HookExample2';
import HookExample3 from './components/HookExample3';
import HookExample4 from './components/HookExample4';
import HookExample5 from './components/HookExample5';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <HookExample/>
        <HookExample2/>
        <HookExample3/>
        <HookExample4/> */}
        <HookExample5/>
      </header>
    </div>
  );
}

export default App;
