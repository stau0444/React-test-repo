import {useState} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Avatar } from '@material-ui/core';
import useMembers from '../../hooks/useMembers';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';

export default function SimpleMenu() {
  const {isLogin} = useMembers();

  const [anchorEl, setAnchorEl] = useState(null);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <Avatar alt="Remy Sharp" src={isLogin ? "../static/images/avatar/avatar.JPG": ""} />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{width:'122px' ,top:'59px',left:'-15px'}}
      >
        <MenuItem onClick={handleClose}><LoginModal/></MenuItem>
        <MenuItem onClick={handleClose}><SignUpModal/></MenuItem>
        
      </Menu>
    </div>
  );
}