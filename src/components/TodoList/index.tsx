import { TodoProps } from "../../App";
import iconCross from "../../assets/images/icon-cross.svg";
import { Checkbox } from "../Checkbox";
import styles from "./styles.module.css";

interface TodoListProps {
  filteredList: TodoProps[];
  itemsLeft: TodoProps[];
  todoList: TodoProps[];
  status: string;
  handleCheckboxChange(item: number): void;
  deleteTodo(item: number): void;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  setTodoList: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}

export function TodoList({
  filteredList,
  handleCheckboxChange,
  deleteTodo,
  itemsLeft,
  setStatus,
  setTodoList,
  todoList,
  status,
}: TodoListProps) {
  const statusItems = ["all", "active", "completed"];

  return (
    <main>
      <div className={styles.desktop}>
        <ul>
          {filteredList.map((todo) => {
            return (
              <li key={todo.id}>
                <div className={styles.listItem}>
                  <Checkbox onChange={() => handleCheckboxChange(todo.id)} />
                  <div className={todo.completed ? styles.completed : ""}>
                    {todo.description}
                  </div>
                </div>
                <img
                  className={styles.iconCross}
                  src={iconCross}
                  onClick={() => deleteTodo(todo.id)}
                  alt="Delete item icon"
                />
              </li>
            );
          })}
        </ul>

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
      </div>

      <div className={styles.statusMobile}>
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
    </main>
  );
}
