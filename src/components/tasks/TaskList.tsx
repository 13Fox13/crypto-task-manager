import React from 'react';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../stores/store';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks, filter } = useSelector((state: RootState) => state.tasks);

  const filteredTasks = tasks.filter((task) =>
    filter === 'all' ? true : filter === 'completed' ? task.completed : !task.completed
  );

  return (
    <Grid container spacing={1} sx={{ mt: 2 }}>
      {filteredTasks.map((task) => (
        <Grid item xs={12} key={task.id}>
          <TaskItem task={task} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TaskList;
