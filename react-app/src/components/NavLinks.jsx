import { NavLink } from "react-router-dom";
const activeStyle = {backgroundColor:'tomato'};
export default function NavLinks(){
    return (
      <ul>
        <li>
          <NavLink to="/" exact activeStyle={activeStyle}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" exact activeStyle={activeStyle}>
            PROFILE
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile/1" activeStyle={activeStyle}>
            PROFILE/1
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            activeStyle={activeStyle}
            isActive={(m, l) => {
              console.log("3", l);
              return m !== null && l.search === "";
            }}
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about?name=ugo"
            activeStyle={activeStyle}
            isActive={(m, l) => {
              console.log("3", l);
              return m !== null && l.search === "?name=ugo";
            }}
          >
            ABOUT?name=UGO
          </NavLink>
        </li>
      </ul>
    );
};