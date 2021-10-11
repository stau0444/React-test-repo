import { Link } from 'react-router-dom';

export default function Links() {
    return(
        <ul className="menu-links"> 
            <li className="menu-link"><Link>책</Link></li>
            <li className="menu-link"><Link>모임</Link></li>
            <li className="menu-link"><Link>마이페이지</Link></li>
        </ul>
    );
}