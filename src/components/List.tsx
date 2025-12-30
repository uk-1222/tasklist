import type { Task } from "../App";
import { ListItem } from "./ListItem";

interface Props {
  items: Task[];
  onDelete: (key: number) => void;
  onSelect: (key: number) => void;
}

const List = ({ items, onDelete, onSelect }: Props) => {
  return (
    <div
      className="
            bg-gray-200
            rounded-sm
            size-full
            p-2
            overflow-scroll
        "
    >
      {items.map((item) => (
        <ListItem
          name={item.name}
          desc={item.desc}
          onClick={() => onSelect(item.key)}
          onDelete={() => onDelete(item.key)}
        ></ListItem>
      ))}
    </div>
  );
};

export default List;
