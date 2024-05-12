import { ChangeEvent, useState } from "react";
import iconCross from "./assets/images/icon-cross.svg";
import iconSun from "./assets/images/icon-sun.svg";
import { Checkbox } from "./components/Checkbox/index";
import { ListStatus } from "./components/ListStatus";

interface TodoListProps {
  id: number;
  description: string;
  completed: boolean;
}

export function App() {
  // Random number between 0 and 1000
  const id = Math.floor(Math.random() * 1000) + 1;

  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState<TodoListProps[]>([]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setTodoItem(event.target.value);
  }

  function addTodo() {
    setTodoList([
      ...todoList,
      { id: id, description: todoItem, completed: false },
    ]);
    setTodoItem("");
  }

  function deleteTodo(item: number) {
    const updatedTodoList = todoList.filter((todo) => {
      return item !== todo.id;
    });

    setTodoList(updatedTodoList);
  }

  return (
    <div className="wrapper">
      <header>
        <div className="title-wrapper">
          <h1>todo</h1>
          <img src={iconSun} />
        </div>

        <div className="input-wrapper">
          <button className="add-todo" onClick={addTodo}></button>
          <input
            className="input-text"
            value={todoItem}
            onChange={handleChange}
            placeholder="Create a new todo..."
          />
        </div>
      </header>

      <main>
        <ul>
          {todoList.map((todo) => {
            return (
              <li key={todo.id}>
                <div>
                  <Checkbox />
                  {todo.description}
                </div>
                <img
                  className="icon-cross"
                  src={iconCross}
                  onClick={() => deleteTodo(todo.id)}
                />
              </li>
            );
          })}
        </ul>
        <ListStatus itemsLeft={todoList.length} />
      </main>
      <footer>Drag and drop to reorder list</footer>
    </div>
  );
}
