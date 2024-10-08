import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Typography, Tooltip, useTheme, useMediaQuery } from '@mui/material';
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

const Sidebar = () => {
  const theme = useTheme(); // Access the current theme
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
          transition: 'width 0.3s, opacity 0.3s',
          boxSizing: 'border-box',
          backgroundColor: theme.palette.background.default, // Dynamic background based on theme
          color: theme.palette.text.primary, // Dynamic text color based on theme
        },
      }}
    >
      <Box 
        sx={{ 
          textAlign: 'center', 
          p: 2, 
          fontWeight: 'bold', 
          backgroundColor: theme.palette.primary.main, // Use theme primary color for header
          color: theme.palette.primary.contrastText, // Use contrast text color for header
        }}
      >
        <Typography variant="h6">
          {isSmallScreen ? 'ERP' : 'ERP System'}
        </Typography>
      </Box>

      <List>
        {menuItems.map((item, index) => (
          <Tooltip 
            key={index} 
            title={item.text} 
            placement="right" 
            arrow 
            disableHoverListener={!isSmallScreen} // Only show tooltip on small screens
          >
            <ListItem 
              button 
              sx={{ 
                '&:hover': { 
                  backgroundColor: theme.palette.action.hover, // Hover background color from theme
                  color: theme.palette.primary.main, // Change text color on hover
                  '& .MuiListItemIcon-root': { // Target icon color on hover
                    color: theme.palette.primary.main,
                  },
                },
                color: theme.palette.text.primary, // Default text color
                justifyContent: isSmallScreen ? 'center' : 'flex-start',
              }}
            >
              <ListItemIcon 
                sx={{ 
                  color: theme.palette.text.primary, // Default icon color
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
