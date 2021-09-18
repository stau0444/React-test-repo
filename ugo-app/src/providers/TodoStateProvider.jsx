import { useState, useRef, useMemo, useEffect, useCallback } from 'react';
import TodoStateContext from '../contexts/TodoStateContext';

const TodoStateProvider = ({children})=>{
  /*
        Todo 관련로직
    */

  const [members, setMembers] = useState([
    { id: 0, name: "ugo" },
    { id: 1, name: "hwang" },
    { id: 2, name: "kokaka" },
  ]);
  //로그인 여부 관리
  const [isLogin, setIsLogin] = useState(false);

  //이름 수정 input toggle
  const [updateState, setUpdateState] = useState([{ id: 0, update: false }]);

  //현재 멤버수 관리 function
  const totalCount = () => {
    return members.length;
  };

  //현재 멤버수 (members.length를 디펜던시로 줘서 해당 값이 변경될 때만 함수가 호출된다.)
  const memberCount = useMemo(totalCount, [members.length]);

  useEffect(() => {
    return () => {};
  }, []);

  // const onFocusOut = useCallback((id) =>{
  // setUpdateState([{id:id , update : false}]);
  // },[]);

  const onModify = (id, updateName) => {
    const updateMember = members.find((member) => member.id === id);
    const index = members.indexOf(updateMember);
    members[index] = { id: updateMember.id, name: updateName };
    //setMembers([...members]);
    setUpdateState([{ id: updateMember.id, update: false }]);
  };
  //할일 삭제
  const onRemove = (id) => {
    const remainMember = members.filter((member) => member.id !== id);
    setMembers([...remainMember]);
  };

  //수정 버튼후 인풋창 opne
  const changeForm = (id) => {
    const updateMember = members.find((member) => member.id === id);
    setUpdateState({ id: updateMember.id, update: true });
  };
  //할일 등록 함수
  const idCount = useRef(3);
  const nameInput = useRef("");
  const onSubmit = () => {
    const name = nameInput.current.value;
    if (name === "") {
      alert("할일을 적어주세요");
      return;
    }
    setMembers([...members, { id: idCount.current, name: name }]);
    nameInput.current.value = "";
    idCount.current++;
  };

  /*
        Notice 관련 로직
    */

  const [notifications, setNotifications] = useState([
    {
      id: 0,
      content:
        "오늘은 마라탕을 먹었다 배부르지 않게 적당히 먹고 집에 돌아왔더니 졸음이 쏟아졌다 . 유튜브를 보다 오늘은 마라탕을 먹었다 배부르지 않게 적당히 먹고 집에 돌아왔더니 졸음이 쏟아졌다 . 유튜브를 보다 오늘은 마라탕을 먹었다 배부르지 않게 적당히 먹고 집에 돌아왔더니 졸음이 쏟아졌다",
      createdAt: new Date().toLocaleTimeString(),
      isChecked: false,
    },
    {
      id: 1,
      content:
        "오늘은 마라탕을 먹었다 배부르지 않게 적당히 먹고 집에 돌아왔더니 졸음이 쏟아졌다 . 유튜브를 보다 오늘은 마라탕을 먹었다 배부르지 않게 적당히 먹고 집에 돌아왔더니 졸음이 쏟아졌다 . 유튜브를 보다 오늘은 마라탕을 먹었다 배부르지 않게 적당히 먹고 집에 돌아왔더니 졸음이 쏟아졌다",
      createdAt: new Date().toLocaleTimeString(),
      isChecked: false,
    },
    {
      id: 2,
      content:
        "오늘은 마라탕을 먹었다 배부르지 않게 적당히 먹고 집에 돌아왔더니 졸음이 쏟아졌다 . 유튜브를 보다 오늘은 마라탕을 먹었다 배부르지 않게 적당히 먹고 집에 돌아왔더니 졸음이 쏟아졌다 . 유튜브를 보다 오늘은 마라탕을 먹었다 배부르지 않게 적당히 먹고 집에 돌아왔더니 졸음이 쏟아졌다",
      createdAt: new Date().toLocaleTimeString(),
      isChecked: false,
    },
    {
      id: 3,
      content:
        "오늘은 마라탕을 먹었다 배부르지 않게 적당히 먹고 집에 돌아왔더니 졸음이 쏟아졌다 . 유튜브를 보다 오늘은 마라탕을 먹었다 배부르지 않게 적당히 먹고 집에 돌아왔더니 졸음이 쏟아졌다 . 유튜브를 보다 오늘은 마라탕을 먹었다 배부르지 않게 적당히 먹고 집에 돌아왔더니 졸음이 쏟아졌다",
      createdAt: new Date().toLocaleTimeString(),
      isChecked: false,
    },
    {
      id: 4,
      content:
        "오늘은 마라탕을 먹었다 배부르지 않게 적당히 먹고 집에 돌아왔더니 졸음이 쏟아졌다 . 유튜브를 보다 오늘은 마라탕을 먹었다 배부르지 않게 적당히 먹고 집에 돌아왔더니 졸음이 쏟아졌다 . 유튜브를 보다 오늘은 마라탕을 먹었다 배부르지 않게 적당히 먹고 집에 돌아왔더니 졸음이 쏟아졌다",
      createdAt: new Date().toLocaleTimeString(),
      isChecked: false,
    },
    {
      id: 5,
      content:
        "오늘은 마라탕을 먹었다 배부르지 않게 적당히 먹고 집에 돌아왔더니 졸음이 쏟아졌다 . 유튜브를 보다 오늘은 마라탕을 먹었다 배부르지 않게 적당히 먹고 집에 돌아왔더니 졸음이 쏟아졌다 . 유튜브를 보다 오늘은 마라탕을 먹었다 배부르지 않게 적당히 먹고 집에 돌아왔더니 졸음이 쏟아졌다",
      createdAt: new Date().toLocaleTimeString(),
      isChecked: false,
    },
    {
      id: 6,
      content:
        "오늘은 마라탕을 먹었다 배부르지 않게 적당히 먹고 집에 돌아왔더니 졸음이 쏟아졌다 . 유튜브를 보다 오늘은 마라탕을 먹었다 배부르지 않게 적당히 먹고 집에 돌아왔더니 졸음이 쏟아졌다 . 유튜브를 보다 오늘은 마라탕을 먹었다 배부르지 않게 적당히 먹고 집에 돌아왔더니 졸음이 쏟아졌다",
      createdAt: new Date().toLocaleTimeString(),
      isChecked: false,
    },
  ]);
  const [noticeId, setNoticeId] = useState(8);
  const checkedCount = notifications.filter(
    (notice) => notice.isChecked === false
  ).length;
  const unCheckedNoticeCount = useMemo(() => {
    return checkedCount;
  }, [checkedCount]);
  
  const addNotice = useCallback(
    (value) => {
      setNotifications([
        ...notifications,
        {
          id: noticeId,
          content: value,
          createdAt: new Date().toLocaleTimeString(),
          isRead: false,
        },
      ]);
      setNoticeId(noticeId + 1);
    },
    [notifications, noticeId]
  );

  const removeNotice = useCallback(
    (id, setIsOpen) => {
      setIsOpen(false);
      const remainNotice = notifications.filter(
        (notification) => notification.id !== id
      );
      setNotifications([...remainNotice]);
    },
    [notifications]
  );

  //isChecked update

  const updateIsCheck = useCallback((id) => {
    const updateNotice = notifications.find((notice) => notice.id === id);
    const index = notifications.indexOf(updateNotice);

    // 해당 id값의 isChecked를 수정하는 API 요청
  
    notifications[index] = {
      id: updateNotice.id,
      content: updateNotice.content,
      createdAt: updateNotice.createdAt,
      isChecked: true,
    };
    setNotifications([...notifications]);
  },[notifications]);

  return (
    <TodoStateContext.Provider
      value={{
        members,
        notifications,
        updateState,
        memberCount,
        nameInput,
        isLogin,
        unCheckedNoticeCount,
        updateIsCheck,
        removeNotice,
        addNotice,
        setNotifications,
        onModify,
        onRemove,
        changeForm,
        onSubmit,
        setIsLogin,
      }}
    >
      {children}
    </TodoStateContext.Provider>
  );
};


export default TodoStateProvider;
