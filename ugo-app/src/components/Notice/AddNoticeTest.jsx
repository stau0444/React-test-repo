import useNotice from '../../hooks/useNotice';
import { useRef } from 'react';

export default function AddNoticeTest() {
    const {addNotice} = useNotice();
    const noticeInputRef = useRef('');
    return(
        <div className = "addnotice-input">
              <input ref={noticeInputRef} type="text"/>
              <button onClick = {()=>{addNotice(noticeInputRef.current.value);}}>notice 추가</button>
        </div>
    );
}