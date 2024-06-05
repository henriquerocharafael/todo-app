import { ChangeEvent, useState } from "react";
import iconSun from "../../assets/images/icon-sun.svg";
import iconMoon from "../../assets/images/icon-moon.svg";
import styles from "./styles.module.css";

interface HeaderProps {
  addTodo(): void;
  handleInputChange(event: ChangeEvent<HTMLInputElement>): void;
  todoItem: string;
}

export function Header({ addTodo, todoItem, handleInputChange }: HeaderProps) {
  const disabled = todoItem.length <= 0;
  const [themeIcon, setThemeIcon] = useState(iconSun);

  function changeTheme() {
    const html = document.querySelector("html");
    html?.classList.toggle("light-mode");

    setThemeIcon(themeIcon == iconSun ? iconMoon : iconSun);
  }

  return (
    <header>
      <div className={styles.titleWrapper}>
        <h1>todo</h1>
        <img src={themeIcon} alt="Theme icon" onClick={changeTheme} />
      </div>

      <div className={styles.inputWrapper}>
        <button
          className={`${styles.addTodo} ${disabled ? styles.disabled : ""}`}
          disabled={disabled ? true : false}
          onClick={addTodo}
        ></button>
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
