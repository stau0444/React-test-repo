import PersonContext from "../contexts/PersonContext";

export default function Example1() {
    return(
        //<PersonContext.Provider>에서 설정한 데이터가
        //<PersonContext.Consumer>안의 파라미터로 넘어온다.
        <PersonContext.Consumer>
            {(persons) =>(
                <ul>
                    {persons.map((p) => (
                        <li>{p.name}</li>
                    ))}
                </ul>
            )}
        </PersonContext.Consumer>
    );
}