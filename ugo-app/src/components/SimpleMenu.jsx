import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import SimpleModal from './SimpleModal';
import useMembers from '../hooks/useMembers';

export default function SimpleMenu() {
  const {isLogin} = useMembers();

  const [anchorEl, setAnchorEl] = React.useState(null);
  
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
        style={{top:'59px',left:'-10px'}}
      >
        <MenuItem onClick={handleClose}><Link to="/about">Profile</Link></MenuItem>
        <MenuItem onClick={handleClose}><SimpleModal/></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/about">Logout</Link></MenuItem>
      </Menu>
    </div>
  );
}