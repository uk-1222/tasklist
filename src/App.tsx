import { useState } from "react";
import AddTaskModule from "./components/AddTaskModule";
import List from "./components/List";
import "./index.css";
import { TaskDetailsModule } from "./components/TaskDetailsModule";

export interface Task {
  id: number;
  name: string;
  desc: string;
}

// extremely long string for testing
const ELSFT =
  "ghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbkghjkshsdjkdsjsandkjadsbk";

function App() {
  const [Tasks, setTasks] = useState<Task[]>([]);

  const addTask = (name: string, desc: string) => {
    let id = Date.now();
    let newTask: Task = {
      id,
      name,
      desc,
    };
    // append newTask
    setTasks((prev) => [...prev, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <>
      <div className="flex flex-row">
        <div className="w-[30vw]">
          <div className="h-[40vh] bg-gray-300 flex-1 p-1">
            <AddTaskModule onAdd={addTask}></AddTaskModule>
          </div>
          <div className="h-[60vh] bg-gray-300 p-1">
            <TaskDetailsModule name="Name" desc={ELSFT}></TaskDetailsModule>
          </div>
        </div>
        <div className="w-[70vw]">
          <div className="h-[7vh] bg-gray-300 p-2"></div>
          <div className="h-[93vh] bg-gray-300 p-1">
            <List items={Tasks} onDelete={deleteTask}></List>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
