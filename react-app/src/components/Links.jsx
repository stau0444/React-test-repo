
import { Link } from 'react-router-dom';
export default function Links(){
    
    return(
        <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/profile">PROFILE</Link></li>
            <li><Link to="/profile/1">PROFILE/1</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/about?name=ugo">ABOUT?name=UGO</Link></li>
        </ul>
    )
}