import useMembers from '../../hooks/useMembers';
import Member from './Member';
export default function TodoTable() {
    const {members} = useMembers();
    return(    
        <table className="member-table">
          <thead>
            <tr>
              <td>ID</td>
              <td>NAME</td>
              <td>수정</td>
              <td>삭제</td>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => {
              return <Member key={member.id} member={member} />;
            })}
          </tbody>
        </table>
        
        );
}