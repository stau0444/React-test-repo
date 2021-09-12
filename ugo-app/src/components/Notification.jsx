import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Notification({notification}) {
  const [isOpen, setIsOpen] = useState(false);
  const removeNotice = (id) => {
    setIsOpen(false);
    console.log(`${id} 번 notice 삭제`);
  };
  return (
    <motion.div
      layout
      data-isOpen={isOpen}
      initial={{ borderRadius: 10 }}
      className="parent"
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.div
        layout
        className="child"
        children={<div className=" button-label ">클릭</div>}
      />
      <p
        data-isOpen={isOpen}
        className="content"
        style={{ width: "70%", marginLeft: "60px" }}
      >
        {notification.content}
      </p>
      <button  onClick={()=>{removeNotice(notification.id);}}>1</button>
    </motion.div>
  );
}