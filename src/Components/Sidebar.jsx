import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ReportIcon from '@mui/icons-material/Report';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import BusinessIcon from '@mui/icons-material/Business';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useMediaQuery } from '@mui/material';

const Sidebar = () => {
  const isSmallScreen = useMediaQuery('(max-width: 800px)'); // Adjust width as needed

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon /> },
    { text: 'Staff', icon: <PeopleIcon /> },
    { text: 'Supplier', icon: <LocalShippingIcon /> },
    { text: 'Inventory', icon: <InventoryIcon /> },
    { text: 'Order', icon: <AssignmentIcon /> },
    { text: 'Reports', icon: <ReportIcon /> },
    { text: 'Ledger', icon: <ReceiptIcon /> },
    { text: 'Company Info', icon: <BusinessIcon /> },
    { text: 'Settings', icon: <SettingsIcon /> },
    { text: 'Notifications', icon: <NotificationsIcon /> },
    { text: 'Logout', icon: <ExitToAppIcon /> },
  ];

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: isSmallScreen ? 80 : 240,// Adjust width based on screen size
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: isSmallScreen ? 80 : 240,
          boxSizing: 'border-box',
          backgroundColor: '#f7f7f7',
        },
      }}
    >
      <Box 
        sx={{ 
          textAlign: 'center', 
          p: 2, 
          fontWeight: 'bold', 
          backgroundColor: '#1976d2', 
          color: 'white',
        }}
      >
      <Typography variant="h6">
        {isSmallScreen ? 'ERP' : 'ERP System'}
      </Typography>
      </Box>

      <List>
        {menuItems.map(( item, index ) => (
          <ListItem 
            button 
            key={index} 
            sx={{ '&:hover': { backgroundColor: '#e0e0e0' }, justifyContent: isSmallScreen ? 'center' : 'center' }}
          >
            <ListItemIcon sx={{ color: '#1976d2', minWidth: 'auto', marginRight:'10px', marginBottom: isSmallScreen ? '9px':'' }}>{item.icon}</ListItemIcon>
            {!isSmallScreen && <ListItemText primary={ item.text} />} {/* Hide text on small screens */}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
