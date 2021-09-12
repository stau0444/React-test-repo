import MemberList from "../components/MemberList/MemberList";

import { motion } from 'framer-motion';
export default function Home() {
  return (
    <motion.div
      animate={{ scale: 1.01 }}
      transition={{ duration: 0.4 }}
      className="wrapper"
    >
      <MemberList />
    </motion.div>
  );
}