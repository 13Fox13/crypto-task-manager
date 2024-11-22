import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addTask } from '../../stores/tasksSlice';

const TaskForm = () => {
  const [newTask, setNewTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (newTask.trim()) {
      dispatch(addTask({ id: Date.now(), title: newTask, completed: false }));
      setNewTask('');
    }
  };

  return (
    <Box display="flex" gap={1}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="New Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <Button variant="contained" onClick={handleAddTask}>
        ADD TASK
      </Button>
    </Box>
  );
};

export default TaskForm;
