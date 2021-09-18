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

export default function SignUpModal() {
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
      <h2 id="signup-modal-title">회원 가입</h2>
      <p id="signup-modal-description">
        아이디
      </p>
      <p id="signup-modal-description">
        비밀번호
      </p>
      <p id="signup-modal-description">
        이메일
      </p>
      <p id="signup-modal-description">
        전화번호
        <button style={{float:'right'}}>인증</button>
      </p>
      <button style={{float:'right'}} onClick = {login}>회원가입</button>
    </div>
  );

  return (
    <div>
      <button className="signup-button" onClick={handleOpen}>
      회원가입
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="signup-modal-title"
        aria-describedby="signup-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}