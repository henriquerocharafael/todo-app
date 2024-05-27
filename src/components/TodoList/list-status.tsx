import { TodoProps } from "../../App";
import styles from "./styles.module.css";

interface ListStatusProps {
  itemsLeft: TodoProps[];
  todoList: TodoProps[];
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  setTodoList: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}

export function ListStatus({
  itemsLeft,
  setStatus,
  setTodoList,
  todoList,
}: ListStatusProps) {
  return (
    <div className={styles.listStatus}>
      <div className={styles.items}>
        <span>{itemsLeft.length}</span> items left
      </div>
      <div className={styles.status}>
        <span onClick={() => setStatus("all")}>all</span>
        <span onClick={() => setStatus("active")}>active</span>
        <span onClick={() => setStatus("completed")}>completed</span>
      </div>
      <div className={styles.clear}>
        <span
          onClick={() =>
            setTodoList(todoList.filter((todo) => todo.completed === false))
          }
        >
          clear completed
        </span>
      </div>
    </div>
  );
}
