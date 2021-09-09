import logo from './logo.svg';
import './App.css';
import useHasMounted from './hooks/useHasMounted';
import Example6 from './components/Example6';
import Example7 from './components/Example7';


function App() {
  
  const hasMountedHook = useHasMounted();
  console.log(hasMountedHook);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Example6/>
        <Example7/>
      </header>
    </div>
  );
}

export default App;

