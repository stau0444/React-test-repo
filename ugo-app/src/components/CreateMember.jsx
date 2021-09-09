export default function CreateMember({onSubmit,nameInput}){
    
    return(
        <div>
            <input className="member-nameInput" ref={nameInput} type="text" placeholder="할 일"/>
            <button className="member-nameButton" onClick={onSubmit}>추가</button>
        </div>
    );
}