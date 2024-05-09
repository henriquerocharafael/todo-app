import { ChangeEvent, useState } from "react";
import iconCross from "./assets/images/icon-cross.svg";
import iconSun from "./assets/images/icon-sun.svg";
import { Checkbox } from "./components/Checkbox/index";
import { ListStatus } from "./components/ListStatus";

export function App() {
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setTodoItem(event.target.value);
  }

  function handleClick() {
    setTodoList([...todoList, todoItem])
    setTodoItem("")
  }

  return (
    <div className="wrapper">
      <header>
        <div className="title-wrapper">
          <h1>todo</h1>
          <img src={iconSun} />
        </div>

        <div className="input-wrapper">
          <button className="add-todo" onClick={handleClick}></button>
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
          {todoList.map((todo, idx) => {
            return (
              <li key={idx}>
                <div>
                  <Checkbox />
                  {todo}
                </div>
                <img className="icon-cross" src={iconCross} />
              </li>
            );
          })}
        </ul>
        <ListStatus />
      </main>
      <footer>Drag and drop to reorder list</footer>
    </div>
  );
}
