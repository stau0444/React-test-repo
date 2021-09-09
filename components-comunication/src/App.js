import logo from './logo.svg';
import './App.css';
import A from './components/A'
import A2 from './components/A2'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <A/> */}
        <A2/>
      </header>
    </div>
  );
}

export default App;
