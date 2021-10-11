
import './App.css';
import Pagination from 'react-js-pagination';
import BookList from './components/BookList';
import Header from './components/Header';
import {BrowserRouter} from 'react-router-dom';
import { Container } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <div className="logo-link">
        <BrowserRouter>
          <Container maxWidth="sm">
            <Header/>
              <BookList/>
              <Pagination
                activePage={1} 
                itemsCountPerPage={10} 
                totalItemsCount={100} 
                pageRangeDisplayed={5} 
                prevPageText={"‹"} 
                nextPageText={"›"} 
                onChange={null}
              />
          </Container>
         
        </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
