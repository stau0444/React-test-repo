import {useCallback, useRef} from "react";

export default function BookSearch({getBooks,keyword,pageNum}) {
    
    const  searchBooks =useCallback((keyword,pageNum) => {
        getBooks(keyword,pageNum);
    },[getBooks])

    const BookInputRef = useRef();

     return(
        <div>
            <input type="text" ref={BookInputRef} />
            <button onClick={()=>{searchBooks(BookInputRef.current.value,0)}}>검색</button>
            <button onClick={()=>{searchBooks(BookInputRef.current.value,++pageNum)}}>더보기</button>
        </div>
    );

    
}