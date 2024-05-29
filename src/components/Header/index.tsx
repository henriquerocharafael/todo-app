import { ChangeEvent } from "react";
import iconSun from "../../assets/images/icon-sun.svg";
import styles from "./styles.module.css";

interface HeaderProps {
  addTodo(): void;
  handleInputChange(event: ChangeEvent<HTMLInputElement>): void;
  todoItem: string;
}

export function Header({ addTodo, todoItem, handleInputChange }: HeaderProps) {
  return (
    <header>
      <div className={styles.titleWrapper}>
        <h1>todo</h1>
        <img src={iconSun} alt="Theme icon" />
      </div>

      <div className={styles.inputWrapper}>
        <button className={styles.addTodo} onClick={addTodo}></button>
        <input
          className={styles.inputText}
          value={todoItem}
          onChange={handleInputChange}
          placeholder="Create a new todo..."
        />
      </div>
    </header>
  );
}