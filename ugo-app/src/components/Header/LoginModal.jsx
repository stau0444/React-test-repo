import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { useHistory } from 'react-router';
import useActions from '../../hooks/useActions';

function getModalStyle() {
  const top = 50 ;
  const left = 49.5 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 480,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #e94242dd',
    borderRadius:'20px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function LoginModal() {
  const {setIsLogin} = useActions();

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const login = () =>{
    alert("로그인됨");
    setOpen(false);
    history.push("/about");  
    setIsLogin(true);
  };
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="login-modal-title">로그인</h2>
      <p id="login-modal-description">
        아이디 
      </p>
      <p id="login-modal-description">
        비밀번호
      </p>
      <button onClick = {login}>로그인</button>
    </div>
  );

  return (
    <div>
      <button className="login-button" onClick={handleOpen}>
        로그인
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}