import { useDispatch, useSelector } from "react-redux";
import TodoList from "../components/TodoList";
import { completeTodo } from "../redux/modules/todos";
import { useCallback } from 'react';

export default function TodoListContainer() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();
    
    const  completed = useCallback((index) => {
        dispatch(completeTodo(index))
    },[dispatch]);

    return(<TodoList todos = {todos} completed = {completed}/>);
}