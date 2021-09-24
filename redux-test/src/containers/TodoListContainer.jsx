//connect()를 실행하면 함수를 리턴하고 리턴된 함수를 실행시키면 컨테이너가 리턴된다.

import TodoList from "../components/TodoList";
import {useSelector} from "react-redux";

//HOC를 활용한 연결
//react-redux에서 제공하는 HOC함수인 connect를 이용하여 
//컴포넌트와 리덕스 state를 연결

//connect() 함수의 파라미터로는 config , 바깥쪽함수에는 컨테이너로 만들 컴포넌트가 들어간다. 
// const TodoListContainer = connect(
//     //config 영역
//       (state) => ({todos: state.todos,}),
//       (dispatch) => ({})
// )(TodoList);
// export default TodoListContainer;

//hook을 활용한 연결
//react-redux에서 제공하는 hook인 useSelector를 사용하여 리덕스 연결

export default function TodoListContainer(e) {
  const todos  = useSelector((state)=>state.todos);
  return <TodoList todos = {todos}/>
}