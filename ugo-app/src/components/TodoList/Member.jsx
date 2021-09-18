import useActions from "../../hooks/useActions";
import useMembers from "../../hooks/useMembers";
import { useRef } from 'react';

export default function Member({member}){
    const {updateState} = useMembers();
    const {onRemove , changeForm , onModify} = useActions();  
                              
    const updateInput = useRef();
    if(updateState.id === member.id && updateState.update){
        return(
            <tr className="member-row">
                <td>{member.id} </td>
                <td>{member.name}</td>
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
              <td className="member-content">{member.name} </td>
              <td ><button className="update-btn" onClick={()=>{changeForm(member.id);}}> 수정</button></td>
              <td><button className="remove-btn" onClick={()=>{onRemove(member.id);}}>X</button></td>
            </tr>
        );
    }
    
}