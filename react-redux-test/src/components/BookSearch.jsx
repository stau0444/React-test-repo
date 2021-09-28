import { useEffect, useRef, useState } from "react";
import axios from 'axios'
import BookList from "./BookList";

export default function BookSearch() {

    const [books , setBooks] = useState([]);
    const [page , setPage ] = useState(0);
    const [pageNums,setPageNums ]= useState([1,2,3,4,5,6,7,8,9,10]);

    useEffect(()=>{
        console.log(page);
    },[page])

    const inputRef = useRef();
    const apiKey = "0CEB9A0ED6BF63F389F3013C0A403C3E4AB6AD7DFAAC5DF51FD9AAFD8CB021FE";
    const headers = {
        "X-Requested-With": "XMLHttpRequest",
        'Access-Control-Allow-Origin': 'http://localhost:3000/',
        'Content-Type':"application/json",
    }
    axios.defaults.headers.post = null
    const proxyAdress ='https://ch-proxy-server-cors-anywhere.herokuapp.com';
    
    const searchBook = () => {
        console.log();
        console.log('page',page);
        const adress = `${proxyAdress}/https://book.interpark.com/api/search.api?key=${apiKey}&query=${inputRef.current.value}&output=json&adultImageExposure=y&start=${page*10+1}`
        axios.get(adress,{headers})
        .then((res)=>{
            setBooks(res.data.item);
            setPage(Math.ceil(res.data.totalResults/5))
        })
    }

    return(
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={searchBook}>검색</button>
            <BookList books = {books}/>
            
        </div>
    );

    
}