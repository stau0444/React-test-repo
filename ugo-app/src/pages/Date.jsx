import DatePicker from "../components/DatePicker";
import useMembers from "../hooks/useMembers";
import { useMemo } from "react";
import TodoTable from "../components/MemberList/TodoTable";
import { motion } from 'framer-motion';
export default function Date() {
    const {members} = useMembers();
    useMemo(()=>{console.log(members);},[]);    
    return (
      <motion.div
        animate={{ scale: 1.01 }}
        transition={{ duration: 0.4 }}
        className="wrapper"
      >
        <div>
          <div className="Date-Picker">
            <DatePicker />
          </div>
          <ul>
            <TodoTable />
          </ul>
        </div>
      </motion.div>
    );
}