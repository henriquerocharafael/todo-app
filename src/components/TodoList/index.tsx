import { TodoProps } from "../../App";
import iconCross from "../../assets/images/icon-cross.svg";
import { ListStatus } from "./list-status";
import styles from "./styles.module.css";

interface TodoListProps {
  filteredList: TodoProps[];
  itemsLeft: TodoProps[];
  todoList: TodoProps[];
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
}: TodoListProps) {
  return (
    <main>
      <ul>
        {filteredList.map((todo) => {
          return (
            <li key={todo.id}>
              <div>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  onChange={() => handleCheckboxChange(todo.id)}
                />
                <div
                  style={{
                    textDecoration: todo.completed ? "line-through" : "",
                  }}
                >
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
      />
    </main>
  );
}
