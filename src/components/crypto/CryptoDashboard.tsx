import React from 'react';
import { Box } from '@mui/material';
import DoughnutChart from './DoughnutChart';
import CryptoDetails from './CryptoDetails';

const CryptoDashboard = () => {
  return (
    <Box>
      <DoughnutChart />
      <CryptoDetails />
    </Box>
  );
};

export default CryptoDashboard;
