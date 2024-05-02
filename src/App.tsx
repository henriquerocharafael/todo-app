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

          {/* Custom Checkbox */}
          <Checkbox />

          <input className="input-text" placeholder="Create a new todo..." />
        </div>
      </header>

      <main>
        {/* Add dynamic number  */} items left 

        All 
        Active
        Completed Clear Completed

        Drag and drop to reorder list

        <div>
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </div>
      </main>
    </div>
  );
}
