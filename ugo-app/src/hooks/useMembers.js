import { useContext } from "react";
import TodoStateContext from "../contexts/TodoStateContext";

export default function useActions() {
  const { isLogin, members, updateState, memberCount, nameInput } =
    useContext(TodoStateContext);
  return { isLogin, members, updateState, memberCount, nameInput };
}
