import queryString from 'query-string'
export default function About(props){
    
    const params = props.location.search;
    //URLSearchParams 사용
    //쿼리스트링을 분석하는 여러가지 기능을 제공
    //브라우저에 따라 작동하지 않을 수 있다.(ie에서 작동 안됨)
    //const obj = new URLSearchParams(queryString);
    //console.log(obj.get('name'));


    //query-string 사용 
    //객체 형식으로 쿼리스트링을 변환해준다.
    const query = queryString.parse(params)
    console.log(query);
    return (
                <div>
                    <h2>about page 입니다.</h2>
                    {query.name && <p> 이름은 {query.name} 입니다</p>}
                </div>
            )


}