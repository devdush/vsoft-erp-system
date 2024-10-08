import React, { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Typography, Box, InputAdornment, IconButton, FormControl, Select } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function NewSupplier() {
  return (
    <Box>
    <Typography>Add a New Supplier</Typography>
    <Box>
        <TextField
        label="Name"
        type="name"
        variant="outlined"
        fullWidth
        margin='normal'
        required
        />
    </Box>

    <Box>
        <TextField
        label="Email Address"
        type="email"
        variant="outlined"
        fullWidth
        margin='normal'
        required
        />
    </Box>

    <Box>
        <TextField
        label="Supplier Address"
        type="address"
        variant="outlined"
        fullWidth
        margin='normal'
        required
        />
    </Box>

    <Box>
        <TextField
        label="NIC"
        type="nic"
        variant="outlined"
        fullWidth
        margin='normal'
        required
        />
    </Box>

    <Box>
        <TextField
        label="Phone Number"
        type="number"
        variant="outlined"
        fullWidth
        margin='normal'
        required
        />
    </Box> 

    <Box>
        <FormControl fullWidth margin="normal" required>
        <InputLabel id="item-list-label">Item Lists</InputLabel>
            <Select
                labeld="item-list-label"
                id=""
                type="lists"
                variant="outlined"
            >
         
         </FormControl>
    </Box>


    </Box>

  )
}
