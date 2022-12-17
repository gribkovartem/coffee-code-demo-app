import { FC } from "react";
import { GeneralProps } from "../../../common.types";
import { Todo } from "../../../entities";
import "./TodoItem.css";

interface Props extends GeneralProps {
  item: Todo;
  onDelete: (id: number) => void;
}

export const TodoItem: FC<Props> = ({
  item: { id, title, description, createdAt },
  className,
  onDelete,
  ...generalProps
}) => {
  return (
    <div
      className={["item", className].filter(Boolean).join(" ")}
      {...generalProps}
    >
      <b className="item__title">{title}</b>
      <i className="item__description">{description}</i>
      <span className="item__date">
        {new Intl.DateTimeFormat("ru-RU", {
          dateStyle: "short",
          timeStyle: "short",
        }).format(createdAt)}
      </span>
      <button
        className="emoji item__delete-button"
        onClick={() => onDelete(id)}
      >
        🗑️
      </button>
    </div>
  );
};
