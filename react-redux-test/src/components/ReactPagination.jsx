import { useState } from 'react';
import Pagination from 'react-js-pagination';


export default function ReactPagingExample() {

    const [page, setPage] = useState(1); 
    const handlePageChange = (page) => { 
        setPage(page); 
    };


    return(
        <Pagination
        activePage={page} 
        itemsCountPerPage={10} 
        totalItemsCount={450} 
        pageRangeDisplayed={5} 
        prevPageText={"‹"} 
        nextPageText={"›"} 
        onChange={handlePageChange}
      />
    );
}