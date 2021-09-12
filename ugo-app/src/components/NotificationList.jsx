import useNotice from '../hooks/useNotice';
import Notification from './Notification';


export default function NotificationList() {
    const {notifications} = useNotice();
    return(
        <div className="notifications">
            {notifications.map((notification,index) => 
                    (<Notification key={notification.id} notification = {notification}/>)
                )}
        </div>
    );
}