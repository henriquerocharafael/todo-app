import styles from "./styles.module.css";
import { TodoListProps } from "../../App";

  export function ListStatus(props: { todoList: TodoListProps[] }) {
  return (
    <div className={styles.listStatus}>
      <div className={styles.items}>
        <span>{props.todoList.length}</span> items left
      </div>
      <div className={styles.status}>
        <span>all</span>
        <span>active</span>
        <span>completed</span>
      </div>
      <div className={styles.clear}>
        <span>clear completed</span>
      </div>
    </div>
  );
}
