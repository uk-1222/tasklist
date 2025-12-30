import { Trash2 } from "lucide-react";
import { Check } from "lucide-react";

interface Props {
  name: string;
  desc: string;
  onClick: () => void;
  onDelete: () => void;
}

export const ListItem = ({ name, desc, onClick, onDelete }: Props) => {
  return (
    <div
      className="
            bg-gray-100
            rounded-sm
            mb-2
            flex
            flex-row
            justify-stretch
            focus:bg-gray-400
        "
    >
      <button
        onClick={onDelete}
        className="
        bg-transparent
        rounded-l-sm
        h-fill
        w-[5%]
        flex
        items-center
        justify-center
        hover:w-[10%]
        hover:transition-all duration-500
        hover:bg-emerald-500
        text-gray-400
        hover:text-white
        cursor-pointer
      "
      >
        <Check size={20} />
      </button>
      <div
        onClick={onClick}
        className="p-3 w-[90%] hover:text-blue-700 hover:transition-all duration-100 hover:cursor-pointer"
      >
        <h1
          className="
                font-semibold
                text-md
                pb-2
                
            "
        >
          {name}
        </h1>
        <p
          className="
            text-sm
            pb-1
        "
        >
          {desc}
        </p>
      </div>
      <button
        onClick={onDelete}
        className="
        bg-transparent
        rounded-r-sm
        h-fill
        w-[5%]
        flex
        items-center
        justify-center
        hover:w-[10%]
        hover:transition-all duration-500
        hover:bg-red-500
        text-gray-400
        hover:text-white
        cursor-pointer
      "
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
};
