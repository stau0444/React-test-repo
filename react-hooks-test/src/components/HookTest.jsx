export default function HookTest(){
    return(
        <div>
            <p>you clicked {count} time ! </p>
            <button onClick={click}>click!</button>
            <button onClick={pushAlert}>alert!</button>
        </div>
    )
}