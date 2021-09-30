
export default function BookList({books}) {

    return(
        <>
            <div>
                {books.data.items.map((book,index)=>{
                    return(
                    <div key={index}>
                        <h3>{book.title}</h3>
                        <p ><img src={book.coverLargeUrl} alt="책 이미지" /></p>
                        <p >{book.description}</p>
                        <p>ISBN:{book.isbn}</p>
                        <hr/>
                    </div> 
                    )                  
                })}
            </div>
        </>
    );
}