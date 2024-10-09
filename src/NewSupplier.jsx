
// // import React, { useState } from 'react';
// // import { Box, TextField, Typography, Select, MenuItem, InputLabel, FormControl, Button, Input, Avatar } from '@mui/material';

// // export default function NewSupplier() {
// //   const [selectedItem, setSelectedItem] = useState('');
// //   const [imagePreview, setImagePreview] = useState(null);

// //   const handleItemChange = (event) => {
// //     setSelectedItem(event.target.value);
// //   };

// //   const handleImageUpload = (event) => {
// //     const file = event.target.files[0];
// //     if (file && (file.type === 'image/png' || file.type === 'image/jpeg')) {
// //       const reader = new FileReader();
// //       reader.onloadend = () => {
// //         setImagePreview(reader.result); // Set image preview as base64
// //       };
// //       reader.readAsDataURL(file); // Convert file to base64 string
// //     } else {
// //       alert('Please select a valid image file (PNG or JPG)');
// //     }
// //   };

// //   return (
// //     <Box>
// //       <Typography variant="h5" gutterBottom>
// //         Add a New Supplier
// //       </Typography>

// //       <Box>
// //         <TextField
// //           label="Name"
// //           type="name"
// //           variant="outlined"
// //           fullWidth
// //           margin="normal"
// //           required
// //         />
// //       </Box>

// //       <Box>
// //         <TextField
// //           label="Email Address"
// //           type="email"
// //           variant="outlined"
// //           fullWidth
// //           margin="normal"
// //           required
// //         />
// //       </Box>

// //       <Box>
// //         <TextField
// //           label="Supplier Address"
// //           type="address"
// //           variant="outlined"
// //           fullWidth
// //           margin="normal"
// //           required
// //         />
// //       </Box>

// //       <Box>
// //         <TextField
// //           label="NIC"
// //           type="text"
// //           variant="outlined"
// //           fullWidth
// //           margin="normal"
// //           required
// //         />
// //       </Box>

// //       <Box>
// //         <TextField
// //           label="Phone Number"
// //           type="number"
// //           variant="outlined"
// //           fullWidth
// //           margin="normal"
// //           required
// //         />
// //       </Box>

      
// //       <Box>
// //         <FormControl fullWidth margin="normal" required>
// //           <InputLabel id="item-list-label">Item Lists</InputLabel>
// //           <Select
// //             labelId="item-list-label"
// //             id="item-list"
// //             value={selectedItem}
// //             label="Item Lists"
// //             onChange={handleItemChange}
// //             variant="outlined"
// //           >
// //             <MenuItem value="">
// //               <em>None</em>
// //             </MenuItem>
// //             <MenuItem value="item1">Item 1</MenuItem>
// //             <MenuItem value="item2">Item 2</MenuItem>
// //             <MenuItem value="item3">Item 3</MenuItem>
// //           </Select>
// //         </FormControl>
// //       </Box>

// //          <Box margin="normal">
// //         <Typography variant="body1" gutterBottom>
// //           Upload Profile Picture:
// //         </Typography>
// //         <label htmlFor="image-upload">
// //           <Input
// //             accept="image/png, image/jpeg"
// //             id="image-upload"
// //             type="file"
// //             style={{ display: 'none' }}
// //             onChange={handleImageUpload}
// //           />
// //           <Avatar
// //             alt="Profile Image"
// //             src={imagePreview || "/default-avatar.png"} // Show uploaded image or default avatar
// //             sx={{ width: 100, height: 100, cursor: 'pointer' }}
// //           />
// //         </label>
// //       </Box>

// //       <Button variant="contained" color="primary" type="submit">
// //         Add Supplier
// //       </Button>
// //     </Box>
// //   );
// // } 


// import React, { useState } from 'react';
// import { Box, TextField, Typography, Select, MenuItem, FormControl, InputLabel, Button, Avatar, Input } from '@mui/material';

// export default function NewSupplier() {
//   const [selectedItem, setSelectedItem] = useState('');
//   const [imagePreview, setImagePreview] = useState(null);

//   const handleItemChange = (event) => {
//     setSelectedItem(event.target.value);
//   };

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file && (file.type === 'image/png' || file.type === 'image/jpeg')) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     } else {
//       alert('Please select a valid image file (PNG or JPG)');
//     }
//   };

//   return ( 
    
//     <Box
//     sx={{
//       background: '#f5f6fa',
//       minHeight: '100vh',
//       padding: '40px',
//     }}
//   >
//     {/* Page Title Aligned to Left */}
//     <Typography
//       variant="h5"
//       sx={{
//         fontWeight: 'bold',
//         color: '#333',
//         marginBottom: '20px',
//         marginLeft: '30px',
//       }}
//     >
//       Add a New Supplier
//     </Typography>

//       <Box
//         sx={{
//           background: '#ffffff',
//           borderRadius: '12px',
//           boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
//           padding: '10px',
//           width: '1200px',
//           display: 'grid',
//           gridTemplateColumns: '1fr 1.5fr 1.5fr',
//           gap: '10px',
//         }}
//       >
    
//         <Box sx={{ textAlign: 'center' }}>
//           <Typography variant="h6" sx={{ color: '#333', marginBottom: '20px' }}>
//             Upload Photo
//           </Typography>
//           <label htmlFor="image-upload">
//             <Input
//               accept="image/png, image/jpeg"
//               id="image-upload"
//               type="file"
//               style={{ display: 'none' }}
//               onChange={handleImageUpload}
//             />
//             <Avatar
//               alt="Profile Image"
//               src={imagePreview || '/default-avatar.png'}
//               sx={{
//                 width: '150px',
//                 height: '150px',
//                 border: '2px dashed #ccc',
//                 cursor: 'pointer',
//                 margin: 'auto',
//               }}
//             />
//           </label>
//           <Typography variant="body2" sx={{ color: '#777', marginTop: '10px' }}>
//             Allowed formats: JPG, JPEG, and PNG <br />
//             Max file size: 2MB
//           </Typography>
//         </Box>

//         <Box>
//           <TextField
//             label="Name"
//             type="text"
//             variant="outlined"
//             required
//             fullWidth
//             margin="normal"
//             sx={{ marginBottom: '20px' }}
//           />
//           <TextField
//             label="Email Address"
//             type="email"
//             variant="outlined"
//             required
//             fullWidth
//             margin="normal"
//             sx={{ marginBottom: '20px' }}
//           />
//           <TextField
//             label="Supplier Address"
//             type="text"
//             variant="outlined"
//             required
//             fullWidth
//             margin="normal"
//             sx={{ marginBottom: '20px' }}
//           />
//         </Box>

//         <Box>
//           <TextField
//             label="NIC"
//             type="text"
//             variant="outlined"
//             required
//             fullWidth
//             margin="normal"
//             sx={{ marginBottom: '20px' }}
//           />
//           <TextField
//             label="Phone Number"
//             type="number"
//             variant="outlined"
//             required
//             fullWidth
//             margin="normal"
//             sx={{ marginBottom: '20px' }}
//           />
//           <FormControl required fullWidth margin="normal" sx={{ marginBottom: '20px' }}>
//             <InputLabel id="item-list-label">Items List</InputLabel>
//             <Select
//               labelId="item-list-label"
//               id="item-list"
//               value={selectedItem}
//               label="Items List"
//               onChange={handleItemChange}
//               variant="outlined"
//             >
//               <MenuItem value="">
//                 <em>None</em>
//               </MenuItem>
//               <MenuItem value="item1">Item 1</MenuItem>
//               <MenuItem value="item2">Item 2</MenuItem>
//               <MenuItem value="item3">Item 3</MenuItem>
//             </Select>
//           </FormControl>
//         </Box>

       
//         <Box sx={{ gridColumn: '1 / span 3', textAlign: 'center', marginTop: '30px' }}>
//           <Button
//             variant="contained"
//             sx={{
//               background: 'linear-gradient(to right, #1976d2, #42a5f5)',
//               borderRadius: '8px',
//               padding: '10px 30px',
//               fontWeight: 600,
//               color: '#fff',
//               fontSize: '16px',
//               textTransform: 'none',
//             }}
//           >
//             Add Supplier
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// }
import React, { useState } from 'react';
import { Box, TextField, Typography, Select, MenuItem, FormControl, InputLabel, Button, Avatar, Input } from '@mui/material';

export default function NewSupplier() {
  const [selectedItem, setSelectedItem] = useState('');
  const [imagePreview, setImagePreview] = useState(null);

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

  return (
    <Box
      sx={{
        background: '#f5f6fa',
        //minHeight: '100vh',
        padding: { xs: '20px', md: '40px' }, // Adjust padding based on screen size
      }}
    >
      {/* Page Title Aligned to Left */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: 'bold',
          color: '#333',
          marginBottom: '20px',
          marginLeft: '10px',
        }}
      >
        Add a new supplier
      </Typography>

      {/* Form Container */}
      <Box
        sx={{
            background: '#ffffff',
                      borderRadius: '12px',
                      boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
                      padding: '0px',
                      width: 'auto',
                      display: 'grid',
                      gridTemplateColumns: '1fr 1.5fr 1.5fr',
                      gap: '10px',
        }}
      >
        {/* Upload Photo Section (Column 1) */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ color: '#333', marginBottom: '20px' }}>
            Upload Photo
          </Typography>
          <label htmlFor="image-upload">
            <Input
              accept="image/png, image/jpeg"
              id="image-upload"
              type="file"
              style={{ display: 'none' }}
              onChange={handleImageUpload}
            />
            <Avatar
              alt="Profile Image"
              src={imagePreview || '/default-avatar.png'}
              sx={{
                width: { xs: '100px', md: '150px' },
                height: { xs: '100px', md: '150px' },
                border: '2px dashed #ccc',
                cursor: 'pointer',
                margin: 'auto',
              }}
            />
          </label>
          <Typography variant="body2" sx={{ color: '#777', marginTop: '10px' }}>
            Allowed formats: JPG, JPEG, and PNG <br />
            Max file size: 2MB
          </Typography>
        </Box>

        {/* Input Fields (Second Column) */}
        <Box>
          <TextField
            label="Name"
            type="text"
            variant="outlined"
            required
         
            margin="normal"
            sx={{ marginBottom: '20px' }}
          />
          <TextField
            label="Email Address"
            type="email"
            variant="outlined"
            required
            
            margin="normal"
            sx={{ marginBottom: '20px' }}
          />
          <TextField
            label="Supplier Address"
            type="text"
            variant="outlined"
            required
            
            margin="normal"
            sx={{ marginBottom: '20px' }}
          />
        </Box>

        {/* Input Fields (Third Column) */}
        <Box>
          <TextField
            label="NIC"
            type="text"
            variant="outlined"
            required
            
            margin="normal"
            sx={{ marginBottom: '20px' }}
          />
          <TextField
            label="Phone Number"
            type="number"
            variant="outlined" 
            
            required
            
            margin="normal"
            sx={{ marginBottom: '20px' }}
          />
          <FormControl
  margin="normal"
  required
  sx={{ width: '200px' }} // Set a custom width here (you can adjust the value as needed)
>
  <InputLabel id="item-list-label">Item Lists</InputLabel>
  <Select
    labelId="item-list-label"
    id="item-list"
    value={selectedItem}
    label="Item Lists"
    onChange={handleItemChange}
    variant="outlined"
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
      </Box>

      {/* Submit Button Positioned Below the Form */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '30px',
        }}
      >
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{
            padding: '10px 30px',
            fontSize: '16px',
            background: 'linear-gradient(to right, #6a11cb, #2575fc)',
          }}
        >
          Add Supplier
        </Button>
      </Box>
    </Box>
  );
}
