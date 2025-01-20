import React from 'react';
import { List, ListItem, ListItemText, Checkbox } from '@mui/material';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  toggleTaskCompletion: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTaskCompletion }) => (
  <List>
    {tasks.map(task => (
      <ListItem key={task.id}>
        <Checkbox
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
        />
        <ListItemText primary={task.text} />
      </ListItem>
    ))}
  </List>
);

export default TaskList;