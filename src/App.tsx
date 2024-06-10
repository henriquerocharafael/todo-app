import { ChangeEvent, useEffect, useState } from "react";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";

export interface TodoProps {
  id: number;
  description: string;
  completed: boolean;
}

export function App() {
  // Random number between 0 and 1000
  const id = Math.floor(Math.random() * 1000) + 1;

  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState<TodoProps[]>([]);
  const [filteredList, setFilteredList] = useState<TodoProps[]>([]);
  const [itemsLeft, setItemsLeft] = useState<TodoProps[]>([]);
  const [status, setStatus] = useState("all");

  useEffect(() => {
    handleFilter();
    setItemsLeft(todoList.filter((todo) => todo.completed === false));
  }, [todoList, status]);

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
        setFilteredList(todoList.filter((todo) => todo.completed === true));
        break;
      case "active":
        setFilteredList(todoList.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredList(todoList);
        break;
    }
  }

  return (
    <>
      <div className="wrapper">
        <Header
          addTodo={addTodo}
          todoItem={todoItem}
          handleInputChange={handleInputChange}
        />
        <TodoList
          filteredList={filteredList}
          handleCheckboxChange={handleCheckboxChange}
          deleteTodo={deleteTodo}
          itemsLeft={itemsLeft}
          setStatus={setStatus}
          todoList={todoList}
          setTodoList={setTodoList}
          status={status}
        />
        <footer>Drag and drop to reorder list</footer>
      </div>
    </>
  );
}
