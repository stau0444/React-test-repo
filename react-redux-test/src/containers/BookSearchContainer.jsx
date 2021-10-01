import { useDispatch, useSelector } from "react-redux";
import BookSearch from "../components/BookSearch";
import { getBooksPagingStart, getBooksPagingSuccess, getBooksPagingFail, handlePage } from '../redux/modules/books';
import { useCallback } from 'react';
import axios  from 'axios';

export default function BookSearchContainer() {
    const keyword = useSelector(state => state.books.data.paging.keyword);
    const pageNum = useSelector(state => state.books.data.paging.pageNum);
    const totalPage = useSelector(state => state.books.data.paging.totalPage);
    
    
    const dispatch = useDispatch();

    const handlePageChange = () => { 
        dispatch(handlePage(pageNum))
        getBooks(keyword,pageNum)
    };

    const apiKey = "F046B1970099AABFEA4605106024EB388668B45D86CB2E1DD7EF0AA96453D410";
    const proxyAdress ='https://ch-proxy-server-cors-anywhere.herokuapp.com';

    
    const sendDataToStore = useCallback((res,num)=>{
        const paging = {
            pageNum:pageNum+num, 
            keyword:keyword ,
            totalPage:Math.ceil(res.data.totalResults)
        };
        dispatch(getBooksPagingSuccess(res.data,paging))
    },[dispatch,pageNum,keyword]);

    const getBooks = useCallback((keyword ,pageNum)=>{
        async function getBooks(){
            try{
                const adress = `${proxyAdress}/https://book.interpark.com/api/search.api?key=${apiKey}&searchTarget=book&query=${keyword}&output=json&adultImageExposure=y&start=${pageNum*10+1}`
                console.log(adress)
                dispatch(getBooksPagingStart())
                const res = await axios.get(adress)  
                if(pageNum === 0 ){
                    sendDataToStore(res,1);
                }else{
                    sendDataToStore(res);
                }           
            }catch(error){
                dispatch(getBooksPagingFail(error))
            }
        }
        getBooks();
    }
    ,[dispatch,apiKey,proxyAdress,sendDataToStore])
    
    

    return <BookSearch 
    keyword={keyword}
    totalPage={totalPage}
    pageNum={pageNum}
    getBooks={getBooks}
    handlePageChange={handlePageChange}
    />;
}