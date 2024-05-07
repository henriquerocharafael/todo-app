import iconSun from "./assets/images/icon-sun.svg"
import { Checkbox } from "./components/Checkbox/index"

export function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="title-wrapper">
          <h1>todo</h1>
          <img src={iconSun} />
        </div>

        <div className="input-wrapper">
          <Checkbox />
          <input className="input-text" placeholder="Create a new todo..." />
        </div>
      </header>

      <main>
        <ul>
          <li><Checkbox />Jog around the park 3x</li>
          <li><Checkbox />10 minutes meditation</li>
          <li><Checkbox />Read for 1 hour</li>
          <li><Checkbox />Pick up groceries</li>
          <li><Checkbox />Complete Todo App on Frontend Mentor</li>

          <div className="list-status">
            <div className="items">
              <span>5</span> items left
            </div>
            <div className="status">
              <span>all</span>
              <span>active</span>
              <span>completed</span>
            </div>
            <div className="clear">
              <span>
                clear completed
              </span>
            </div>
          </div>
        </ul>
      </main>

      <footer>
        Drag and drop to reorder list
      </footer>
    </div>
  );
}
