import { ComponentProps, useState } from "react";
import styles from "./styles.module.css";

interface CheckboxProps extends ComponentProps<"input"> {}

export function Checkbox({ ...props }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={styles.checkboxWrapper}>
      <label>
        <input
          {...props}
          type="checkbox"
          checked={isChecked}
          onClick={() => setIsChecked((prev) => !prev)}
        />
      </label>
    </div>
  );
}
