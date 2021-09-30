const GET_BOOKS_PAGING_START = "react-redux-test/filter/GET_BOOKS_PAGING_START";
const GET_BOOKS_PAGING_SUCCESS = "react-redux-test/filter/GET_BOOKS_PAGING_SUCCESS";
const GET_BOOKS_PAGING_FAIL = "react-redux-test/filter/GET_BOOKS_PAGING_FAIL";

export function getBooksPagingStart() {
    return{
        type:GET_BOOKS_PAGING_START,
    }
}
export function getBooksPagingSuccess(data,paging) {
    return{
        type:GET_BOOKS_PAGING_SUCCESS,
        data:{
            item:data.item,
            paging:{
                pageNum:paging.pageNum,
                keyword:paging.keyword,
                totalPage:paging.totalPage
            }
        },        
    }
}

export function getBooksPagingFail(error) {
    return{
        type:GET_BOOKS_PAGING_FAIL,
        error
    }
}

const initialState = {
    loading:false,
    data:{
        items:[],
        paging:{
            pageNum:0,
            keyword:'',
            totalPage:0
        }
    },
    error:null
};

export default function reducer(prevState=initialState,action) {
    if(action.type === GET_BOOKS_PAGING_START){    
        return {
            ...prevState,
            loading: true,
            error: null,
        };  
    }
    if(action.type === GET_BOOKS_PAGING_SUCCESS){  
        if(action.data.paging.keyword !== prevState.data.paging.keyword){
            return{
                ...prevState,
                loading:false,
                data:{
                    items:action.data.item,
                    paging:{
                        pageNum:0,
                        keyword:action.data.paging.keyword,
                        totalPage:action.data.paging.totalPage
                    }
                },
            }
        }
        return{
            ...prevState,
            loading:false,
            data:{
                items:[...prevState.data.items].concat(action.data.item),
                paging:{
                    pageNum:action.data.paging.pageNum,
                    keyword:action.data.paging.keyword,
                    totalPage:action.data.paging.totalPage
                }
            },
        }
    }
    if(action.type === GET_BOOKS_PAGING_FAIL){    
        return{
            ...prevState,
            loading:false,
            error:action.error,
        }   
    }
        
    return prevState;     
       
}


