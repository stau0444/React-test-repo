export default function Profile(props){
    const id = props.match.params.id;
    return(
            <div> 
                <h2> profile page 입니다</h2>
                {id &&<p>id 는 {id} 입니다</p>}
            </div>
        );
}