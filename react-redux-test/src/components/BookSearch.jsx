import {useCallback, useRef} from "react";
import Pagination from 'react-js-pagination';

export default function BookSearch({keyword,getBooks,totalPage,pageNum,handlePageChange}) {
    
    console.log('pageNum',pageNum)

    const  searchBooks =(keyword,pageNum) => {
        getBooks(keyword,pageNum);
    }

    const changePage = (page) => {
        handlePageChange(page)
    }

    const BookInputRef = useRef();
     return(
        <div>
            <input type="text" ref={BookInputRef} />
            <button onClick={()=>{searchBooks(BookInputRef.current.value,0)}}>검색</button>
            <Pagination
            activePage={pageNum} 
            itemsCountPerPage={10} 
            totalItemsCount={totalPage} 
            pageRangeDisplayed={5} 
            prevPageText={"‹"} 
            nextPageText={"›"} 
            onChange={changePage}
            />
        </div>
    );

    
}