import {useState,useMemo} from 'react'

function sum(persons){
    console.log('sum...')
    return persons.map(p => p.age).reduce((l,r) => l+r , 0);
}

export default function Example7() {
    const [value , setValue] = useState('');
    const [persons] = useState([
        {name:'UGO',age:500},
        {name:'GOGO' ,age :200}
    ]);

    const count = useMemo(()=>{
        return sum(persons);
    },[persons])
    
    return(
        <div>
            <input value={value} onChange={change} />
            <p>{count}</p>
        </div>
    );

    function change(e){
        setValue(e.target.value);
    }
}