const users = [{name:'ugo'},{name:'gogo'},{name:'qwe'}];

export default function List() {
    return(
        <ul>
            {users.map((user,index)=>{
                return <li key={index}>{user.name}</li>;
            })}
        </ul>
    );
}