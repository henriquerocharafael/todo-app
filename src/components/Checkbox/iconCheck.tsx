import styles from "./styles.module.css"

interface IconCheckProps {
  isChecked: boolean;
}

export function IconCheck(props: IconCheckProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles.checkbox} ${props.isChecked ? styles.checkbox_active : ""}`}
      // This element is purely decorative so
      // we hide it for screen readers
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
    >
      <g transform="translate(4, 6)">
        <path
          stroke={props.isChecked ? "#fff" : "none"}
          strokeWidth="2"
          d="M1 4.304L3.696 7l6-6"
        />
      </g>
    </svg>
  )
}
