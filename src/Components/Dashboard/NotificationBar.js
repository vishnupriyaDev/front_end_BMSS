// src/components/NotificationCenter.js
import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const NotificationCenter = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'Bus 1 is running 10 minutes late.' },
    { id: 2, message: 'Route 2 has been changed due to road construction.' },
  ]);

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Notifications
      </Typography>
      <List>
        {notifications.map((notification) => (
          <ListItem key={notification.id}>
            <ListItemText primary={notification.message} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default NotificationCenter;