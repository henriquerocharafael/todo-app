import { ChangeEvent, useEffect, useState } from "react";
import iconCross from "./assets/images/icon-cross.svg";
import iconSun from "./assets/images/icon-sun.svg";

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
  const [filteredList, setFilteredList] = useState<TodoListProps[]>([])
  const [status, setStatus] = useState("all")

  useEffect(() => {
    handleFilter()
  }, [todoList, status])

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setTodoItem(event.target.value);
  }

  function handleCheckboxChange(item: number) {
    const updatedList = todoList.map((todo) => {
      return todo.id === item ? { ...todo, completed: !todo.completed } : todo;
    });

    setTodoList(updatedList);
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

  function handleFilter() {
    switch (status) {
      case "completed":
        setFilteredList(todoList.filter(todo => todo.completed === true))
        break;
      case "active":
        setFilteredList(todoList.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredList(todoList)
        break;
    }
  }

  function showAll() {
    setStatus("all")
  }

  function showActive() {
    setStatus("active")
  }

  function showCompleted() {
    setStatus("completed")
  }

  function clearCompleted() {
    setTodoList(todoList.filter(todo => todo.completed === false))
  }

  return (
    <div className="wrapper">
      <header>
        <div className="title-wrapper">
          <h1>todo</h1>
          <img src={iconSun} alt="Theme icon" />
        </div>

        <div className="input-wrapper">
          <button className="add-todo" onClick={addTodo}></button>
          <input
            className="input-text"
            value={todoItem}
            onChange={handleInputChange}
            placeholder="Create a new todo..."
          />
        </div>
      </header>

      <main>
        <ul>
          {filteredList.map((todo) => {
            return (
              <li key={todo.id}>
                <div>
                  <input
                    className="checkbox"
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
                  className="icon-cross"
                  src={iconCross}
                  onClick={() => deleteTodo(todo.id)}
                  alt="Delete item icon"
                />
              </li>
            );
          })}
        </ul>

        <div className="list-status">
          <div className="items">
            <span>0</span> items left
          </div>
          <div className="status">
            <span onClick={showAll}>all</span>
            <span onClick={showActive}>active</span>
            <span onClick={showCompleted}>completed</span>
          </div>
          <div className="clear">
            <span onClick={clearCompleted}>clear completed</span>
          </div>
        </div>
      </main>
      <footer>Drag and drop to reorder list</footer>
    </div>
  );
}
