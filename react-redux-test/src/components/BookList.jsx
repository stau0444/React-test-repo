export default function BookList({books}) {
    return(
        <>
            <ul>
                {books.map((book,index)=>{
                    return(
                    <div>
                        <p ><h3>{book.title}</h3></p>
                        <p ><img src={book.coverLargeUrl} alt="책 이미지" /></p>
                        <p >{book.description}</p>
                        <p>ISBN:{book.isbn}</p>
                        <hr/>
                    </div> 
                    )                  
                })}
            </ul>
        </>
    );
}