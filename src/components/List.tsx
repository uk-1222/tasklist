import type { Task } from "../App";
import { ListItem } from "./ListItem";

interface Props {
  items: Task[];
  onDelete: (id: number) => void;
}

const List = ({ items, onDelete }: Props) => {
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
          onClick={() => console.log(item.name)}
          onDelete={() => onDelete(item.id)}
        ></ListItem>
      ))}
    </div>
  );
};

export default List;
