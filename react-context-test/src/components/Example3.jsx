import { useContext } from "react";
import PersonContext from "../contexts/PersonContext";

export default function Example3() {
    //useContext의 인자로 컨텍스트를 넘겨주면 
    //컨텍스트에서 set한 value가 넘어온다.
    const val = useContext(PersonContext);
    console.log(val.p)
    console.log(val.c)

    return(
        <ul>
            {/* {persons.map((p) => (
                <li>{p.name}</li>
            ))} */}
        </ul>
    );
}