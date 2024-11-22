import React from 'react';
import { Box } from '@mui/material';
import TaskFilter from './TaskFilter';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const TaskManager = () => {
  return (
    <Box>
      <TaskFilter />
      <TaskForm />
      <TaskList />
    </Box>
  );
};

export default TaskManager;
