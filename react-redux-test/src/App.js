import './App.css';

import TodoFormContainer from './containers/TodoFormContainer';
import TodoListContainer from './containers/TodoListContainer';

function App() {
  return (
    <div className="App">
      <TodoListContainer/>
      <TodoFormContainer/>
    </div>
  );
}

export default App;
