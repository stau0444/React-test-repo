//hook은 hook 또는 함수 컴포넌트 안에서만 실행이 가능하다.
import React, { useEffect } from 'react';

export default function useWindowWidth(){
    const [state , setState] = React.useState(window.innerWidth); 

    useEffect(()=>{

        //didMount , didUpdate 
        const resize = () => {
            setState(window.innerWidth);
        }

        window.addEventListener('resize',resize)

        //willUnmount
        return ()=>{
            console.log('willunmount')
            window.removeEventListener('resize',resize);
        }
    },[]);
    return state;
}