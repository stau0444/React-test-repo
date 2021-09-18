import DatePicker from "../components/Date/DatePicker";
import TodoTable from "../components/TodoList/TodoTable";
import { motion } from 'framer-motion';
export default function Date() {
    
    const item = {
      hidden: { opacity: 0 },
      show: { opacity: 1 }
    };
    return (
      <motion.div
        variants={item}
        initial="hidden"
        transition={{  duration:0.4}}
        animate="show"
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