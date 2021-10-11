import { Link } from "react-router-dom";

export default function Home() {
    return(
        <div>
            <h1>HOME</h1>
            <ul>
                <li>
                    <Link to="/1">1</Link>
                </li>
                <li>
                    <Link to="/2">2</Link>
                </li>
                <li>
                    <Link to="/3">3</Link>
                </li>
                <li>
                    <Link to="/4">4</Link>
                </li>
                <li>
                    <Link to="/5">5</Link>
                </li>
            </ul>
        </div>
    );
}