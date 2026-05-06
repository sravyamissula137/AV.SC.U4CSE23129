import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const filters = ['All', 'Placement', 'Result', 'Event'];

const FilterBar = ({ currentFilter, onFilterChange }) => {
  return (
    <Box sx={{ mb: 3, display: 'flex', overflowX: 'auto', pb: 1, pt: 2 }}>
      <Stack direction="row" spacing={1.5}>
        {filters.map((filter) => (
          <Button
            key={filter}
            variant={currentFilter === filter ? 'contained' : 'outlined'}
            color={currentFilter === filter ? 'primary' : 'inherit'}
            onClick={() => onFilterChange(filter)}
            disableElevation
            sx={{ 
              borderRadius: 8, 
              textTransform: 'none', 
              minWidth: 'auto', 
              px: 3,
              fontWeight: currentFilter === filter ? 600 : 500,
              borderColor: currentFilter === filter ? 'primary.main' : 'divider',
              color: currentFilter === filter ? 'white' : 'text.secondary',
              '&:hover': {
                backgroundColor: currentFilter === filter ? 'primary.dark' : 'action.hover'
              }
            }}
          >
            {filter}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default FilterBar;
