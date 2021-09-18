import React from "react";
import useNotice from '../../hooks/useNotice';
import { useState } from "react";
import { motion } from "framer-motion";
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import AddIcon from '@material-ui/icons/Add';

export default function Notification({notification}) {

  const [isOpen, setIsOpen] = useState(false);
  const {removeNotice,updateIsCheck} = useNotice();
  const [isChecked , setIsChecked ] = useState(false);
  
  const changeState = () => {
    setIsOpen(!isOpen);
    setIsChecked(true);
  };
  const whenItsOpen = (id) => {
    changeState();
    updateIsCheck(id);
  };
  
  
  return (
    <motion.div
      layout
      data-isopen={isOpen}
      initial={{ borderRadius: 20 }}
      className="notice-parent"
      
    >
      <motion.div
        layout
        className="notice-child"
        children={<div className=" button-label " onClick={()=>{whenItsOpen(notification.id);}}><AddIcon/></div>}
      />
      <p 
        data-isopen={isOpen}
        className="notice-content"
      >
        {notification.content} 
      </p>
      <button className="notice-removeBtn" onClick={()=>{removeNotice(notification.id,setIsOpen);}}>
        <RemoveCircleOutlineIcon/>
      </button>
        <p data-isopen={isOpen} className="notice-createdAt">{notification.createdAt}</p>
        <p data-isopen={isOpen} data-ischecked={isChecked} className="notice-isChecked"> {notification.isChecked?"읽음":""} </p>
    </motion.div>
  );
}