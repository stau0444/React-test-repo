import CreateMember from './CreateMember';
import useMembers from '../../hooks/useMembers';
import TodoTable from './TodoTable';

export default function TodoList() {

    const {memberCount} = useMembers();
    
    return(
        <div className="member-list-container">
            <h3 className="member-title">Haza</h3>
            <p>총 할일 : {memberCount}</p>
            <CreateMember/>
            <ul>
                <TodoTable/>
            </ul>
        </div>
    );

}



