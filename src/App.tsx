import React, { useState } from 'react';
import { Container } from '@mui/material';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const allTasks = tasks;
  const activeTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <Container>
      <h1>ToDo List</h1>
      <TaskInput addTask={addTask} />
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
          <h2>All Tasks</h2>
          <TaskList tasks={allTasks} toggleTaskCompletion={toggleTaskCompletion} />
        </div>
        <div>
          <h2>Active Tasks</h2>
          <TaskList tasks={activeTasks} toggleTaskCompletion={toggleTaskCompletion} />
        </div>
        <div>
          <h2>Completed Tasks</h2>
          <TaskList tasks={completedTasks} toggleTaskCompletion={toggleTaskCompletion} />
        </div>
      </div>
    </Container>
  );
};

export default App;