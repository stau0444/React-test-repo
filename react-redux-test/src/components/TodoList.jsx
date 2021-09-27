
export default function TodoList({todos,completed}) {
    function completeTodo(index) {
        completed(index)
    }
    return(
        <div>
            <ul>
                {todos.map(
                    (todo,index) => {
                        return <li key={index}> 
                            {index} {todo.text} {todo.done.toString()}
                            <button onClick = {()=>{completeTodo(index)}}> 완료 </button>
                        </li>
                    }
                )}
            </ul>
        </div>
    );
}