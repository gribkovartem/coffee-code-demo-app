import { FC, useState } from "react";
import { TODOS } from "../data";
import { Todo } from "../entities";
import { TodoForm, TodoItem } from "./components";
import "./TodoContainer.css";

let id = 4;
function getId() {
  return ++id;
}

export const TodoContainer: FC = () => {
  const [todos, setTodos] = useState<Todo[]>(TODOS);
  const [showForm, setShowForm] = useState(false);

  function handleAddTodo(todo: Todo) {
    setTodos((prev) => [...prev, { ...todo, id: getId() }]);
    setShowForm(false);
  }

  function handleDeleteTodo(todoId: number) {
    setTodos((prev) => prev.filter(({ id }) => id !== todoId));
  }

  function handleShowForm() {
    setShowForm(true);
  }

  function handleCloseForm() {
    setShowForm(false);
  }

  return (
    <>
      <button onClick={handleShowForm}>➕ Добавить дело</button>
      <div className="todo-list">
        {todos.length ? (
          todos
            .sort((itemPrev, itemNext) => itemNext.id - itemPrev.id)
            .map((todo) => (
              <TodoItem
                className="todo-list__item"
                key={todo.id}
                item={todo}
                onDelete={handleDeleteTodo}
              />
            ))
        ) : (
          <p className="todo-list__empty">Дел на сегодня нет...</p>
        )}
      </div>
      <div
        className={["modal", showForm ? "active" : ""]
          .filter(Boolean)
          .join(" ")}
      >
        <header>
          <h1 className="logo">Новая запись</h1>
        </header>
        <TodoForm
          className="todo-form"
          onCreate={handleAddTodo}
          onClose={handleCloseForm}
        />
      </div>
    </>
  );
};
