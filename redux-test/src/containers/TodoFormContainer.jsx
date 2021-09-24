
import TodoForm from "../components/TodoForm";
import { addTodo } from '../redux/actions';
import {useDispatch} from 'react-redux'
import {useCallback} from 'react'
//리덕스와 TodoForm 컴포넌트를 연결해준다.
// const TodoFormContainer = connect(
//     (state)=>({}),
//     (dispatch)=>({
//         add:(text) =>{
//             dispatch(addTodo(text));
//         },
//     })
// )(TodoForm)
export default function TodoFormContainer() {
    const dispatch = useDispatch();
    
    const add = useCallback((text)=>{
        dispatch(addTodo(text))
    },[dispatch])
    
    return<TodoForm add={add}/>;
}

