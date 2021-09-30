import { useDispatch, useSelector } from "react-redux";
import BookSearch from "../components/BookSearch";
import { getBooksPagingStart, getBooksPagingSuccess, getBooksPagingFail } from '../redux/modules/books';
import { useCallback } from 'react';
import axios  from 'axios';

export default function BookSearchContainer() {
    const keyword = useSelector(state => state.books.data.paging.keyword);
    const pageNum = useSelector(state => state.books.data.paging.pageNum);
    const dispatch = useDispatch();

    const apiKey = "0CEB9A0ED6BF63F389F3013C0A403C3E4AB6AD7DFAAC5DF51FD9AAFD8CB021FE";
    const proxyAdress ='https://ch-proxy-server-cors-anywhere.herokuapp.com';

    const getBooks = useCallback((keyword,pageNum)=>{
        async function getBooks(){
            try{
                const adress = `${proxyAdress}/https://book.interpark.com/api/search.api?key=${apiKey}&searchTarget=book&query=${keyword}&output=json&adultImageExposure=y&start=${pageNum*10+1}`
                console.log(adress)
                dispatch(getBooksPagingStart())
                const res = await axios.get(adress)             
                const paging = {
                    pageNum:pageNum , 
                    keyword:keyword ,
                    totalPage:Math.ceil(res.data.totalResults/10)
                };
                if(paging.pageNum<paging.totalPage){
                    dispatch(getBooksPagingSuccess(res.data,paging))
                }else{
                    alert("마지막페이지입니다.")
                }
            }catch(error){
                dispatch(getBooksPagingFail(error))
            }
        }
        getBooks();
    }
    ,[dispatch,apiKey,proxyAdress])
    

    return <BookSearch 
    keyword={keyword}
    pageNum={pageNum}
    getBooks={getBooks}
    />;
}