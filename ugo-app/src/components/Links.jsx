import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const activeStyle = {
    color:'tomato',
    padding:'3px',    
};

export default function Links() {
    return(
        <ul className="link-list">
            <li><NavLink to="/" exact activeStyle={activeStyle} ><Button >HOME</Button></NavLink></li>
            <li><NavLink to="/date" activeStyle={activeStyle}><Button>Date</Button></NavLink></li>
            <li><NavLink to="/about" activeStyle={activeStyle}><Button>About</Button></NavLink></li>
        </ul>
    );
}