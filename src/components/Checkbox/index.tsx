import { useState } from "react";
import { IconCheck } from "./iconCheck"

export function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  function handleChange() {
    setIsChecked(!isChecked);
  }

  return (
    <label>
      <IconCheck isChecked={isChecked} />

      <input
        type="checkbox"
        onChange={handleChange}
      />
    </label>
  );
}
