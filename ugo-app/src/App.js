//jsx를 사용하기위해 import React 를 해줘야 했었지만
//버전이 올라가면서 index.js에만 import React 를 선언하고
//함수로 정의된 컴포넌트에서는 따로 import React를 선언하지 않아도 된다.

import "./App.scss";
import {useState,useRef, useEffect, useMemo, useCallback} from 'react';
import Name from "./components/Name";
import Wrapper from './components/Wrapper';
import Counter from './components/Counter';
import Input from "./components/Input";
import SignUpForm from "./components/SignUpForm";
import MemberList from "./components/MemberList";
import List from "./components/List";

function App() {
  const [members , setMembers] = useState([
    {id:0 , name:'ugo'},
    {id:1 , name:'hwang'},
    {id:2 , name:'kokaka'},
  ]);
    
  //이름 수정 input toggle
  const [updateState ,setUpdateState] = useState([{id:0 , update : false}]);

  //현재 멤버수 관리 function
  const totalCount = () => {
    console.log('count');
    console.log(members.length);
    return members.length;
  };

  //현재 멤버수 (members.length를 디펜던시로 줘서 해당 값이 변경될 때만 함수가 호출된다.)
  const memberCount = useMemo(totalCount, [members.length]);

  useEffect(()=>{
    return()=>{console.log('cleanUp');};
  },[]);


  const onFocusOut = useCallback((id) =>{
    setUpdateState([{id:id , update : false}]);
  },[]);

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

  return (
    <div className="App">
     <Wrapper>
       <Name name="ugo" isSpecial/>
       <Name name="hwang"/>
       <Counter/>
       <Input/>
       <SignUpForm/>
       <MemberList
       members={members} 
       nameInput={nameInput}
       memberCount={memberCount}
       updateState={updateState}
       changeForm={changeForm}
       onSubmit={onSubmit}
       setMembers={setMembers}
       onRemove={onRemove}
       onModify={onModify}
       onFocusOut={onFocusOut}
       />
       <List/>
     </Wrapper>
    </div>
  );
}

export default App;
