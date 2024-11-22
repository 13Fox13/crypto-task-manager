import React from 'react';
import { Box, Typography } from '@mui/material';
import useCryptoData from '../../hooks/useCryptoData';

const CryptoDetails = () => {
  const cryptoData: Record<string, { usd: number }> = useCryptoData() || {};

  return (
    <Box>
      {cryptoData &&
        Object.entries(cryptoData).map(([name, details]: [string, { usd: number }]) => (
          <Typography key={name}>
            {name.toUpperCase()}: Price: ${details.usd.toFixed(2)}
          </Typography>
        ))}
    </Box>
  );
};

export default CryptoDetails;
