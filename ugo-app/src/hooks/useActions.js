import { useContext } from "react";
import TodoStateContext from "../contexts/TodoStateContext";

export default function useActions() {
  const { setIsLogin, onModify, onRemove, changeForm, onSubmit } =
    useContext(TodoStateContext);
  return { setIsLogin, onModify, onRemove, changeForm, onSubmit };
}
