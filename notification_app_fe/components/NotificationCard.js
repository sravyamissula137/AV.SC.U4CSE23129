import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

const typeColors = {
  Placement: 'success',
  Result: 'info',
  Event: 'warning',
};

const NotificationCard = ({ notification }) => {
  const type = notification.Type || 'Unknown';
  
  return (
    <Card 
      sx={{ 
        mb: 2, 
        transition: 'all 0.2s ease-in-out',
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        '&:hover': {
          boxShadow: '0 8px 16px rgba(0,0,0,0.08)',
          transform: 'translateY(-2px)',
          borderColor: 'primary.main'
        }
      }}
    >
      <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
          <Chip 
            label={type} 
            color={typeColors[type] || 'default'} 
            size="small" 
            sx={{ fontWeight: 600, px: 1 }}
          />
          <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 500 }}>
            {notification.Timestamp && !isNaN(new Date(notification.Timestamp).getTime()) 
              ? new Date(notification.Timestamp).toLocaleString(undefined, {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                }) 
              : 'Invalid Date'}
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ color: 'text.primary', lineHeight: 1.6 }}>
          {notification.Message}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NotificationCard;
