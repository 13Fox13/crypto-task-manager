import React from 'react';
import { ButtonGroup, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../stores/tasksSlice';
import { RootState } from '../../stores/store';

const TaskFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.tasks.filter);

  return (
    <ButtonGroup fullWidth sx={{ mb: 2 }}>
      {['all', 'completed', 'incomplete'].map((status) => (
        <Button
          key={status}
          onClick={() => dispatch(setFilter(status as 'all' | 'completed' | 'incomplete'))}
          variant={filter === status ? 'contained' : 'outlined'}
        >
          {status.toUpperCase()}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default TaskFilter;
