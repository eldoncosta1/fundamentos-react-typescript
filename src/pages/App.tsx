import { useState } from "react";
import { Form } from "../components/Form";
import { List } from "../components/List";
import { Timer } from "../components/Timer";

import { Task } from "../types/Task";

import style from './app.module.scss';


function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selected, setSelected] = useState<Task | undefined>({} as Task);

  function handleSelectTask(taskSelected: Task) {
    setSelected(taskSelected);
    setTasks(oldTasks => oldTasks.map(task => ({
      ...task,
      selected: task.id === taskSelected.id ? true : false
    })))
  }

  function handleFinishedTask() {
    if (selected) {
      setSelected(undefined);
      setTasks(oldTasks =>
        oldTasks.map(task => {
          if (task.id === selected.id) {
            return {
              ...task,
              selected: false,
              finished: true
            }
          }
          return task;
        })
      )
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List
        tasks={tasks}
        selectedTask={handleSelectTask}
      />
      <Timer selected={selected} finishedTask={handleFinishedTask} />
    </div>
  );
}

export default App;
