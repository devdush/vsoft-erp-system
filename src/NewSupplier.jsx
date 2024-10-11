
import React, { useState } from 'react';
import { Box, TextField, Typography, Select, MenuItem, FormControl, InputLabel, Button, Input } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

export default function NewSupplier() {
  const [selectedItem, setSelectedItem] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [emailError, setEmailError] = useState(false);
  const [nicError, setNICError] = useState(false);

  const handleItemChange = (event) => {
    setSelectedItem(event.target.value);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === 'image/png' || file.type === 'image/jpeg')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please select a valid image file (PNG or JPG)');
    }
  };

  const handleEmailChange = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailRegex.test(value));
  };

  const handleNICChange = (value) => {
    const nicRegex = /^[0-9]{9}[vVxX]$|^[0-9]{12}$/;
    setNICError(!nicRegex.test(value));
  };

  return (
    <Box
      sx={{
        background: '#f5f6fa',
        padding: { xs: '20px', md: '50px' },
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          background: '#ffffff',
          borderRadius: '12px',
          boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
          padding: '20px',
          width: '1500px', 
          height:'400px',
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr 1.5fr',
          gap: '20px',
          alignItems: 'start', 
          
        }}
      >
        {/* Image Upload Section */}
        <Box sx={{ textAlign: 'center' }}>
          <label htmlFor="image-upload">
            <Input
              accept="image/png, image/jpeg"
              id="image-upload"
              type="file"
              style={{ display: 'none' }}
              onChange={handleImageUpload}
            />
            <Box
              sx={{
                width: { xs: '100px', md: '150px' },
                height: { xs: '100px', md: '150px' },
                borderRadius: '50%',
                border: '2px solid #ccc',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: '#f5f5f5',
                marginLeft: '40px',
                marginTop: '10px',
              }}
            >
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Preview"
                  style={{ width: '100%', height: '100%', borderRadius: '50%' }}
                />
              ) : (
                <>
                  <CameraAltIcon sx={{ fontSize: '24px', color: '#888' }} />
                  <Typography variant="body2" sx={{ fontSize: '12px', color: '#888', marginTop: '5px' }}>
                    Upload photo
                  </Typography>
                </>
              )}
            </Box>
          </label>
          <Typography variant="body2" sx={{ color: '#777', marginTop: '10px' }}>
            <strong>Allowed formats:</strong><br />
            JPG, JPEG, and PNG <br />
            <strong>Max file size:</strong><br />
            2MB
          </Typography>
        </Box>

        {/* Updated Input Fields */}
        <Box>
          <TextField
            label="Name"
            type="text"
            variant="outlined"
            required
            margin="normal"
            placeholder="Enter name"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            sx={{
              marginBottom: '20px',
              '& .MuiFormLabel-asterisk': {
                color: 'red',
              },
            }}
          />
          <TextField
            label="Email Address"
            type="email"
            variant="outlined"
            required
            margin="normal"
            error={emailError}
            helperText={emailError ? 'Please enter a valid email address' : ''}
            onChange={(e) => handleEmailChange(e.target.value)}
            placeholder="Enter email address"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            sx={{
              marginBottom: '20px',
              '& .MuiFormLabel-asterisk': {
                color: 'red',
              },
            }}
          />
          <TextField
            label="Supplier Address"
            type="text"
            variant="outlined"
            required
            margin="normal"
            placeholder="Enter supplier address"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            sx={{
              marginBottom: '20px',
              '& .MuiFormLabel-asterisk': {
                color: 'red',
              },
            }}
          />
        </Box>

        <Box>
          <TextField
            label="NIC"
            type="text"
            variant="outlined"
            required
            margin="normal"
            error={nicError}
            helperText={nicError ? 'Please enter a valid NIC number' : ''}
            onChange={(e) => handleNICChange(e.target.value)}
            placeholder="Enter NIC number"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            sx={{
              marginBottom: '20px',
              '& .MuiFormLabel-asterisk': {
                color: 'red',
              },
            }}
          />
          <TextField
            label="Phone Number"
            type="tel"
            variant="outlined"
            required
            margin="normal"
            placeholder="Enter phone number"
            inputProps={{
              pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
              maxLength: 10,
            }}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            sx={{
              marginBottom: '20px',
              '& .MuiFormLabel-asterisk': {
                color: 'red',
              },
            }}
          />
          <FormControl
            margin="normal"
            required
            fullWidth
            sx={{
                marginBottom: '20px',
                '& .MuiFormLabel-asterisk': {
                  color: 'red',
                },
            }}
          >
            <InputLabel shrink id="item-list-label">
              Items List
            </InputLabel>
            <Select
              labelId="item-list-label"
              id="item-list"
              value={selectedItem}
              label="Items List"
              onChange={handleItemChange}
              variant="outlined"
              displayEmpty
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="item1">Item 1</MenuItem>
              <MenuItem value="item2">Item 2</MenuItem>
              <MenuItem value="item3">Item 3</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Centered Add Supplier Button Inside Container */}
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
            Add Supplier
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
