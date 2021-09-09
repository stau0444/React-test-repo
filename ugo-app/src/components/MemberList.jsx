import CreateMember from './CreateMember';
import { useRef } from 'react';

export default function MemberList({
    members,
    setMembers,
    onRemove,
    changeForm,
    updateState,
    onModify,
    onFocusOut,
    memberCount,
    onSubmit,
    nameInput
}) {

    return(
        <div className="member-list-container">
            <h3 className="member-title">Haza</h3>
            <p>총 할일 : {memberCount}</p>
            <CreateMember  onSubmit={onSubmit} nameInput={nameInput} setMember={setMembers} member={members}/>
            <ul>
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
                {members.map((member)=>{
                    return (
                        <Member 
                            key={member.id} 
                            members={members} 
                            member={member} 
                            onRemove={onRemove}
                            changeForm={changeForm}
                            updateState={updateState}
                            onModify={onModify}
                            onFocusOut={onFocusOut}
                        />
                    );
                })}
                </tbody>              
            </table>
            </ul>
        </div>
    );
}

function Member({member,onRemove,changeForm,onModify,updateState}){

    const updateInput = useRef();
    if(updateState.id === member.id && updateState.update){
        return(
            <tr className="member-row">
                <td>{member.id} </td>
                <td>{member.name} </td>
                <td>
                    <span>
                        <input ref={updateInput} className="update-input" type="text" /> 
                        <button onClick={()=>{onModify(member.id,updateInput.current.value);}}>변경</button>
                    </span>
                </td>
                <td><button className="remove-btn" onClick={()=>{onRemove(member.id);}}>X</button></td>
            </tr>
            
        );
    }else{
        return (
            <tr className="member-row">
              <td>{member.id} </td>
              <td>{member.name} </td>
              <button className="update-btn" onClick={()=>{changeForm(member.id);}}>수정</button>
              <td><button className="remove-btn" onClick={()=>{onRemove(member.id);}}>X</button></td>
            </tr>
        );
    }
    
}

