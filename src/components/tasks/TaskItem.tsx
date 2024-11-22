import React from 'react';
import { Box, Checkbox, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { toggleTask } from '../../stores/tasksSlice';

interface TaskItemProps {
  task: { id: number; title: string; completed: boolean };
}

const TaskItem = ({ task }: TaskItemProps) => {
  const dispatch = useDispatch();

  return (
    <Box display="flex" alignItems="center">
      <Checkbox
        checked={task.completed}
        onChange={() => dispatch(toggleTask(task.id))}
      />
      <Typography
        sx={{
          textDecoration: task.completed ? 'line-through' : 'none',
          color: task.completed ? 'gray' : 'black',
        }}
      >
        {task.title}
      </Typography>
    </Box>
  );
};

export default TaskItem;
