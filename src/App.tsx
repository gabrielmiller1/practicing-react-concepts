import { useState } from 'react';
import './App.module.css'
import { Header } from './components/Header/Header'
import { Tasks } from './components/Tasks/Tasks'

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {

  function addTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ]);
  }

  function deleteTaskById(taskId: string){
    const newTasksList = tasks.filter( task => task.id !== taskId);
    setTasks(newTasksList);
  }

  const [tasks, setTasks] = useState<ITask[]>([]);

  return (
    <>
      <Header onAddTask={addTask}/>
      <Tasks 
        tasks={tasks} 
        onDelete={deleteTaskById}
      />
    </>
  )
}

export default App
