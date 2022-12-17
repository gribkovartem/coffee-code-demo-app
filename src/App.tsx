import { TodoContainer } from "./todo-container/TodoContainer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header>
        <h1 className="logo">Todo List 🗒</h1>
      </header>
      <section>
        <TodoContainer />
      </section>
    </div>
  );
}

export default App;
