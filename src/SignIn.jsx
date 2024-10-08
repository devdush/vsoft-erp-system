import React, { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Typography, Box, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    // Email validation function
    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    // Submit handler
    const handleSubmit = (e) => {
        e.preventDefault();

        let valid = true;

        // Reset errors
        setEmailError('');
        setPasswordError('');

        // Validate email
        if (!email) {
            setEmailError('Email is required');
            valid = false;
        } else if (!validateEmail(email)) {
            setEmailError('Enter a valid email address');
            valid = false;
        }

        // Validate password
        if (!password) {
            setPasswordError('Password is required');
            valid = false;
        } else if (password.length < 6) {
            setPasswordError('Password should be at least 6 characters');
            valid = false;
        }

        // If form is valid, process the form (e.g., send data to the server)
        if (valid) {
            console.log('Form submitted successfully');
            // Proceed with your form processing logic here
        }
    };

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);  // Updating state safely using the previous state
    };

    return (
        <Box sx={{ display: 'flex', height: '100vh', width: '100%' }}>
            <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                <Box sx={{ maxWidth: 400, width: '100%' }}>
                    <Typography variant="h6" color="textSecondary" gutterBottom>
                        Welcome!
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        Please Sign In
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit}> {/* Trigger validation on submit */}
                        <TextField
                            label="Email address"
                            type="email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Update email state on change
                            error={!!emailError}
                            helperText={emailError}
                        />

                        <TextField
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // Update password state on change
                            error={!!passwordError}
                            helperText={passwordError}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={togglePasswordVisibility} // This is called only when the button is clicked
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label="Remember me"
                            />
                            <Typography variant="body2" color="primary" sx={{ cursor: 'pointer' }}>
                                I forgot my password
                            </Typography>
                        </Box>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3,
                                mb: 2,
                                background: 'linear-gradient(to right, #56CCF2, #2F80ED)',
                                color: '#fff',
                                padding: '10px 0',
                                fontSize: '16px',
                                borderRadius: '8px',
                            }}
                        >
                            Sign In
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    flex: 1,
                    backgroundColor: '#a7d0f7',
                }}
            >
                {/* Optional: Background Image or Color */}
            </Box>
        </Box>
    );
};

export default SignIn;
