import { motion } from 'framer-motion';
import TodoList from "../components/TodoList/TodoList";
export default function Home() {
  
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  };

  return (
    <motion.div
      variants={item}
      initial="hidden"
      animate="show"
      transition={{  duration:0.4}}
      className="wrapper"
    >
      <TodoList />
    </motion.div>
  );
}