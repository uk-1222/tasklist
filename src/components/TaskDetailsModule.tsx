import type { Task } from "../App";

interface Props {
  task?: Task;
  onDelete?: () => void;
}

export const TaskDetailsModule = ({ task, onDelete = () => {} }: Props) => {
  return (
    <div className="size-full py-3 px-5 bg-gray-200 flex-col justify-stretch">
      <div className="h-[85%]">
        <h1 className="text-2xl font-semibold pb-3 pt-2">
          {task && task.name}
        </h1>
        <p className="text-md pl-2 py-1 h-[80%] rounded-sm overflow-auto wrap-break-word">
          {task && task.desc}
        </p>
      </div>
      <div className="h-[20%] flex-col flex">
        <button
          onClick={onDelete}
          className="rounded-sm bg-emerald-500 w-[40%] p-1 text-white font-semibold mb-2
          hover:bg-emerald-700 hover:transition-all duration-150 cursor-pointer
          "
        >
          Mark Complete
        </button>
        <button
          onClick={onDelete}
          className="
            rounded-sm bg-red-500 w-[40%] p-1 text-white font-semibold
            hover:bg-red-700 hover:transition-all duration-150 cursor-pointer
        "
        >
          Delete
        </button>
      </div>
    </div>
  );
};
