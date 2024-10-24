import React, { useState } from 'react';
import { TextField, Button, MenuItem, Grid, Avatar, IconButton, Typography } from '@mui/material';
import { Bolt, CloudUpload, FormatBold } from '@mui/icons-material';

const roles = ['Manager', 'Staff', 'Supervisor'];
const levels = ['Junior', 'Mid', 'Senior'];

const AddStaffForm = () => {
  const [photo, setPhoto] = useState(null);

  const handlePhotoUpload = (event) => {
    setPhoto(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submit logic here
    console.log('Form submitted');
  };
 

  return (
    
    <form onSubmit={handleSubmit} style={{ padding: '20px'}}>
      <Typography variant="h5" marginBottom={5} fontWeight={700}>
        Add a New Staff
      </Typography>
      <Grid container spacing={1}>
        {/* Left side: Photo upload */}
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
                src={photo || '/placeholder.png'} // Placeholder image 
                style={{ width: '150px', height:'150px' }}
              >
                <CloudUpload />
              </Avatar>
            </IconButton>
          </label>
          <Typography variant="body2" style={{ marginTop: '10px' }}>
            Allowed format JPG, JPEG, and PNG <br />
            Max file size 2MB
          </Typography>
        </Grid>

        {/* Right side: Form fields */}
        <Grid item xs={12} md={9} fontSize={20}>
          <Grid container spacing={2.5}>
            <Grid item xs={12} md={6}>
              <TextField label="First Name" fullWidth required
                sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '10px',
                      height:'50px',
                      textAlign:'center'
                    }
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Middle Name" fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '10px',
                  height:'50px',
                }
            }}
          />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Last Name" fullWidth required 
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '10px',
                  height:'50px',
                }
            }}/>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Username" fullWidth required 
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '10px',
                  height:'50px',
                }
            }}/>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="NIC" fullWidth required 
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '10px',
                  height:'50px',
                }
            }}/>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Email Address" type="email" fullWidth required 
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '10px',
                  height:'50px',
                }
            }}/>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Role" select fullWidth required
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '10px',
                  height:'50px',
                }
            }}>
                {roles.map((role) => (
                  <MenuItem key={role} value={role}>
                    {role}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Level" select fullWidth required
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '10px',
                  height:'50px',
                }
            }}>
                {levels.map((level) => (
                  <MenuItem key={level} value={level}>
                    {level}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Hire Date" type="date" InputLabelProps={{ shrink: true }} fullWidth required 
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '10px',
                  height:'50px',
                }
            }}/>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Phone Number" type="tel" fullWidth required 
              InputLabelProps={{
                sx: {
                  fontSize: '0.8rem', // Adjust the font size as needed
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '10px',
                  height:'50px',
                }
            }}/>
            </Grid>
            <Grid item xs={12}>
              <TextField label="Staff Address" multiline rows={1} fullWidth 
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '10px',
                  height:'60px',
                  
                }
            }}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <Button
          type="submit"
          variant="contained"
          style={{
            background: 'linear-gradient(to right, #00b4db, #0083b0)',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '20px',
          }}
        >
          Add Staff
        </Button>
      </div>
    </form>
  );
};

export default AddStaffForm;
