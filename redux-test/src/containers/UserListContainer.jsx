import UserList from "../components/UserList";
import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from "react";
import { getUsersThunk } from "../redux/modules/users";

export default function UserListContainer() {
    
    const users = useSelector(state => state.users.data)
    const dispatch = useDispatch();
    
    const getUsers = useCallback(()=>{
            dispatch(getUsersThunk())
    },[dispatch])

    return <UserList users = {users} getUsers={getUsers}/>;
}