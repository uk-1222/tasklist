import type { Task } from "../App";
import { ListItem } from "./ListItem";

interface Props {
  items: Task[];
  onDelete: (key: number) => void;
  onSelect: (key: number) => void;
  query: string;
}

const List = ({ items, onDelete, onSelect, query }: Props) => {
  const filterByQuery = (item: Task) => {
    return item.name.includes(query);
  };

  const filteredItems = items.filter(filterByQuery);

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
      {filteredItems.map((item) => (
        <ListItem
          key={item.key}
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
