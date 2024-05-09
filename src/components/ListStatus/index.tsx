import styles from "./styles.module.css"

export function ListStatus() {
  return (
    <div className={styles.listStatus}>
      <div className={styles.items}>
        <span>5</span> items left
      </div>
      <div className={styles.status}>
        <span>all</span>
        <span>active</span>
        <span>completed</span>
      </div>
      <div className={styles.clear}>
        <span>clear completed</span>
      </div>
    </div>
  );
}
