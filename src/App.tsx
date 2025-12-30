import { useState } from "react";
import AddTaskModule from "./components/AddTaskModule";
import List from "./components/List";
import "./index.css";
import { TaskDetailsModule } from "./components/TaskDetailsModule";

export interface Task {
  key: number;
  name: string;
  desc: string;
}

function App() {
  const [Tasks, setTasks] = useState<Task[]>([]);
  const [currentTask, setCurr] = useState<Task | null>(null);

  const addTask = (name: string, desc: string) => {
    let key = Date.now();
    let newTask: Task = {
      key,
      name,
      desc,
    };
    // append newTask
    setTasks((prev) => [...prev, newTask]);
    !currentTask && setCurr(newTask);
  };

  const selectTask = (key: number) => {
    let found = Tasks.find((task) => task.key == key);
    found && setCurr(found);
  };

  const deleteTask = (key: number) => {
    setTasks((prev) => prev.filter((task) => task.key !== key));
    currentTask?.key === key && setCurr(null);
  };

  return (
    <>
      <div className="flex flex-row">
        <div className="w-[30vw]">
          <div className="h-[40vh] bg-gray-300 flex-1 p-1">
            <AddTaskModule onAdd={addTask}></AddTaskModule>
          </div>
          <div className="h-[60vh] bg-gray-300 p-1">
            <div className="size-full">
              {currentTask && (
                <TaskDetailsModule
                  task={currentTask}
                  onDelete={() => deleteTask(currentTask.key)}
                />
              )}
            </div>
          </div>
        </div>
        <div className="w-[70vw]">
          <div className="h-[7vh] bg-gray-300 p-2"></div>
          <div className="h-[93vh] bg-gray-300 p-1">
            <List
              items={Tasks}
              onDelete={deleteTask}
              onSelect={selectTask}
            ></List>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
