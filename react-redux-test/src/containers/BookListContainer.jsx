import { useSelector } from "react-redux";
import BookList from "../components/BookList";

export default function BookListContainer() {
    const books = useSelector(state => state.books)
    console.log(books)
    
    return<BookList books ={books}/>;
}