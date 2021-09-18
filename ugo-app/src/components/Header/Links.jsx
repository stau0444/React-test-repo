import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import useNotice from '../../hooks/useNotice';

const activeStyle = {
    color:'tomato',
    padding:'3px',    
};

export default function Links() {
    const {unCheckedNoticeCount} = useNotice();
    return(
        <ul className="link-list">
            <li><NavLink to="/" exact activeStyle={activeStyle} ><Button >HOME</Button></NavLink></li>|
            <li><NavLink to="/date" activeStyle={activeStyle}><Button>Date</Button></NavLink></li>|
            <li><NavLink to="/notice" activeStyle={activeStyle}><Button>Notice</Button></NavLink></li>{unCheckedNoticeCount}
        </ul>
    );
}