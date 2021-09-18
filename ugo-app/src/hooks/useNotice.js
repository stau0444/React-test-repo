import { useContext } from "react";
import TodoStateContext from "../contexts/TodoStateContext";

export default function useNotice() {
  const {
    notifications,
    setNotifications,
    unCheckedNoticeCount,
    removeNotice,
    addNotice,
    noticeInputRef,
    updateIsCheck,
  } = useContext(TodoStateContext);
  return {
    updateIsCheck,
    notifications,
    unCheckedNoticeCount,
    setNotifications,
    removeNotice,
    addNotice,
    noticeInputRef,
  };
}
