import { FC, SyntheticEvent, useState } from "react";
import { GeneralProps } from "../../../common.types";
import { Todo } from "../../../entities";
import "./TodoForm.css";

interface Props extends GeneralProps {
  onCreate: (todo: Todo) => void;
  onClose: () => void;
}

export const TodoForm: FC<Props> = ({ onCreate, onClose, ...generalProps }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreate({
      id: 0,
      title,
      description,
      createdAt: new Date(),
    });
    setTitle("");
    setDescription("");
  };

  return (
    <form className="todo-form" onSubmit={handleCreate} {...generalProps}>
      <input
        type="text"
        name="title"
        placeholder="Тудушка"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="todo-form__description"
        name="description"
        placeholder="Описание"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="todo-form__submit-button" type="submit">
        Сохранить
      </button>
      <button
        className="todo-form__close-button"
        type="button"
        onClick={onClose}
      >
        ❌
      </button>
    </form>
  );
};
