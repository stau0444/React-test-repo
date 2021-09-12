import {useState,useRef,useMemo,useEffect} from 'react';
import TodoStateContext from '../contexts/TodoStateContext';
import Notification from '../components/Notification';

const TodoStateProvider = ({children})=>{
    
    /*
        Member 관련로직
    */
    
    useMemo(()=>{console.log('h2');},[]);

    const [members , setMembers] = useState([
        {id:0 , name:'ugo'},
        {id:1 , name:'hwang'},
        {id:2 , name:'kokaka'},
    ]);
    //로그인 여부 관리
    const [isLogin , setIsLogin] = useState(false);

    //이름 수정 input toggle
    const [updateState ,setUpdateState] = useState([{id:0 , update : false}]);

    //현재 멤버수 관리 function
    const totalCount = () => {
    return members.length;
    };

    //현재 멤버수 (members.length를 디펜던시로 줘서 해당 값이 변경될 때만 함수가 호출된다.)
    const memberCount = useMemo(totalCount, [members.length]);

    useEffect(()=>{
    return()=>{console.log('cleanUp');};
    },[]);


    // const onFocusOut = useCallback((id) =>{
    // setUpdateState([{id:id , update : false}]);
    // },[]);

    const onModify = (id,updateName) => {
    const updateMember = members.find(member=>member.id === id);
    const index =members.indexOf(updateMember);
    members[index] = {id:updateMember.id , name: updateName};
    //setMembers([...members]);
    setUpdateState([{id:updateMember.id , update : false}]);
    };
    //할일 삭제
    const onRemove = (id) =>{
    const remainMember = members.filter(member => member.id !== id); 
    setMembers([...remainMember]);
    };
    
    //수정 버튼후 인풋창 opne
    const changeForm = (id) => {
        const updateMember = members.find(member=>member.id === id);
        setUpdateState({id:updateMember.id , update:true});
    };
    //할일 등록 함수
    const idCount = useRef(3);
    const nameInput = useRef('');
    const onSubmit = () => {
        const name = nameInput.current.value;
        if(name === ''){
            alert("할일을 적어주세요");
            return;
        }
        setMembers([...members,{id:idCount.current ,name:name }]);
        nameInput.current.value='';
        idCount.current++;
    };

    /*
        Notice 관련 로직
    */
    const noticies = [
        {id:0,content:"오늘은 마라탕을 먹었다 배부르지 않게 적당히 먹고 집에 돌아왔더니 졸음이 쏟아졌다 . 유튜브를 보다 오늘은 마라탕을 먹었다 배부르지 않게 적당히 먹고 집에 돌아왔더니 졸음이 쏟아졌다 . 유튜브를 보다 오늘은 마라탕을 먹었다 배부르지 않게 적당히 먹고 집에 돌아왔더니 졸음이 쏟아졌다"},
        {id:1,content:"오늘은 마라탕을 먹었다 배부르지 않게 적당히 먹고 집에 돌아왔더니 졸음이 쏟아졌다 . 유튜브를 보다 오늘은 마라탕을 먹었다 배부르지 않게 적당히 먹고 집에 돌아왔더니 졸음이 쏟아졌다 . 유튜브를 보다 오늘은 마라탕을 먹었다 배부르지 않게 적당히 먹고 집에 돌아왔더니 졸음이 쏟아졌다"},
        {id:2,content:"오늘은 마라탕을 먹었다 배부르지 않게 적당히 먹고 집에 돌아왔더니 졸음이 쏟아졌다 . 유튜브를 보다 오늘은 마라탕을 먹었다 배부르지 않게 적당히 먹고 집에 돌아왔더니 졸음이 쏟아졌다 . 유튜브를 보다 오늘은 마라탕을 먹었다 배부르지 않게 적당히 먹고 집에 돌아왔더니 졸음이 쏟아졌다"},
        {id:3,content:"오늘은 마라탕을 먹었다 배부르지 않게 적당히 먹고 집에 돌아왔더니 졸음이 쏟아졌다 . 유튜브를 보다 오늘은 마라탕을 먹었다 배부르지 않게 적당히 먹고 집에 돌아왔더니 졸음이 쏟아졌다 . 유튜브를 보다 오늘은 마라탕을 먹었다 배부르지 않게 적당히 먹고 집에 돌아왔더니 졸음이 쏟아졌다"},
        {id:4,content:"오늘은 마라탕을 먹었다 배부르지 않게 적당히 먹고 집에 돌아왔더니 졸음이 쏟아졌다 . 유튜브를 보다 오늘은 마라탕을 먹었다 배부르지 않게 적당히 먹고 집에 돌아왔더니 졸음이 쏟아졌다 . 유튜브를 보다 오늘은 마라탕을 먹었다 배부르지 않게 적당히 먹고 집에 돌아왔더니 졸음이 쏟아졌다"},
        {id:5,content:"오늘은 마라탕을 먹었다 배부르지 않게 적당히 먹고 집에 돌아왔더니 졸음이 쏟아졌다 . 유튜브를 보다 오늘은 마라탕을 먹었다 배부르지 않게 적당히 먹고 집에 돌아왔더니 졸음이 쏟아졌다 . 유튜브를 보다 오늘은 마라탕을 먹었다 배부르지 않게 적당히 먹고 집에 돌아왔더니 졸음이 쏟아졌다"},
        {id:6,content:"오늘은 마라탕을 먹었다 배부르지 않게 적당히 먹고 집에 돌아왔더니 졸음이 쏟아졌다 . 유튜브를 보다 오늘은 마라탕을 먹었다 배부르지 않게 적당히 먹고 집에 돌아왔더니 졸음이 쏟아졌다 . 유튜브를 보다 오늘은 마라탕을 먹었다 배부르지 않게 적당히 먹고 집에 돌아왔더니 졸음이 쏟아졌다"},
    ];
        
    const [notifications , setNotifications] = useState(noticies);

    return<TodoStateContext.Provider
            value={{
                members,
                notifications,
                updateState,
                memberCount,
                nameInput,
                isLogin,
                setNotifications,
                onModify,
                onRemove,
                changeForm,
                onSubmit,
                setIsLogin
                
            }}
            >
            {children}
        </TodoStateContext.Provider>;
};

export default TodoStateProvider;
