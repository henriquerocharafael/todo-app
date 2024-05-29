import { TodoProps } from "../../App";
import styles from "./styles.module.css";

interface ListStatusProps {
  itemsLeft: TodoProps[];
  todoList: TodoProps[];
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  setTodoList: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}

export function ListStatus({
  itemsLeft,
  setStatus,
  setTodoList,
  todoList,
  status,
}: ListStatusProps) {
  const statusItems = ["all", "active", "completed"];

  return (
    <div className={styles.listStatus}>
      <div className={styles.items}>
        <span>{itemsLeft.length}</span> items left
      </div>
      <div className={styles.status}>
        <span
          className={statusItems[0] === status ? styles.active : ""}
          onClick={() => setStatus("all")}
        >
          {statusItems[0]}
        </span>
        <span
          className={statusItems[1] === status ? styles.active : ""}
          onClick={() => setStatus("active")}
        >
          {statusItems[1]}
        </span>
        <span
          className={statusItems[2] === status ? styles.active : ""}
          onClick={() => setStatus("completed")}
        >
          {statusItems[2]}
        </span>
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
