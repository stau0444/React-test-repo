import './App.css';
import BookSearchContainer from './containers/BookSearchContainer';
import BookListContainer from './containers/BookListContainer';
import TodoFormContainer from './containers/TodoFormContainer';
import TodoListContainer from './containers/TodoListContainer';
import ReactPagingExample from './components/ReactPagination';


function App({store}) {
  return (
    <div className="App">
      <TodoFormContainer/>
      <TodoListContainer/>
      <BookSearchContainer/>
      <BookListContainer/>
    </div>
  );
}

export default App;
