import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

interface TaskInputProps {
  addTask: (text: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ addTask }) => {
  const [taskText, setTaskText] = useState<string>('');

  const handleAddTask = () => {
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText('');
    }
  };

  return (
    <div>
      <TextField
        label="New Task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
      />
      <Button onClick={handleAddTask} variant="contained" color="primary">
        Add Task
      </Button>
    </div>
  );
};

export default TaskInput;