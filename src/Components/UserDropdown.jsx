import React, { useState } from 'react';
import { Avatar, Menu, MenuItem, IconButton, Typography } from '@mui/material';
import { AccountCircle, Settings, ExitToApp } from '@mui/icons-material';

const UserDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
  style={{
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    top: 50,
    right: 0,
    margin: '16px', // Optional: adds spacing from the top and right edges
  }}
>
<IconButton
  onClick={handleClick}
  sx={{
    display: 'flex',
    alignItems: 'center',
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: 'transparent', // Hover effect
    },
  }}
>
  <Avatar alt="Kaveen Nermal" src="/path-to-avatar.jpg" />
  <Typography variant="body1" sx={{ marginLeft: '8px' }}>
    Kaveen Nermal
  </Typography>
</IconButton>
  <Menu
    anchorEl={anchorEl}
    open={Boolean(anchorEl)}
    onClose={handleClose}
    PaperProps={{
      elevation: 3,
      style: {
        width: '200px',
      },
    }}
  >
    <MenuItem onClick={handleClose}>
      <AccountCircle style={{ marginRight: '10px' }} />
      Profile
    </MenuItem>
    <MenuItem onClick={handleClose}>
      <Settings style={{ marginRight: '10px' }} />
      Settings
    </MenuItem>
    <MenuItem onClick={handleClose}>
      <ExitToApp style={{ marginRight: '10px' }} />
      Logout
    </MenuItem>
  </Menu>
</div>

  );
};

export default UserDropdown;
