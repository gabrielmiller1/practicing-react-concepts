import { useState } from 'react';
import './App.module.css'
import { Header } from './components/Header/Header'
import { Tasks } from './components/Tasks/Tasks'

export interface ITask {
  id: number;
  title: string;
  isCompleted: boolean;
}

function App() {

  const [tasks, setTasks] = useState<ITask[]>([{
    id: 0,
    title: 'Loren ipson',
    isCompleted: false,
  }])

  return (
    <>
      <Header />
      <Tasks tasks={tasks}/>
    </>
  )
}

export default App
