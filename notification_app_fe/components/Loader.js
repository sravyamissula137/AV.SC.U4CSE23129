import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        py: 12,
        width: '100%'
      }}
    >
      <CircularProgress color="primary" size={48} thickness={4} />
    </Box>
  );
};

export default Loader;
