import React from 'react';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

const PaginationControls = ({ page, totalPages, limit, onPageChange, onLimitChange }) => {
  return (
    <Box 
      sx={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        mt: 4, 
        pt: 2, 
        borderTop: 1, 
        borderColor: "divider",
        backgroundColor: 'background.paper',
        borderRadius: 2,
        boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
      }}
    >
      <Pagination 
        count={totalPages || 1} 
        page={page} 
        onChange={(e, value) => onPageChange(value)} 
        color="primary" 
        shape="rounded"
        size="large"
      />
      
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography variant="body2" color="text.secondary" fontWeight={500}>
          Items per page:
        </Typography>
        <FormControl size="small">
          <Select
            value={limit}
            onChange={(e) => onLimitChange(e.target.value)}
            sx={{ 
              borderRadius: 2,
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'divider',
              }
            }}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default PaginationControls;
