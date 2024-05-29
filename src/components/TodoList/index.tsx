import { TodoProps } from "../../App";
import iconCross from "../../assets/images/icon-cross.svg";
import { Checkbox } from "./checkbox";
import { ListStatus } from "./list-status";
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
  return (
    <main>
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

      <ListStatus
        setStatus={setStatus}
        itemsLeft={itemsLeft}
        todoList={todoList}
        setTodoList={setTodoList}
        status={status}
      />
    </main>
  );
}
