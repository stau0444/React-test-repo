import NotificationList from '../components/Notice/NotificationList';
import { motion } from 'framer-motion';
export default function Notice() {
    const item = {
      hidden: { opacity: 0 },
      show: { opacity: 1 },
    };
    return(
        <motion.div
        variants={item}
        initial="hidden"
        transition={{  duration:0.4}}
        animate="show"
         >
        <div className= "notifications-box">
            <NotificationList/>
        </div>
        </motion.div>
    );
      
        
}