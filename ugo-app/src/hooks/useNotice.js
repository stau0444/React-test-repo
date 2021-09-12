import { useContext } from "react";
import TodoStateContext from "../contexts/TodoStateContext";

export default function useActions() {
  const { notifications, setNotifications } = useContext(TodoStateContext);
  return { notifications, setNotifications };
}
