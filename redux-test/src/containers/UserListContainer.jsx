import UserList from "../components/UserList";
import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from "react";
import { getUsersFail, getUsersStart, getUsersSucess } from "../redux/actions";
import axios from 'axios';

export default function UserListContainer() {
    
    const users = useSelector(state => state.users.data)
    const dispatch = useDispatch();
    
    const getUsers = useCallback(
        async ()=>{
        try{
            dispatch(getUsersStart());
            const resp = await axios.get('https://api.github.com/users')
            dispatch(getUsersSucess(resp.data));
        }catch(error){
            dispatch(getUsersFail(error));
        }
    },[dispatch])

    return <UserList users = {users} getUsers={getUsers}/>;
}