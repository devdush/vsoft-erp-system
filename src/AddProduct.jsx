import React, { useState } from 'react';
import { Box, TextField, Typography, Select, MenuItem, FormControl, InputLabel, Button, Avatar, IconButton, Grid } from '@mui/material';
import { CameraAlt as CameraAltIcon, Brightness4, Brightness7 } from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function AddProduct() { 
  const [selectedItem, setSelectedItem] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [emailError, setEmailError] = useState(false);
  const [nicError, setNICError] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [photo,setPhoto] = useState(false);
  // Define light and dark themes
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      background: {
        default: '#ffffff',
        paper: '#f5f5f5',
      },
      text: {
        primary: '#000000',
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: '#121212',
        paper: '#333333',
      },
      text: {
        primary: '#ffffff',
      },
    },
  });

 
  const handlePhotoUpload = (event) => {
    setPhoto(URL.createObjectURL(event.target.files[0]));
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add form submit logic here
//     console.log('Form submitted');
//   };
 

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <h2>Add New Product</h2>
      
      <Box
        sx={{
          backgroundColor: 'background.default',
          padding: { xs: '20px', md: '50px' },
          display: '',
          justifyContent: 'center',
          maxWidth: 'auto',
        }}
      >
        
        <Box
          sx={{
            backgroundColor: 'background.paper',
            borderRadius: '12px',
            boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            width: 'auto',
            height: '400px',
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr 1.5fr',
            gap: '20px',
            alignItems: 'start',
          }}
        >
          {/* Theme Toggle Button */}
          <IconButton
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
            }}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>

          {/* Image Upload Section */}
          <Grid container spacing={1}>
            <Grid item xs={12} md={3} style={{ textAlign: 'center' }}>
              <input
                accept="image/*"
                id="upload-photo"
                type="file"
                style={{ display: 'none' }}
                onChange={handlePhotoUpload}
              />
              <label htmlFor="upload-photo">
                <IconButton component="span">
                  <Avatar
                    src={imagePreview || '/placeholder.png'} // Placeholder image
                    style={{ width: '150px', height: '150px' }}
                  />
                </IconButton>
              </label>
              <Typography variant="body2" style={{ marginTop: '10px' }}>
                Allowed format JPG, JPEG, and PNG <br />
                Max file size 2MB
              </Typography>
            </Grid>
          </Grid>

          {/* Input Fields */}
          <Box>
            <TextField
              label="Item Name"
              type="text"
              variant="outlined"
              required
              margin="normal"
              placeholder="Enter item name"
              fullWidth
              InputLabelProps={{ shrink: true }}
              sx={{
                marginBottom: '20px',
                '& .MuiFormLabel-asterisk': { color: 'red' },
              }}
            />
            <TextField
              label="Quantity"
              type="text"
              variant="outlined"
              required
              margin="normal"
              placeholder=" Quantity"
              fullWidth
              InputLabelProps={{ shrink: true }}
              sx={{
                marginBottom: '20px',
                '& .MuiFormLabel-asterisk': { color: 'red' },
              }}
            />
            <TextField
              label="Price (per unit)"
              type="text"
              variant="outlined"
              required
              margin="normal"
              placeholder="Enter Price"
              fullWidth
              InputLabelProps={{ shrink: true }}
              sx={{
                marginBottom: '20px',
                '& .MuiFormLabel-asterisk': { color: 'red' },
              }}
            />
          </Box>

          <Box>
            <TextField
              label="Date"
              type="date"
              variant="outlined"
              required
              margin="normal"
              placeholder="Enter date added"
              fullWidth
              InputLabelProps={{ shrink: true }}
              sx={{
                marginBottom: '20px',
                '& .MuiFormLabel-asterisk': { color: 'red' },
              }}
            />
            <TextField
              label="Expiration Date"
              type="date"
              variant="outlined"
              required
              margin="normal"
              placeholder="Enter expire date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              sx={{
                marginBottom: '20px',
                '& .MuiFormLabel-asterisk': { color: 'red' },
              }}
            />
          </Box>

          {/* Centered Add Product Button Inside Container */}
          <Box
            sx={{
              gridColumn: '1 / -1',
              textAlign: 'center',
              marginTop: '20px',
            }}
          >
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                padding: '10px 30px',
                fontSize: '16px',
                background: 'linear-gradient(to right, #56CCF2, #2F80ED)',
              }}
            >
              Add Product
            </Button>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}