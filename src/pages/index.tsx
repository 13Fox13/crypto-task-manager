import React from 'react';
import Header from '../components/Header';
import TaskManager from '../components/tasks/TaskManager';
import CryptoDashboard from '../components/crypto/CryptoDashboard';
import { Container, Grid } from '@mui/material';

export default function Home() {
  return (
    <Container>
      <Header />
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <TaskManager />
        </Grid>
        <Grid item xs={12} md={6}>
          <CryptoDashboard />
        </Grid>
      </Grid>
    </Container>
  );
}
