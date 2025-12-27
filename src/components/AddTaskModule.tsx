import TextInput from "./TextInput";
import { useState } from "react";

interface Props {
  onAdd: (name: string, desc: string) => void;
}

const AddTaskModule = ({ onAdd }: Props) => {
  let [name, setName] = useState("");
  let [desc, setDesc] = useState("");

  const submit = (
    name: string,
    desc: string,
    onAdd: (name: string, desc: string) => void
  ) => {
    onAdd(name, desc);
  };

  return (
    <>
      <div className="size-full bg-gray-200 py-2 px-4">
        <h1 className="pb-2 font-bold">Add Task</h1>
        <h3 className="py-2">Name: </h3>
        <div className="w-full h-8">
          <TextInput onEnter={setName} />
        </div>
        <h3 className="py-2">Description: </h3>
        <div className="w-full h-16">
          <TextInput onEnter={setDesc} />
        </div>
        <div className="flex flex-row justify-center">
          <button
            onClick={() => submit(name, desc, onAdd)}
            className="bg-blue-500 w-fit h-8 px-2 my-5 text-white font-semibold overflow-clip hover:bg-blue-700 active:bg-indigo-800 rounded-sm"
          >
            Add to List
          </button>
        </div>
      </div>
    </>
  );
};

export default AddTaskModule;
