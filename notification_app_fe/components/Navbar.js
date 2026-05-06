import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import RefreshIcon from '@mui/icons-material/Refresh';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const Navbar = ({ notificationCount = 0, onRefresh }) => {
  return (
    <AppBar position="sticky" elevation={2} sx={{ backgroundColor: '#ffffff', color: '#333' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Box 
              sx={{ 
                bgcolor: 'primary.main', 
                color: 'white', 
                p: 1, 
                borderRadius: 1,
                mr: 2,
                display: 'flex'
              }}
            >
              <NotificationsIcon />
            </Box>
            <Typography variant="h6" component="div" sx={{ fontWeight: 700, letterSpacing: '-0.5px' }}>
              Notifications
            </Typography>
          </Box>
          <IconButton color="primary" onClick={onRefresh} sx={{ mr: 1 }} aria-label="refresh">
            <RefreshIcon />
          </IconButton>
          <IconButton color="primary" aria-label="notifications">
            <Badge badgeContent={notificationCount} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
