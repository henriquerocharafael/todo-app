import { useState } from "react";
import styles from "./styles.module.css"

export function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  function handleChange() {
    setIsChecked(!isChecked);
  }

  return (
    <label>
      <input
        className={styles.checkbox}
        type="checkbox"
        onChange={handleChange}
      />
      <span
        className={`checkbox ${isChecked ? "checkbox-active" : ""}`}
        // This element is purely decorative so
        // we hide it for screen readers
        aria-hidden="true"
      />
      Don't you dare to check me!
    </label>
  );
}
