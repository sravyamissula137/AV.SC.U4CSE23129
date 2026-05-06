import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutlined';

const ErrorState = ({ message, onRetry }) => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        py: 12, 
        textAlign: 'center',
        px: 2
      }}
    >
      <ErrorOutlineIcon color="error" sx={{ fontSize: 72, mb: 3, opacity: 0.9 }} />
      <Typography variant="h5" color="text.primary" gutterBottom fontWeight={600}>
        Oops! Something went wrong
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 450, lineHeight: 1.6 }}>
        {message || "We encountered an error while fetching the notifications. Please try again later."}
      </Typography>
      {onRetry && (
        <Button 
          variant="contained" 
          color="primary" 
          onClick={onRetry} 
          disableElevation
          size="large"
          sx={{ 
            borderRadius: 8,
            px: 4,
            textTransform: 'none',
            fontWeight: 600
          }}
        >
          Try Again
        </Button>
      )}
    </Box>
  );
};

export default ErrorState;
