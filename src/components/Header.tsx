import React from 'react';
import { Box, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box
      sx={{
        color: 'white',
        textAlign: 'center',
        py: 2,
        backgroundImage: 'url(/header_bg.png)',
      }}
    >
      <Typography variant="h4" fontWeight="bold">
        Financer.com
      </Typography>
      <Typography variant="subtitle1">Interview Exam</Typography>
      <Typography variant="subtitle2">Candidate: Andrei Klopov</Typography>
    </Box>
  );
};

export default Header;
