import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Typography, Tooltip } from '@mui/material';
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
    { text: 'Supplier', icon: <LocalShippingIcon /> },
    { text: 'Inventory', icon: <InventoryIcon /> },
    { text: 'Order', icon: <AssignmentIcon /> },
    { text: 'Reports', icon: <ReportIcon /> },
    { text: 'Ledger', icon: <ReceiptIcon /> },
    { text: 'Company Info', icon: <BusinessIcon /> },
    { text: 'Settings', icon: <SettingsIcon /> },
    { text: 'Notifications', icon: <NotificationsIcon /> },
    { text: 'Staff', icon: <PeopleIcon /> },
    { text: 'Logout', icon: <ExitToAppIcon /> },
  ];

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: isSmallScreen ? 80 : 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: isSmallScreen ? 80 : 240,
          transition: 'opacity 0.3s',
          boxSizing: 'border-box',
          backgroundColor: 'white',
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
        {menuItems.map((item, index) => (
          <Tooltip key={index} title={item.text} placement="right" arrow disableHoverListener={!isSmallScreen}>
            <ListItem 
              button 
              sx={{ 
                '&:hover': { 
                  backgroundColor: '#f0f5f8',
                  color: '#317EB9', 
                  '& .MuiListItemIcon-root': { // Target the icon
                    color: '#317EB9',
                  },
                },
                color: 'black', 
                justifyContent: isSmallScreen ? 'center' : 'flex-start',
              }}
            >
              <ListItemIcon 
                sx={{ 
                  color: 'black', 
                  minWidth: 'auto', 
                  marginRight: isSmallScreen ? '0' : '10px', 
                  marginBottom: isSmallScreen ? '9px' : '' 
                }}
              >
                {item.icon}
              </ListItemIcon>
              {!isSmallScreen && <ListItemText primary={item.text} />} {/* Hide text on small screens */}
            </ListItem>
          </Tooltip>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
