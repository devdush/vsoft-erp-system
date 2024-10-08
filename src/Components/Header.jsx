import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Avatar, Box, useTheme } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {
  const theme = useTheme(); // Access the current theme
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: theme.palette.background.default, // Background color based on theme
        color: theme.palette.text.primary, // Text color based on theme
        boxShadow: 'none', 
        borderBottom: `1px solid ${theme.palette.divider}` // Border color based on theme
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" noWrap component="div" color={theme.palette.text.primary}>
            Welcome, Mr. Kaveen Nemal
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Today is Friday, 04th October 2024.
          </Typography>
        </Box>

        <IconButton color="inherit" sx={{ ml: 2 }}>
          <NotificationsIcon />
        </IconButton>

        <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
          <Avatar alt="Kaveen Nemal" src="/path-to-profile-image.jpg" />
          <Typography variant="body1" sx={{ ml: 1 }} color={theme.palette.text.primary}>
            Kaveen Nemal
          </Typography>
          <IconButton onClick={handleMenuOpen} sx={{ color: theme.palette.text.primary }}>
            <ArrowDropDownIcon />
          </IconButton>
        </Box>

        {/* Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          sx={{ mt: '45px' }}
        >
          <MenuItem onClick={handleMenuClose}>
            <PersonIcon sx={{ mr: 1 }} /> Profile
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <SettingsIcon sx={{ mr: 1 }} /> Settings
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <LogoutIcon sx={{ mr: 1 }} /> Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
